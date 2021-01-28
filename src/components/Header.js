import React from 'react'
import styled from "styled-components";

function Header(props) {
    return (
        <div>
             <CustomHeader>
               <h3>{props.navItem}</h3>
               <Profile onClick={props.profileClicked}>
               <Image src={props.pic} alt="img" />
               <span>{props.name}</span>
             </Profile>
            </CustomHeader>
        </div>
    )
}

const CustomHeader = styled.header`
  width: 80vw;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  padding: 0 26px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media (max-width:600px){
        width:100vw;
 }
`

const Profile = styled.div`
  display:inline-flex;
  align-items: center;
  cursor: pointer;
`

const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
`

export default Header;
