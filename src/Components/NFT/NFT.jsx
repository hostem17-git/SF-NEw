import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import NFTs from '../../assets/nft.png'

import Broccoli from '../../assets/Broccoli.png'
import Cauliflower from '../../assets/Cauliflower.png'
import Garlic from '../../assets/Garlic.png'
import Dragon_Fruit from '../../assets/Dragon_Fruit.png'
import Red_Bell_Pepper from '../../assets/Red_Pepper.png'
import Red_Onion from '../../assets/Red_Onion.png'
import Blueberry from '../../assets/Blueberry.png'
import Tomato from '../../assets/Tomato.png'
import Star_Fruit from '../../assets/Star_Fruit.png'
import Banana from '../../assets/Banana.png'
import Avocado from '../../assets/Avocado.png'
import Passion_Fruit from '../../assets/Passion_Fruit.png'
import Apple from '../../assets/Apple.png'
import $ from 'jquery';

import '../SuperFoodz.css'
import './NFT.css'

const NFT_Cards = [
    { background: "#a094c7", img: Broccoli, },
    { background: "#7480ff", img: Cauliflower, },
    { background: "#ff5fea", img: Garlic, },
    { background: "#ff7f8a", img: Red_Bell_Pepper, },
    { background: "#7fffae", img: Red_Onion, },
    { background: "#e5ff74", img: Blueberry, },
    { background: "#ffc37f", img: Tomato, },
    { background: "#a094c7", img: Star_Fruit, },
    { background: "#7480ff", img: Banana, },
    { background: "#ed6ee4", img: Avocado, },
    { background: "#ff7f8a", img: Dragon_Fruit, },
    { background: "#7fffae", img: Passion_Fruit, },
    { background: "#eafc88", img: Apple, },
]


// let mql = window.matchMedia('(max-width: 480px)');

const NFT = () => {
    const [mobile, setMobile] = useState(false)
    function isInViewport(v) {
        var elementTop = $(v).offset().top;
        var elementBottom = elementTop + $(v).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(document).ready(function () {
        var lastScrollTop = 0;
        var mTop = $('#nft_CardContainer')[0].offsetWidth - innerWidth;
        var mBottom = 10;
        var speed = 40;
        var test = 40
        $(window).resize(function () {
            if ($(window.innerWidth)[0] <= 480) {
                speed = 10
                test = 15
            }
        });
        $(window).scroll(function () {
            var check = isInViewport('#scrolling')
            if (check) {
                var st = $(this).scrollTop();
                var element = $('#nft_CardContainer')
                if (st > lastScrollTop) {
                    mTop = $('#nft_CardContainer')[0].offsetWidth - innerWidth
                    if (mBottom > 0) mBottom = 0
                    if (mBottom < -($('#nft_CardContainer')[0].offsetWidth - innerWidth)) mBottom = -($('#nft_CardContainer')[0].offsetWidth - innerWidth)
                    mBottom = mBottom - speed

                    $(window).resize(function () {
                        if ($(window.innerWidth)[0] <= 480) {
                            element.css({ "margin-left": (mBottom + 15) + 'px' })
                        }
                    });
                    element.css({ "margin-left": (mBottom + test) + 'px' })
                } else {
                    mBottom = 0
                    if (mTop > $('#nft_CardContainer')[0].offsetWidth - innerWidth) mTop = $('#nft_CardContainer')[0].offsetWidth - innerWidth
                    mTop = mTop - speed
                    element.css({ "margin-left": '-' + mTop + 'px' })
                }
                lastScrollTop = st;
            }
        });
    });

    const location = useLocation();

    // const ResizeObserver = new ResizeObserver(() => { console.log(innerWidth); }).observe($(window).innerWidth)

    useEffect(() => {
        setMobile(window.matchMedia('(max-width: 480px)').matches)
        console.log(window.innerWidth);
    }, [window.innerWidth])



    useEffect(() => {
        // let mql = window.matchMedia('(max-width: 480px)');

        $(document).ready(function () {
            if (location.hash === "#NFT") {
                window.scrollTo(0, $('#NFT')[0].offsetTop);
            }
        })
    }, [location.pathname])
    return (
        <>
            <div id="NFT" className="super_foodz" style={{ backgroundColor: '#72DBD4' }}>
                <div className="super_foodz-img nfts-img">
                    <img src={NFTs} alt="NFTs" width="100%" srcSet={NFTs} />
                </div>
                <h1 className="super_foodz-heading">
                    The Official SuperFoodz NFT Collection
                </h1>

                <div className="nft_card-container" id="nft_CardContainer">
                    {NFT_Cards.map((item, index) => {
                        return (
                            <div key={index} className="nft_card">
                                <div className="nft_card-imgs">
                                    <img id="card_scroll" src={item.img} alt="NFT" srcSet={item.img} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className="super_foodz-para mt-4" id='scrolling'>
                    Which SuperFoodz Superhero are you?  Which one of our 10,000 uniquely generated non-fungible SuperFoodz Superheros do you most closely identify with?
                    <br />
                    <br />
                    Getting in on the ground floor now as a Token Holder allows you direct access to the official SuperFoodz NFT Collection which will be offered here
                    <br />

                </p>
                <p className="super_foodz-para mt-4 text-center ">
                    -- Directly and exclusively to Token Holder Members only --
                    <br />

                </p>
                <p className="super_foodz-para mt-4">
                    through SuperFoodz at nominal pre-mint pricing before it is launched and made available on NFT markets.
                </p>
                <br />
                <br />

            </div>
        </>
    )
}

export default NFT