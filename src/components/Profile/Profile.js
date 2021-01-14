import React from "react";
import  MapContainer from '../MapContainer/MapContainer';
import classes from "./Profile.module.css";
import UserField from './UserField';

const Profile = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.ProfileContainer}>
               <div className={classes.Profile}>
                  <img 
                    className={classes.Image}
                    src={props.profilepicture} alt="img" />
                  <p><strong>{props.name}</strong></p>
                  <UserField field="Username" value={props.username} />
                  <UserField field="e-mail" value={props.email} />
                  <UserField field="Phone" value={props.phone} />
                  <UserField field="Website" value={props.website} />
                  <hr/>
                  <p style={{textAlign:'center',color:'#948e7c'}}>Company</p>
                  <UserField field="Name" value={props.company.name} />
                  <UserField field="catchPhrase" value={props.company.catchPhrase} />
                  <UserField field="bs" value={props.company.bs} />
                </div>
                <div className={classes.Line}></div>
                <div className={classes.Address}>
                  <div style={{textAlign:'center'}}>
                    <p style={{textAlign:'center',color:'#948e7c',marginTop:'20px'}}>Address</p>
                    <UserField field="Street" value={props.address.street} />
                    <UserField field="Suite" value={props.address.suite} />
                    <UserField field="City" value={props.address.city} />
                    <UserField field="Zipcode" value={props.address.zipcode} />
                  </div>
                  <MapContainer 
                     latitude={props.address.geo.lat}
                     longitude={props.address.geo.lng} />
                </div>
            </div>
            <p className={classes.coordinates}>
                Lat:<strong style={{color:'black',marginRight:"6px"}}>{props.address.geo.lat}</strong> 
                Long:<strong style={{color:'black'}}>{props.address.geo.lng}</strong>
            </p>
        </div>
    )
}

export default Profile;
