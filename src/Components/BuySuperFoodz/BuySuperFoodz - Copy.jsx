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
                            SuperFoodz SF Loyalty Tokens are offered @ $0.18 which is a 22.2% discount to the $0.22 exchange listing price.
                        </strong>
                        <br />
                        <br />
                        <br />
                        <span>
                            Step 1:  &nbsp;
                            <p>Click CONNECT WALLET</p>

                        </span>
                        <br />
                        <br />
                        Step 2:  Select which cryptocurrency you want to swap for SF Tokens, and enter the amount you want to swap.
                        <br />
                        <br />
                        Step 3: Click APPROVE
                        <br />
                        <br />
                        SF Loyalty Tokens will automatically be sent to your wallet.

                    </div>
                </div>
            </div>
        </>
    )
}

export default BuySuperFoodz