import React, { Component } from 'react'
import Profile from './Profile/Profile';
import Header from './Header';
import ComingSoon from './ComingSoon';
import styled from "styled-components"

class UserData extends Component {
    constructor(props){
     super(props);
     this.state={
         user:props.location.state.user,
         renderingField:null,
         showModal:false
     }
     console.log("userdata",props.location.state);
    }

    fieldClickHandler=(e)=>{
      console.log(e.target.textContent);
      this.setState({
          renderingField:e.target.textContent,
          showModal:false
      })
    }


    profileClickHandler = () => {
        console.log("profile click")
        this.setState({showModal:true})
    }

    signOutHandler=()=>{
        this.props.history.push('/');
    }

    ModalDrophandler=()=>{
        console.log('drop modal click');
        this.setState({showModal:false})
    }

    render() {
        let renderedElement = (
           <>
             <Header 
                navItem="Profile"
                pic={this.state.user.profilepicture}
                name={this.state.user.name} />
             <Profile {...this.state.user}  />
            </>
           );

       if(this.state.renderingField === null || 
           this.state.renderingField === 'Profile')
         renderedElement =  ( 
             <div>
                 <Header 
                    navItem="Profile"
                    pic={this.state.user.profilepicture}
                    name={this.state.user.name} 
                    profileClicked={this.profileClickHandler} />
                 <div>
                    <Profile {...this.state.user}  />
                 </div>
            </div> ) ;
        else
          renderedElement = (
            <div>
                <Header navItem={this.state.renderingField}
                  pic={this.state.user.profilepicture}
                  name={this.state.user.name} 
                  profileClicked={this.profileClickHandler}/>
                <div style={{display:'flex',
                     justifyContent:'center',
                     alignItems:'center',
                     height:'75vh'}}>
                      <ComingSoon />
                </div>
             </div>
          );


         let profileModal = null;
         if(this.state.showModal)
           profileModal = (
                 <Modal>
                    <Image
                      src={this.state.user.profilepicture} alt="img" />
                    <p style={{margin:'0px'}}>{this.state.user.name}</p>
                    <p style={{color:'#948e7c',borderBottom:'1px solid #ccc',fontSize:'small'}}>
                        {this.state.user.email}</p>
                    <Button onClick={this.signOutHandler}>
                        Sign out
                    </Button>
                 </Modal>
           )

        return (
            <UserContainer>
                <Nav>
                    <NavItems
                     onClick={this.fieldClickHandler}>
                        <li>Profile</li>
                        <li>Posts</li>
                        <li>Gallery</li>
                        <li>ToDo</li>
                    </NavItems>
                </Nav>
                <DetailsContainer>
                      { renderedElement }
                      { profileModal }
                      <Backdrop onClick={this.ModalDrophandler}></Backdrop>
                </DetailsContainer>
            </UserContainer>     
        )
    }
}

const Modal = styled.div`
 position:inherit;
 top: 70px;
 left:60vw;
 height:250px;
 width: 200px;
 z-index: 100;
 border-radius: 10px;
 background-color:white;
 box-shadow: 0px 1px 5px 4px #ccc;
 box-sizing: border-box;
 display: flex;
 flex-flow: column;
 align-items: center;
 @media(max-width:600px){
    left:40vw;
 }
`
const UserContainer = styled.div`
 height:100vh;
 width: 100vw;
 box-sizing: border-box;
`

const DetailsContainer = styled.div`
display: inline-flex;
position: absolute;
top: 15px;
margin: 5px;
box-sizing: border-box;
@media(max-width:600px){
    display: block;
    top:70px;
    margin:0;
    box-sizing: border-box;
}
`
const Nav = styled.div`
display: inline-flex;
width:200px;
margin:45px 10px 45px 10px;
height: 86vh;
box-sizing: border-box;
align-items: center;
background-color: #7209b7;
border-radius: 16px;
@media(max-width:600px){
    position:sticky;
    width: 95vw;
    height: 60px;
    margin:5px 5px;
    box-sizing: border-box;
}
`

const NavItems = styled.ol`
 display: flex;
 flex-flow: column;
 align-items: center;
 & > li {
    list-style: none;
    padding: 15px;
    font-size: larger;
    color: white;
    border-bottom: 1px solid white; 
 }
 & > li:hover{
    color:white;
    font-weight: bold;
    cursor: pointer;
 }
 @media(max-width:600px){
    display: flex;
    flex-flow: row;
    justify-content: center;
 }
`
const Image = styled.img`
  text-align: center;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  padding: 20px;
`

const Button = styled.button`
 border: none;
 outline: none;
 border-radius: 18px;
 background-color: #d62828;
 color: white;
 padding: 10px 15px;
 font: inherit;
 &:hover{
    cursor: pointer;
    background-color: #f94144;
 }
`

const Backdrop = styled.div`
position: absolute;
left: -100px;
height: 90vh;
width: 75vw;
@media(max-width:600px){
    position: absolute;
    top:5%;
    width:600px;
}
`

export default UserData;

