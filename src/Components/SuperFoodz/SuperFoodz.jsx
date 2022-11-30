import React from 'react'
import SuperFood from '../../assets/SuperFoodz.svg'
import Tree from '../../assets/Tree.svg'
import '../SuperFoodz.css'

const SuperFoodz = () => {
    return (
        <>
            <div className="super_foodz" style={{ marginTop: "-10px" }}>
                <div className="super_foodz-img">
                    <img src={SuperFood} alt="SuperFoodz" width="100%" srcSet={SuperFood} />
                </div>
                <h1 className="super_foodz-heading">
                    SuperFoodz Is Attacking Global Food Scarcity
                    <br />
                    With The Help Of BlockChain & Our SuperHeroes
                </h1>
                <div className="super_foodz-tree">
                    <img src={Tree} alt="Tree" width="100%" srcSet={Tree} />
                </div>
                <p className="super_foodz-para">
                    Broccoli Rob thinks it’s a human right to have proper nutrition. Together with his squad of superheroes they are knocking out hunger around the world.
                    <br />
                    <br />
                    SuperFoodz is a giving community helping to solve the domestic and international hunger issue. Nearly 9 million people die of hunger annually and over 140 million suffer from malnutrition. SuperFoodz has risen from the harvest to bring justice to those in need.
                    <br />
                    <br />
                    The SuperFoodz SF loyalty token was engineered to empower the battle against hunger. SF is an Ethereum Layer 2 Polygon loyalty utility token created for those loyal to the SuperFoodz Hunger Cause.
                    <br />
                    <br />
                    SuperFoodz is an impact organization helping to eliminate hunger by working with local and global food banks, community charities, school systems and grass root organizations. SF, by both its design and utility, will provide resources to recognized charitable organizations to empower impoverished and disenfranchised groups & communities, to provide immediate wholesome nutrition, grow their own food, create and/or improve their agricultural infrastructure.  As awareness and use of the SF loyalty token increases, larger numbers of those in need will receive essential life-giving nutritional support.
                    <br />
                    <br />
                </p>
            </div>

        </>
    )
}

export default SuperFoodz