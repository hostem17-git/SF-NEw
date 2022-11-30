import React from 'react'
import CoinBase from '../../assets/coinbase.png'
import MetaMask from '../../assets/metamask.png'
import Trust from '../../assets/trust.png'
import WalletConnect from '../../assets/WalletConnect.png'
import Binance from '../../assets/binance.png'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './BuySuperFoodz.css'


const Wallets = (props) => {

    const { setWalletSelect } = props;

    const walletData = [
        { title: "COINBASE WALLET", img: CoinBase },
        { title: "METAMASK", img: MetaMask },
        { title: "TRUST WALLET", img: Trust },
        { title: "WALLETCONNECT", img: WalletConnect }, 
    ]

    return (
        <div className='buy_item_card-main' style={{ background: '#22beef' }}>
            <div className="wallet-container">
                <div className="modal-wallet">
                    <Link to="/BuySuperFoodz/"><FaArrowLeft style={{ color: '#111', fontSize: "35px" }} /></Link>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: 900, textAlign: 'center' }}>SELECT A WALLET</div>
                </div>
                {
                    walletData.map((item, index) => {
                        return (
                            <div className="wallet-card" key={index} onClick={() => setWalletSelect(false)}>
                                <div className="wallet-card-img">
                                    <img src={item.img} alt={item.title} srcset={item.img} />
                                </div>
                                <div className="wallet-card-text">
                                    {item.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wallets