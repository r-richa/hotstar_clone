import React from "react";
import { Link } from "react-router-dom";
import './LandScreen.css';
import data from './movie.json';
import backimg from './login-background.jpg';
import upexplore from './upexplore.png';
import downexplore from './downexplore.png';

const LandScreen = () => {

    console.log(data);
    return (
        <div className="landscreen">
            <img src={backimg}/>
            <div className="explorebox">
                <img src={upexplore } className="exploreimg" />
                <Link to ='/home' className="explore">Explore</Link>
                <p className="exploreimg">Get premium acces to Raya and the last Dragon for an additional fee with a Disney + subscription.As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</p>
                <img src={downexplore} className="exploreimg"/>

            </div>
        </div>
    )
}

export default LandScreen;
