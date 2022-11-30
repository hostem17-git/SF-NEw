// Bridge -> tokensReceived native
// CroudSale -> buyToken function buyToken(address _token, uint256 _amount) || native as well as token

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

import SF from "../../assets/favicon.png";
import ETH from "../../assets/ETH.png";
import MATIC from "../../assets/MATHIC.png";
import AVAX from "../../assets/AVAX.png";
import BNB from "../../assets/BNB.png";
import USDC from "../../assets/USDC.png";
import USDT from "../../assets/USDT.png";
import "./BuySuperFoodz.css";

// *********************************
import {useConnectModal } from '@web3modal/react'
import { useAccount,useBalance  } from '@web3modal/react'
import { useDisconnect } from '@web3modal/react' //********** */
import { useNetwork } from '@web3modal/react'
import { useProvider } from '@web3modal/react'
import { useSwitchNetwork } from '@web3modal/react'
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContractRead } from '@web3modal/react'
import { ethers } from 'ethers';

import {ERC20Abi,tokenSymbol,tokenDecimals,logo ,tokenAddress,croudSaleAddres, EthBridgeAddress, BSCBridgeAddress,AvalancheBridgeAddress, usdt, usdc,loadingGif,tokenABI,bridgeABI,croundSaleABI,priceFeedABI,ETH_USD_PriceFeed_Testnet,BNB_USD_PriceFeed_Testnet,MATIC_USD_PriceFeed_Testnet,AVAX_USD_PriceFeed_Testnet} from "./assets"

import { useSigner } from '@web3modal/react'
// *********************************


