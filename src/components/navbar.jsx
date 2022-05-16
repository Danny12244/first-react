import React from 'react';
import './styles/style.css';

const Navbar = () =>{
    return (<>
    <div className='class  fle'>
        <h3>LOGOBAKERY</h3>
        <div className='wdt fle '>
            <a href='#' className='txt'>Servies</a>
            <a href='#'className='txt'>Projects</a>
            <a href='#'className='txt'>About</a>
        </div>
        <button className="btn">Contact</button>
    </div>
    </>)
}

export default Navbar;