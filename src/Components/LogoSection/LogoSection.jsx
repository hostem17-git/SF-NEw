import React from 'react'
import './LogoSection.css'
import Logo from '../../assets/logo.svg'
import $ from 'jquery';



const LogoSection = () => {
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        var range = 300 // finetune this to the desired effect
        $('.logo_section-image').css("opacity", 1 - st / range); // animate your element
    });

    return (
        <>
            <div className="logo_section_container">
                <a href='#navbar' className="logo_section-image">
                    <img src={Logo} id="img-logo" width="400px" alt="Logo" srcSet={Logo} />
                </a>
            </div>
        </>
    )
}

export default LogoSection