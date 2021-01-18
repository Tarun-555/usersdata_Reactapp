import React,{ Component } from "react";
import List from "../List/List";
import classes from "./Homepage.module.css";

class Homepage extends Component{
  state={
      users:[]
  }

  componentDidMount(){
    fetch("https://panorbit.in/api/users.json")
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log("data",data.users);
      this.setState({users:data.users})
    })
    .catch(err=>{
      console.log('err',err);
    })
  }

  userClickHandler=(id)=>{
      console.log("clicked",this.props)
      let userDetails = this.state.users
                        .filter(item => item.id===id)
                        //console.log("ud",userDetails);
      this.props.history.push({
         pathname:"/userdata",
         state:{user:userDetails[0],users:this.state.users}
      })
   }

    render() {
        return (
            <div className={classes.Home}>
                <div className={classes.Card}>
                   <h2 style={{padding:'5px'}}>Select an account</h2>
                   <div className={classes.Card_Items}>
                   {this.state.users && this.state.users.map(user=>{
                       return(
                       <div 
                         key={user.name}
                         className={classes.Listcontainer}>
                           <img 
                             className={classes.Image}
                             src={user.profilepicture} alt="img" />
                           <List name={user.name} 
                              clicked={()=>this.userClickHandler(user.id)} />
                       </div>
                       )
                   })}
                   </div>
                </div>
            </div>
        )
    }
}

export default Homepage
