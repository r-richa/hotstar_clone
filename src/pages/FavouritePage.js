import React from "react";
import './FavouritePage.css';
import data from '../components/movie.json';
import Card from "../components/card";
import Sidebar from "../components/Sidebar";


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