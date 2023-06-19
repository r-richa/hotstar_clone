import React from "react";
import './MovieScreen.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from './movie.json';
import Card from "./card";
import pic1 from './pic1.jpg';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.jpg';
import pic5 from './pic5.png';
import Sidebar from "./Sidebar";

const MovieScreen = () => {
        
    console.log(data);
    return (
        <div className="moviescreen">
            <Sidebar />
            <div className="moviescreen_body">
            <div className="moviescreen__header">
                <Carousel
                    autoPlay = {true}
                    showThumbs={false}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        data.map(movie => (
                            <div className="poster">
                                <img src={movie.backgroundImg} alt={movie.title} />
                                <div className="title">
                                <p className="ptitle">{movie.title}</p>
                                <p >{movie.subTitle}</p>
                                </div>
                            </div>
                        ))
                    }

                </Carousel>
            </div>

            <div className="posterlist">
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
                <img src={pic4} />
                <img src ={pic5} />

            </div>
            
            <div className="movielist">
            <h1>Recommended for you</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'recommend')} />
                    }
                </div>
            </div>
            </div>

        </div>
    )
}

export default MovieScreen;
