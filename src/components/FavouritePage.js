import React from "react";
import './FavouritePage.css';
import data from './movie.json';
import Card from "./card";
import Sidebar from "./Sidebar";


const FavouritePage = () =>{
    return(
        <div className="favourite">
            <Sidebar/>
            <div className="movielist">
                <h1>Favourite</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.favourite == 1)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default FavouritePage;