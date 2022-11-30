import React from 'react'
import LogoSection from './LogoSection/LogoSection'
import NavBar from './NavBar/NavBar'
import SuperFoodz from './SuperFoodz/SuperFoodz';
import Buy from './SuperFoodz/Buy';
import RoadMap from './SuperFoodz/RoadMap';
import Whitepaper from './SuperFoodz/Whitepaper';
import NFT from './NFT/NFT';
import Cafe from './SuperFoodz/Cafe';
import Team from './SuperFoodz/Team';
import LocalCharities from './SuperFoodz/LocalCharities';
import Footer from './NavBar/Footer';
import CafeSingle from './SuperFoodz/CafeSingle';
import MainSection from '../assets/main-section.png'

const Home = () => {
    return (
        <>
            <LogoSection />
            <NavBar img={MainSection} />
            <SuperFoodz />
            <Buy />
            <RoadMap />
            <NFT />
            <Cafe />
            <Whitepaper />
            <Team />
            <LocalCharities />
            <Footer />
        </>
    )
}

export default Home