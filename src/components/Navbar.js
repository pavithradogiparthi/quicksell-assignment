import React from "react";
import '../App.css';


const Navbar = (props)=>{
    const clickHander = ()=>{
        props.setIsActive(!props.isActive);
    }
    return(
        <div className="nav">
            <button className="nav-btn" onClick={clickHander}>
            <span className="material-symbols-outlined">tune</span>
            <span>Display</span>
            <span className="material-symbols-outlined">expand_more</span>
            </button>
        </div>
    );
}

export default Navbar;