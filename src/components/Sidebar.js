import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import homeicon from './home.png';
import searchicon from './search.png';
import movieicon from './movie.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to='/favourite' ><img src ={searchicon} /></Link>
            <Link to='/home' ><img src ={homeicon} /></Link>
            <Link to='/movie' ><img src ={movieicon} /></Link>
            
        </div>
    )
}

export default Sidebar;
