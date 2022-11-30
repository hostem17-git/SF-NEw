import React from 'react'

import Logo from '../../assets/logo.svg'
import Twitter from '../../assets/Twitter.png'
import Discord from '../../assets/Discord.png'
import Instagram from '../../assets/Instagram.png'
import Telegram from '../../assets/Telegram.png'
const social = [
    { img: Twitter, link: 'https://twitter.com/SuperFoodz' },
    { img: Discord, link: 'https://discord.com/invite/VKRNrkdA3k' },
    { img: Instagram, link: 'https://www.instagram.com/superfoodzcafe/' },
    { img: Telegram, link: 'https://t.me/SuperFoodzCafe' }
]

import '../SuperFoodz.css'

const Footer = () => {
    return (
        <>
            <div className="super_foodz footer-container" >
                <a href='#navbar' className="footer-image"  >
                    <img src={Logo} alt="Logo" style={{ marginBottom: '15px', width: "100%", maxWidth: '460px' }} srcSet={Logo} />
                </a>

                <div className='copyrights'>Copyright © 2022 SuperFoodz</div>

                <div className="footer">
                    <h1 className="footer-text">Join us on</h1>
                    {social.map((data, index) => {
                        return (
                            <a key={index} target="_blank" href={data.link}>
                                <img src={data.img} alt="Logo" width="20px" srcSet={data.img} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer