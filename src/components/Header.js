import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from './disneylogo.png'

const Header = () => {
    return(
        <div className="header">
            <div className="leftheader">
                <Link to='/'><img className='headerlogo' src= {logo} width={90}/></Link>
            </div>
            <div className="rightheader">
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>

    )
}

export default Header