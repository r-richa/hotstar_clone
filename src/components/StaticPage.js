import React from "react";
import './StaticPage.css';
import incrediblebg from './incrediblebg.jpg';
import title from './incredible.png';
import Sidebar from "./Sidebar";


const StaticPage = () => {
    return(
        <div className="staticwhole">
             <Sidebar />
        <div className="staticpage">
                <img src ={incrediblebg} className="bg"/>
                <div className="over">
                    <img src ={ title} className="title"/>
                    <div className="buttonlist">
                        <button className="play">PLAY</button>
                        <button className="trailer">TRAILER</button>
                        <button className="plus">+</button>
                    </div>
                    <p className="up">2018 ‧ Family/Adventure ‧ 1h 58m</p>
                    <p className="down">Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting</p>

                </div>
        </div>
        </div>
    )
}

export default StaticPage;