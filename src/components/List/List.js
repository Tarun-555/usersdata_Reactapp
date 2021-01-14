import React from 'react'
import classes from "./List.module.css"

const List = (props) => {
    return  <li className={classes.list}
                onClick={props.clicked}>
                   {props.name}
            </li> 

}

export default List
