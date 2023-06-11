import React from "react";
import './HomeScreen.css';
import data from './data.json';
import Card from "./card";


const HomeScreen = () => {

    console.log(data);
    return (
        <div className="homeScreen">
            <div className="movielist">
                <h1>Latest & Trending</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'trending')} title = {'popular'} />
                    }
                </div>

                <h1>New</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'new')} title = {'popular'} />
                    }
                </div>

                <h1>Original</h1>
                <div className="listcard">
                    {
                        <Card movie = {data.filter((movie) => movie.type == 'original')} title = {'popular'} />
                    }
                </div>
                

            </div>
        </div>
    )
}

export default HomeScreen;