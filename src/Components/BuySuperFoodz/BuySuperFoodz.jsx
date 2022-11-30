import React, { useState, useRef, useEffect } from 'react'
import BuyFoodz from '../../assets/buy.png'
import NavBar from '../NavBar/NavBar'
import Tree from '../../assets/Broccoli2.png'

import './BuySuperFoodz.css'

import { Outlet, useLocation } from 'react-router-dom'

const BuySuperFoodz = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/BuySuperFoodz') {
            window.scrollTo(0, 0);
        }
    }, [location.pathname])


    const btn_connect = (
        <button className="btn-connect-nav">
            CONNECT WALLET
        </button>
    )


    return (
        <>
            <NavBar button={btn_connect} />
            <div className="buy-container" >
                <div className="super_foodz-img ">
                    <img src={BuyFoodz} alt="SuperFoodz" width="100%" srcSet={BuyFoodz} />
                </div>
                <div className="buy_items">
                    <div className="buy_item-img">
                        <img src={Tree} alt="Tree" srcSet={Tree} />
                    </div>
                    <Outlet />
                    <div className="buy_item-text">
                        <strong>
                            SuperFoodz SF Loyalty Tokens are offered @ $0.18 which is a 22.2% discount to the $0.22 IEO (Initial Exchange Offering) price.
                        </strong>
                        <br />
                        <br />
                        Step 1: From the cryptocurrency dropdown menu, select which cryptocurrency you want to swap for SF Tokens.
                        <br />
                        <br />
                        <span>
                            Step 2:  &nbsp;
                            <p>Click CONNECT WALLET</p>
                        </span>
                        <br />
                        Step 3: On the WalletConnect Select Network pop up menu, select either Ethereum, Polygon, Avalanche or Binance Smart Chain network for the cryptocurrency you are swapping for
                        <br />
                        <br />
                        Step 4: Select your wallet
                        <br />
                        <br />
                        Step 5: Enter the amount you want to swap in the 
                        <span style={{ display:'initial', color: '#72DBD4', width:'fit-content' }}>  0</span>
                        <br /> 
                        <br /> 

                        step 6: Click APPROVE
                        <br />
                        <br />
                        SF Loyalty Tokens will automatically be sent to your wallet. Any questions please refer to FAQ or Contact Us.

                    </div>
                </div>
            </div>
        </>
    )
}

export default BuySuperFoodz