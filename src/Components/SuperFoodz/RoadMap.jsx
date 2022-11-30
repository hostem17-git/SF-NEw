import React, { useEffect } from 'react'
import RoadMaps from '../../assets/Roadmap.png'
import Dragon_Fruit from '../../assets/SuperFoodz - Dragon Fruit.png'
import RMapGp from '../../assets/RMapGp.png'
import '../SuperFoodz.css'
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

const Cardmap = [
    {
        title: "Q3 2022",
        l1: "Whitepaper Released",
        l2: "Website Launched",
        l3: "Launch Social Media Community",
        l4: "Establish Community Relations",
        l5: "Athlete | Celebrity | Influencer Partnerships Established"
    },
    {
        title: "Q4 2022",
        l1: "DEX Liquidity Pool Launch",
        l2: "Tier 1 CEX Token Listings",
        l3: "NFT Launch",
        l4: "SuperFoodz Metaverse Performance Schedule",
        l5: "Deepen Community Relations",
        l6: "Charity Expansion"
    },
    {
        title: "Q1 2023",
        l1: "Strategic Partnerships Within Giving Community",
        l2: "Deepen International Relations",
        l3: "Cultivate Audio & Visual NFT Products",
        l4: "Expand Community",
        l5: "Expand SF Utility Functionality"
    },
    {
        title: "BEYOND",
        l1: "SuperFoodz P2E Game",
        l2: "Global Acceptance of SF Loyalty Token",
        l3: "Further Transcend 21st Century Blockchain Giving Model"
    }
]


const RoadMap = () => {
    const location = useLocation();

    useEffect(() => {
        $(document).ready(function () {
            if (location.hash === "#ROADMAP") {
                window.scrollTo(0, $('#ROADMAP')[0].offsetTop);
            }
        })
    }, [location.hash])

    return (
        <>
            <div id="ROADMAP" className="super_foodz"  >
                <div className="super_foodz-img rdmap-img">
                    <img src={RoadMaps} alt="RoadMaps" width="100%" srcSet={RoadMaps} />
                </div>
                <h1 className="super_foodz-heading">
                    Let Flaming Dragon Fruit Walk You Down <br /> The RoadMap
                </h1>
                <div className="RoadMap_Group">
                    <img src={Dragon_Fruit} alt="Tree" className='chili' srcSet={Dragon_Fruit} />
                    <img src={RMapGp} alt="RMapGp" className='rdmap' srcSet={RMapGp} />
                </div>
                <div className="roadMap_Card-container">
                    {Cardmap.map((item, index) => {
                        return (
                            <div className="roadMap_Card" key={index}>
                                <h1 className="roadMap_Card-title">{item.title && item.title}</h1>
                                <br />
                                <ul className="roadMap_Card-list">
                                    {item.l1 && <li className="roadMap_Card-list-item">{item.l1}</li>}
                                    {item.l2 && <li className="roadMap_Card-list-item">{item.l2}</li>}
                                    {item.l3 && <li className="roadMap_Card-list-item">{item.l3}</li>}
                                    {item.l4 && <li className="roadMap_Card-list-item">{item.l4}</li>}
                                    {item.l5 && <li className="roadMap_Card-list-item">{item.l5}</li>}
                                    {item.l6 && <li className="roadMap_Card-list-item">{item.l6}</li>}
                                </ul>
                            </div>
                        )
                    })}
                    <img src={Dragon_Fruit} alt="Tree" className='roadMap_Card-image' srcSet={Dragon_Fruit} />
                </div>
            </div>
        </>
    )
}

export default RoadMap


