import React from "react";
import './HomeScreen.css';
import data from './movie.json';
import Card from "./card";
import Sidebar from "./Sidebar";


const HomeScreen = () => {

    console.log(data);
    return (
        <div className="homeScreen">
            <Sidebar/>
            <div className="movielist">
                <h1>Latest & Trending</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'trending')} />
                    }
                </div>

                <h1>New</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'new')} />
                    }
                </div>

                <h1>Original</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'original')} />
                    }
                </div>
                

            </div>
        </div>
    )
}

export default HomeScreen;