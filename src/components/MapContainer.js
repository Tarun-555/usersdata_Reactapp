import React,{Component} from "react";
import {Map,GoogleApiWrapper} from "google-maps-react";

const mapStyles = {
    textAlign:'center',
    marginTop:'10px',
    width: '380px',
    height: '300px',
    borderRadius:'10px',
    boxSizing:'border-box'
  };

  const containerStyle = {
    position: 'relative',  
    width: '90%',
    height: '90%'
  }

export class MapContainer extends Component{
 constructor(props){
    super(props);
    this.state={
        lat:+this.props.latitude,
        lng:+this.props.longitude
    }
 }
  
    render(){
        console.log(this.props,this.state.lat)
        return(
           <Map 
              containerStyle={containerStyle}
              style={mapStyles}
              google={this.props.google} 
              zoom={12} initialCenter={
               {
                lat:this.state.lat,//-37.3159
                lng:this.state.lng //81.1496
               }
             }>
           </Map>
        )
    }
} 

export default GoogleApiWrapper({
    apiKey:process.env.GMAP_KEY
})(MapContainer)