const Swap_Card = () => {
    
    const [snackBarOpen, setSnackBar] = useState(false);
    const [message, setMessage] = useState("Welcome!");
    const [snackBarStyle, setSnackBarStyle] = useState("snackBarGreen");
    const { isOpen, open, close } = useConnectModal()
    const [userNativeBalance,setUserNativeBalance] = useState(0);
    const [userSuperFoodzBalance,setUserSuperFoodzBalance] = useState(0);
    const [amountToRecieve,setAmountToRecieve]= useState(0);
    const [nativeUSDValue,setNativeUSDValue] = useState(10);
    const [inputAmount,setInputAmount] = useState(0);
    const [balanceLoading,setBalanceLoading] =useState(false); 

    var networkD,isReadyNetwork;
    {
        const { network, isReady } = useNetwork()
        networkD = network;
        isReadyNetwork = isReady;
    }

    var { account, connector ,isReady } = useAccount();

    const coinNetworkData = {
        MATIC:{
            chainID:80001,
            priceFeed:MATIC_USD_PriceFeed_Testnet
        },
        USDC:{
            chainID:80001,
            priceFeed:MATIC_USD_PriceFeed_Testnet
        },
        USDT:{
            chainID:80001,
            priceFeed:MATIC_USD_PriceFeed_Testnet
        },
        BNB:{
            chainID:97,
            priceFeed:BNB_USD_PriceFeed_Testnet
        },
        ETH:{
            chainID:5,
            priceFeed:ETH_USD_PriceFeed_Testnet
        },
        AVAX:{
            chainID:43113,
            priceFeed:AVAX_USD_PriceFeed_Testnet
        }
    }

    var { data, errorBalance, isLoadingBalance, refetch} = useBalance({
        addressOrName: account.address
    })

    var dataRead,errorRead,isLoadingRead,refetchRead;
    var superFoodzBalanceData,superFoodzBalanceError,isLoadingSuperFoodzBalance,refetchSuperFoodzBalance;

    {
        const { data , error, isLoading, refetch} = useContractRead({  

            address:coinNetworkData["MATIC"].priceFeed,
            abi:priceFeedABI,
            functionName:"latestAnswer",
            chainId:coinNetworkData["MATIC"].chainID
              })
        dataRead = data;
        errorRead = error;
        isLoadingRead = isLoading;
        refetchRead = refetch;
    }

    {
        const { data , error, isLoading, refetch} = useBalance({  
            addressOrName:account.address,
            token:tokenAddress,
            chainId:coinNetworkData["MATIC"].chainID,
            formatUnits:'ether'
            })
        superFoodzBalanceData = data;
        superFoodzBalanceError = error;
        isLoadingSuperFoodzBalance = isLoading;
        refetchSuperFoodzBalance = refetch;
    }

    var signerData,signerError,signerLoading,signerRefetch;
    {
        const { data, error, isLoading, refetch } = useSigner();
        signerData = data;
        signerError = error;
        signerLoading = isLoading;
        signerRefetch = refetch;
    }

    const disconnect = useDisconnect()

    const handleCloseSandBox = (event, reason, key) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBar(false);
    };

    const { provider } = useProvider()

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSandBox}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const addTokenToMetamask =()=> {

       window?.ethereum.request({
            "method": "wallet_watchAsset",
            "params": {
                "type": "ERC20",
                "options": {
                    "address": tokenAddress,
                    "symbol": tokenSymbol,
                    "decimals": tokenDecimals,
                    "image": logo
                }
            },
        })

    }

    const transact = async()=>{
        if(swap1.title == "USDC" || swap1.title == "USDT"){
            // argument , croudsale
            const address = (swap1.title == "USDC")?usdc:usdt;
            const amount = inputAmount*1000000;

            const usdContract = new ethers.Contract(address.toString(),ERC20Abi,signerData); 
            const approveTxResponse = await usdContract.approve(croudSaleAddres,amount);
            
            setMessage(<p> Approval Transaction Initiated </p>);
            setSnackBarStyle("snackBarGreen");
            setSnackBar(true);

            const ApprovaltxReceipt = await approveTxResponse.wait();

            setMessage(`Approval complete`);
            setSnackBar(true);

            const contract = new ethers.Contract(croudSaleAddres,croundSaleABI,signerData);
            const txResponse = await contract.buyToken(address.toString(),amount.toString()); 

            setMessage(<p> Transaction Initiated </p>);
            setSnackBarStyle("snackBarGreen");
            setSnackBar(true);
            const txReceipt = await txResponse.wait();

            setMessage(`Transaction complete`);
            setSnackBar(true);


        }else{
            if(swap1.title == "MATIC"){
                const address = "0x0000000000000000000000000000000000000000";
                const amount = ethers.utils.parseEther(inputAmount);
                const contract = new ethers.Contract(croudSaleAddres,croundSaleABI,signerData);
                const txResponse = await contract.buyToken(address,amount.toString(),{value:amount});
                setMessage(<p> Transaction Initiated </p>);
                setSnackBarStyle("snackBarGreen");
                setSnackBar(true);
                const txReceipt = await txResponse.wait();
                setMessage(`Transaction complete`);
                setSnackBar(true);
            }
            else{
                var bridgeAddress;
                if(swap1.title == "BNB"){
                    bridgeAddress = BSCBridgeAddress;
                }else if(swap1.title == "ETH"){
                    bridgeAddress = EthBridgeAddress;
                }else if(swap1.title == "AVAX"){
                    bridgeAddress =AvalancheBridgeAddress;
                }
                const amount = ethers.utils.parseEther(inputAmount);
                const contract = new ethers.Contract(bridgeAddress,bridgeABI,signerData);
                const txResponse = await contract.tokensReceived({value:amount});
                setMessage(<p> Transaction Initiated </p>);
                setSnackBarStyle("snackBarGreen");
                setSnackBar(true);
                const txReceipt = await txResponse.wait();
                setMessage(`Transaction complete`);
                setSnackBar(true);
            }


            if(parseFloat(userSuperFoodzBalance) == 0){
                addTokenToMetamask();
            }

            await updateSuperFoodzBalance();
        }

    }

    const buyTokens = async()=>{
        
        
        console.log(provider)
        
        if(parseFloat(userSuperFoodzBalance) == 0){
            addTokenToMetamask();
        }

        try{
             if(networkD?.chain?.id != coinNetworkData[swap1.title].chainID){
                throw {
                    reason:"Please switch to correct Network",
                }
            }
            
            await signerRefetch();
            while(signerLoading);
    
            await transact();            

        }catch(e){
            console.log(e.event);

            
                if (e.reason === undefined)
                setMessage(e.message)
                else
                setMessage(e.reason)
                setSnackBarStyle("snackBarRed");
                // setInputAmount(0);
                setSnackBar(true);
           
        } 
        
        
 
    }

    const updateNativeRate = async (network)=>{
        if(network == "USDC" || network == "USDT"){
            setNativeUSDValue(1);
        }else{
            await refetchRead({
                address:coinNetworkData[network].priceFeed,
                abi:priceFeedABI,
                functionName:"latestAnswer",
                chainId:coinNetworkData[network].chainID
            })
        }

    }

    const updateNativeBalance = async (network)=>{
        updateNativeRate(network);
        if(network =="USDC" || network =="USDT"){
            if(network == "USDC"){
                await refetch({
                    addressOrName: account.address,
                    token:usdc,
                    chainId:coinNetworkData[network].chainID
                })

            }else{
                await refetch({
                    addressOrName: account.address,
                    token:usdt,
                    chainId:coinNetworkData[network].chainID
                })

            }
        }else{
            await refetch({
                addressOrName: account.address            ,
                chainId:coinNetworkData[network].chainID
            })
        }
        setBalanceLoading(true);
        
    }

    const updateSuperFoodzBalance = async()=>{
        await refetchSuperFoodzBalance({
            addressOrName: account.address,
            token:tokenAddress,
            functionName:"balanceOf",
            args:[account.address],
            chainId:coinNetworkData["MATIC"].chainID
        })
    }

    const handleInput = (e)=>{

        setInputAmount(e.target.value);
        const USDsent = (e.target.value) * nativeUSDValue;
        const SF_recieved = (parseFloat(USDsent)/(0.18)).toFixed(4); 
        setAmountToRecieve(SF_recieved);
    
    }

    // To update user Native Balance
    useEffect(()=>{
        if(account.isConnected){
            const balance = data?.formatted;
            setBalanceLoading(false);
            setUserNativeBalance(parseFloat(balance).toFixed(4));
        }else{
            setBalanceLoading(false);
            setUserNativeBalance(parseFloat(0));

        }
    },[data])


    // To update Native rate
    useEffect(()=>{
        let rate = (dataRead)?.toString();
        rate = (parseFloat(rate)/100000000);
        setNativeUSDValue(rate);
    },[dataRead]);


    // To update superFoodz Balance
    useEffect(()=>{
        if(account.isConnected){
            setUserSuperFoodzBalance(parseFloat(superFoodzBalanceData?.formatted)?.toFixed(4))
        }else{
            setUserSuperFoodzBalance(0);
        }

    },[superFoodzBalanceData]);
    useEffect(()=>{
        if(account.isConnected)
            {
                updateSuperFoodzBalance();
            }
    },[isOpen])


    const [token, setToken] = useState('')
    const handleChange = event => {
        let result;
        if (JSON.stringify(event.target.value).split(".").length - 1 > 1) {
            result = token
        } else {
            result = event.target.value.replace(/[^0-9.]+/g, '');
        }
        setToken(result)
        handleInput(event);
    };

    const [connected, setConnected] = useState(false);

    const coinData = [
        { title: "ETH", icon: ETH },
        { title: "MATIC", icon: MATIC },
        { title: "AVAX", icon: AVAX },
        { title: "BNB", icon: BNB },
        { title: "USDC", icon: USDC },
        { title: "USDT", icon: USDT },
    ];

    const target1 = useRef(null);
    const mainState = {
        title: "",
        modalOpen: false,
    };

    const [open1, setOpen1] = useState(mainState);
    const handleOpen1 = () => {
        setOpen1({ title: "", modalOpen: !mainState.modalOpen });
    };
    const [swap1, setSwap1] = useState({ title: "MATIC", img: MATIC });

    const changeState = (value) => {
        switch (value) {
            case "ETH":
                setSwap1({ title: "ETH", img: ETH });
                updateNativeBalance("ETH");
                if(networkD?.chain?.id != coinNetworkData['ETH'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Ethereum");
                    setSnackBar(true);
                }
                break;
            case "MATIC":
                setSwap1({ title: "MATIC", img: MATIC });
                updateNativeBalance("MATIC");
                if(networkD?.chain?.id != coinNetworkData['MATIC'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Polygon");
                    setSnackBar(true);
                }
                break;
            case "AVAX":
                setSwap1({ title: "AVAX", img: AVAX });
                updateNativeBalance("AVAX");
                if(networkD?.chain?.id != coinNetworkData['AVAX'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Avalance");
                    setSnackBar(true);
                }

                break;
            case "BNB":
                setSwap1({ title: "BNB", img: BNB });
                setSwap1({ 'title': 'BNB', 'img': BNB });
                updateNativeBalance("BNB");

                if(networkD?.chain?.id != coinNetworkData['BNB'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Binance Smart Chain");
                    setSnackBar(true);
                }
                break;
            case "USDC":
                setSwap1({ title: "USDC", img: USDC });
                setSwap1({ 'title': 'USDC', 'img': USDC });
                updateNativeBalance("USDC");

                if(networkD?.chain?.id != coinNetworkData['MATIC'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Polygon");
                    setSnackBar(true);
                }

                break;
            case "USDT":
                setSwap1({ title: "USDT", img: USDT });
                setSwap1({ 'title': 'USDT', 'img': USDT });
                updateNativeBalance("USDT");

                if(networkD?.chain?.id != coinNetworkData['MATIC'].chainID){
                    setSnackBarStyle("snackBarBlue");
                    setMessage("Please switch to Polygon");
                    setSnackBar(true);
                }
                break;
            default:
                return;
        }
        setOpen1({ title: "", modalOpen: false });
    };

    const handleClose = () => {
        open1.modalOpen && 
        setOpen1({ title: "", modalOpen: false });
    }

    return (
        <>
        <Snackbar
            open={snackBarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSandBox}
            message={message}
            action={action}
            className={snackBarStyle}
        />

            <div className="buy_item_card-main" onClick={handleClose} >
                <div className="buy_item_card-secendary">
                    <div className="buy_item_card-secendary-top" >
                        <Overlay
                            target={target1.current}
                            show={open1.modalOpen}
                            placement="bottom"
                        >
                            {(props) => (
                                <Tooltip id="swap1" {...props}>
                                    {coinData.map((item, index) => {
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => changeState(item.title)}
                                                className="buy_item_card-secendary-top-box"
                                            >
                                                <div className="buy_item_card-secendary-text">
                                                    <img
                                                        src={item.icon}
                                                        alt={item.title}
                                                        srcSet={item.icon}
                                                    />
                                                    {item.title}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </Tooltip>
                            )}
                        </Overlay>
                        <button
                            ref={target1}
                            onClick={() => handleOpen1()}
                            className="buy_item_card-secendary-top-box"
                        >
                            <div
                                className="buy_item_card-secendary-text"
                                style={{ gap: "2px" }}
                            >
                                <img src={swap1.img} alt="sf" srcSet={swap1.img} />
                                {swap1.title}
                                <MdKeyboardArrowDown />
                            </div>
                        </button>
                        {/* <input
                            type="number"
                            name="token"
                            id="token"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            autocomplete="one-time-code"
                            className="input_transparent "
                            placeholder="0"
                        /> */}
                        <input
                            type="text"
                            title="Non-negative integral number"
                            placeholder="0"
                            name="token"
                            id="token"
                            className="input_transparent"
                            value={token}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="buy_item_card-secendary-bottom">
                        <p className="secendary-text">
                            Balance: {userNativeBalance}
                            {balanceLoading && <img src={loadingGif} alt ="loading GIF" />} 
                            </p>
                        <p className="secendary-text">
                            ${nativeUSDValue}
                            </p>

                    </div>
                </div>
                <div className="arrow-card" style={{ cursor: "default" }}>
                    <FaArrowDown style={{ fontSize: "40px" }} />
                </div>

                <div className="buy_item_card-secendary">
                    <div className="buy_item_card-secendary-top">
                        <div
                            className="buy_item_card-secendary-top-box"
                            style={{ cursor: "default" }}
                        >
                            <div
                                className="buy_item_card-secendary-text"
                                style={{ width: "80%", justifyContent: "flex-start" }}
                            >
                                <img src={SF} alt="sf" srcSet={SF} />
                                SF
                            </div>
                        </div>
                        <p className="input_transparent" style={{ marginBottom: 8, color:'#010002' }}>
                            <div
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    bottom: 0,
                                    padding: "0 2px", 
                                }}
                            >
                               {amountToRecieve}
                            </div>
                        </p>
                    </div>
                    <div className="buy_item_card-secendary-bottom" >
                        <p className="secendary-text">
                            Balance: {userSuperFoodzBalance}
                            </p>
                        <p className="secendary-text">$0.18</p>
                    </div>
                </div>

                {!account.isConnected ? 
<button className="btn-connect" style={{ textDecoration: "none" }} onClick={open}  >Connect Wallet</button>
:
<button className="btn-connect" style={{ textDecoration: "none" }} onClick={buyTokens}  >Approve</button>
}
                                    
           <button onClick={disconnect}>Disconnect</button>
            </div>
        </>
    )
};

export default Swap_Card;
