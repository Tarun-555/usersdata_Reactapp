import React from 'react'
import classes from "./Header.module.css";

function Header(props) {
    return (
        <div>
             <header className={classes.header}>
             <h3>{props.navItem}</h3>
             <div 
               onClick={props.profileClicked}
               className={classes.profile}>
                <img 
                className={classes.Image}
                src={props.pic} alt="img" />
                <span>{props.name}</span>
             </div>
            </header>
        </div>
    )
}

export default Header;
