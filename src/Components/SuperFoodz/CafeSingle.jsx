import React from 'react'
import Cafe_img from '../../assets/Cafe.png'
import CafeBG from '../../assets/CafeBG.png'
import NavBar from '../NavBar/NavBar'

import '../SuperFoodz.css'

const CafeSingle = () => {
    return (
        <>
            <NavBar img={CafeBG} name="cafe" />

            <div className="super_foodz cafe-bg-container" style={{ backgroundColor: '#72DBD4',  }}>
                <div className="super_foodz-img">
                    <img src={Cafe_img} alt="SuperFoodz Cafe" width="100%" srcSet={Cafe_img} />
                </div>
                <p className="super_foodz-para cafe-para">
                    <br />
                    After the hard work is done how about a place to hang?  The SuperFoodz Café is an exclusive digital Metaverse environment which is VIP and only available to SuperFoodz Token Holder Members.  Anyone can visit the Metaverse however only Token Holder Members can hang in the
                    <br />
                    <br />
                </p>
                <h1 className="cafe-single_heading" >VegeVerse....</h1>

                <p className="super_foodz-para cafe-para">
                    <br />
                    Chill, relax, play games, meet new friends, and be prepared to be surprised by random social events, gatherings, and cozy plugged and unplugged live-streamed Metaverse performances by world renowned A-List musical artists who are all members of our community.
                    <br />
                    <br />
                </p>

            </div>
        </>
    )
}

export default CafeSingle