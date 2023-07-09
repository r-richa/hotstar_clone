import React, { useState,useEffect } from "react";
import './StaticPage.css';
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import data from '../components/movie.json';

const StaticPage = () => {
    const[movie, setMovie] = useState({});
    const{id} = useParams();
    const movieId = parseInt(id);
    useEffect(() => {
        setMovie(data.filter((movi) => movi.id === movieId)[0])
    },[]);

    const favourite = (movie) => {
        console.log(movie.favourite);
        if(!movie.favourite){
            movie.favourite = 1;
            setActive(true);
        }else{
            movie.favourite = 0;
            setActive(false);
        }
    };

    const[active ,setActive] = useState(false);
    
    console.log(movie);

    return(
        <div className="staticwhole">
             <Sidebar />
        <div className="staticpage">

                <img src = {movie.backgroundImg} className="bg"/>
                <div className="over">
                    <img src ={movie.titleImg} className="title"/>
                    <div className="buttonlist">
                        <button className="button play">PLAY</button>
                        <button className="button trailer">TRAILER</button>
                        <button className="plus" onClick = {() =>{favourite(movie)}} style={{backgroundColor: active? "gold" : "white"}}>&#9733;</button>
                    </div>
                    <p className="up">{movie.subTitle}</p>
                    <p className="down">{movie.description}</p>

                </div>
        </div>
        </div>
    )
}

export default StaticPage;