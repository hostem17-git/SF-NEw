import React from 'react'
import Whitepapers from '../../assets/Whitepaper.png'
import Star_Fruit from '../../assets/SuperFoodz - Star Fruit.png'
import Whitepaper_PDF from '../../assets/SuperFoodz Whitepaper.pdf'
import '../SuperFoodz.css'

const Whitepaper = () => {
    return (
        <>
            <div className="super_foodz whitepaper" style={{ backgroundColor: '#72DBD4', }}>
                <div className="super_foodz-img whitepaper-img" >
                    <img src={Whitepapers} alt="SuperFoodz" width="100%" srcSet={Whitepapers} />
                </div>
                <a target="_blank" href={Whitepaper_PDF} className="btn-download">
                    Download Whitepaper
                </a>
                <img src={Star_Fruit} alt="Tree" className='img2' srcSet={Star_Fruit} />
            </div>
        </>
    )
}

export default Whitepaper