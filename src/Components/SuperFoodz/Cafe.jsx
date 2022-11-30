import React, { useEffect } from 'react'
import Cafe_img from '../../assets/Cafe.png'
import Apple from '../../assets/SuperFoodz - Apple.png'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import $ from 'jquery'
import '../SuperFoodz.css'

const Cafe = () => {
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        $(document).ready(function () {
            if (location.hash === "#CAFE") { 
                navigate('/SuperFoodzCafe')
            }
        })
    }, [location.pathname]) 
    return (
        <>
            <div id="CAFE" className="super_foodz"  >
                <div className="super_foodz-img team-img">
                    <img src={Cafe_img} alt="SuperFoodz Cafe" width="100%" srcSet={Cafe_img} />
                </div>
                <h1 className="super_foodz-heading">
                    Destination | Place | Utility | Community
                </h1>
                <p className="super_foodz-para">
                    Go on a journey with Astro Apple into the SuperFoodz Metaverse. Real-time digital locations such as the SuperFoodz Café, SF will demonstrate and educate to a like minded and compassionate community how to work together in addressing worldwide hunger and do our part in helping to overcome it.
                    <br />
                    <br />
                    Through educational games, art, and built-in value, SF will take a practical and interactive approach to assembling a community that will individually prosper while collectively working together to solve critical food scarcity issues.
                </p>
                <Link to="/SuperFoodzCafe" className="btn-download" style={{ margin: "20px 0 15px" }}>
                    Enter The SuperFoodz Cafe
                </Link>
                <h1 className="super_foodz-heading"  >
                    Partnerships With Athletes, Influencers & <br /> Likeminded Celebrities
                </h1>
                <p className="super_foodz-para">
                    Who doesn’t like doing good things?  You know who you are.  Our community is about fun, expanded sense of awareness, and the ability to generate good vibes, good deeds, and abundance for all who join us. Come to the Café, hang out, see what we mean.
                </p>

                <img src={Apple} alt="Tree" className='cafe' srcSet={Apple} />
                {/* <div className="super_foodz-tree right cafe">
                </div> */}
            </div>

        </>
    )
}

export default Cafe