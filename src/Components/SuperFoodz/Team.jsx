import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Team_Img from '../../assets/Team.png'
import Broccoli from '../../assets/SuperFoodz - Broccoli.png'
import Cauliflower from '../../assets/SuperFoodz - Cauliflower.png'
import Garlic from '../../assets/SuperFoodz - Garlic With Tongue.png'
import Red_Onion from '../../assets/SuperFoodz - Red Onion.png'
import Tomato from '../../assets/SuperFoodz - Tomato.png'
import Banana from '../../assets/SuperFoodz - Banana.png'
import $ from 'jquery'
import '../SuperFoodz.css'

const teamCards = [
    {
        l1: 'Broccoli Rob',
        l2: 'Technology &',
        l3: 'Finance',
        img: Broccoli
    },
    {
        l1: 'The Cauliflower Kid',
        l2: 'Operations &',
        l3: 'Entertainment',
        img: Cauliflower
    },
    {
        l1: 'Tomato Tornado',
        l2: 'Community',
        l3: 'Manager',
        img: Tomato
    },
    {
        l1: 'Relentless Red Onion',
        l2: 'Charity',
        img: Red_Onion
    },
    {
        l1: 'Johnny Bananas ',
        l2: 'Artist',
        img: Banana
    },
    {
        l1: 'Intergarlactic ',
        l2: 'Legal',
        img: Garlic
    },
]

const Team = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#TEAM") {
            window.scrollTo(0, 7900);
        }
        $(document).ready(function () {
            if (location.hash === "#TEAM") {
                window.scrollTo(0, $('#TEAM')[0].offsetTop);
            }
        })
    }, [location.pathname])
    return (
        <>
            <div id="TEAM" className="super_foodz team-section">
                <div className="super_foodz-img team-img">
                    <img src={Team_Img} alt="RoadMaps" width="100%" srcSet={Team_Img} />
                </div>
                <div className="team-container">
                    {teamCards.map((item, index) => {
                        return (
                            <div key={index} className="team_card">
                                <img src={item.img} alt="Team" id={`team-img-${index}`} width='70%' srcSet={item.img} />
                                <div className="super_foodz-heading team-names">
                                    <div className="team">{item.l1}</div>
                                    <div className="team">{item.l2}</div>
                                    <div className="team">{item.l3 && item.l3}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Team