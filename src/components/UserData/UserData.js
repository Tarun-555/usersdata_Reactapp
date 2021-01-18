import React, { Component } from 'react'
import Profile from '../Profile/Profile';
import classes from "./UserData.module.css";
import Header from '../Header/Header';
import ComingSoon from '../ComingSoon';

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
           profileModal = (
                 <div className={classes.Modal}>
                    <img 
                      className={classes.ModalImg}
                      src={this.state.user.profilepicture} alt="img" />
                    <p style={{margin:'0px'}}>{this.state.user.name}</p>
                    <p style={{color:'#948e7c',borderBottom:'1px solid #ccc',fontSize:'small'}}>
                        {this.state.user.email}</p>
                    <button 
                      className={classes.Button}
                      onClick={this.signOutHandler}>
                          Sign out
                    </button>
                 </div>
           )

        return (
            <div className={classes.UserData}>
                <div className={classes.Nav}>
                    <ul 
                    onClick={this.fieldClickHandler}
                    className={classes.NavItems}>
                        <li>Profile</li>
                        <li>Posts</li>
                        <li>Gallery</li>
                        <li>ToDo</li>
                    </ul>
                </div>
                <div className={classes.DetailsContainer}>
                      { renderedElement }
                      {
                        this.state.showModal ? profileModal 
                          : null
                      }
                      <div 
                       onClick={this.ModalDrophandler}
                       className={classes.backdrop}></div>
                </div>
            </div>     
        )
    }
}

export default UserData;

