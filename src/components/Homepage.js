import React,{ Component } from "react";
import List from "./List";
import styled from "styled-components";
import {connect} from "react-redux";
import fetchData from "../store/saga"

class Homepage extends Component{
  
  // state={
  //     users:[]
  // }

  componentDidMount(){
    // fetch("https://panorbit.in/api/users.json")
    // .then(res=>{
    //   return res.json();
    // })
    // .then(data=>{
    //   console.log("data",data.users);
    //   this.setState({users:data.users})
    // })
    // .catch(err=>{
    //   console.log('err',err);
    // })
    fetchData();
  }

  userClickHandler=(id)=>{
      console.log("clicked",this.props)
      let userDetails = this.props.users.users
                        .filter(item => item.id===id)
                        //console.log("ud",userDetails);
      this.props.history.push({
         pathname:"/userdata",
         state:{user:userDetails[0],users:this.props.users.users}
      })
   }

    render() {
      console.log(this.props.users,"users",typeof(this.props.users))
        return (
            <Home>
                <Card>
                   <Title>Select an account</Title>
                   <CardItems>
                   {this.props.users.users && this.props.users.users.map(user=>{
                       return(
                       <UserItem key={user.name}>
                           <Image src={user.profilepicture} alt="img" />
                           <List name={user.name} 
                              clicked={()=>this.userClickHandler(user.id)} />
                       </UserItem>
                       )
                   })}
                   </CardItems>
                </Card>
            </Home>
        )
    }
}

const CustomDiv = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`

const Home = styled(CustomDiv)`
width: 100vw;
height: 100vh;
box-sizing: border-box;
background-color:#7209b7;
background-size: 100vw 50vh;
`

const Card = styled.div`
  height: 480px;
  width: 420px;
  background:white;
  border-radius: 40px;
  text-align: center;
  box-shadow:0px 0px 3px 1px #ccc;
`

const Title = styled.h2`
 padding:5px;
`

const CardItems = styled.div`
height: 370px;
width: 420px;
overflow: scroll;
overflow-x: hidden;
&::-webkit-scrollbar {
  width: 8px;
}
&::-webkit-scrollbar-thumb{
  background:#ccc;
}
`
const UserItem = styled(CustomDiv)`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border: 1px solid #ccc;
  padding: 9px;
  justify-content:flex-start;
`

const Image = styled.img`
 border-radius: 50px;
 margin: 0 20px 0 10px;
 height: 40px;
 width: 40px;
`

const mapStateToProps = state => ({
    users:state.users
  })


export default connect(mapStateToProps)(Homepage)
