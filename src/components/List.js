import React from 'react'
import styled from "styled-components";

const List = (props) => {
    return  <ListItem onClick={props.clicked}>
                {props.name}
            </ListItem> 

}

const ListItem = styled.li`
 list-style: none;
 display: inline-block;
 &:hover{
    cursor: pointer;  
 }
`

export default List
