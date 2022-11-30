import React, { useEffect } from 'react'
import BuyFoodz from '../../assets/buy.png'
import Red_Bell_Pepper from '../../assets/SuperFoodz - Red Bell Pepper.png'

import '../SuperFoodz.css'
import { Link, useLocation } from 'react-router-dom'
import $ from 'jquery'

const Buy = () => {
    const location = useLocation();

    useEffect(() => {
        $(document).ready(function () {
            if (location.hash === "#BUYSUPERFOODZ") {
                window.scrollTo(0, $('#BUYSUPERFOODZ')[0].offsetTop);
            }
        })
    }, [location.pathname, window.innerWidth])

    return (
        <>
            <div id="BUYSUPERFOODZ" className="super_foodz BUY_SUPERFOODZ" style={{ backgroundColor: '#72DBD4' }}>
                <div className="super_foodz-img buy-img">
                    <img src={BuyFoodz} alt="SuperFoodz" width="100%" srcSet={BuyFoodz} />
                </div>
                <p className="buy_super_foodz-text my-3">
                    <div className='buy_superFoodz-main-heading'  >
                        The SuperFoodz SF Token Presale Event Has Begun
                    </div> 
                    <br />
                    <div className='buy_superFoodz-sub-heading' >Purchase your discounted loyalty tokens before the IEO (Initial Exchange Offering).</div>
                    <br />
                    Do not miss out on this exclusive presale event.
                </p>
                <Link to="/BuySuperFoodz" className="btn-download" style={{ margin: "0", }}>
                    Buy SuperFoodz
                </Link>
                <div className="super_foodz-tree right" id="buy-img">
                    <img src={Red_Bell_Pepper} alt="Tree" width="100%" srcSet={Red_Bell_Pepper} />
                </div>
            </div>
        </>
    )
}

export default Buy