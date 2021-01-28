import React from "react";
import  MapContainer from '../MapContainer';
import UserField from './UserField';
import styled from "styled-components";

const Profile = (props) => {
    return (
        <Container>
            <ProfileContainer>
               <ProfileSection>
                  <Image src={props.profilepicture} alt="img" />
                  <p><strong>{props.name}</strong></p>
                  <UserField field="Username" value={props.username} />
                  <UserField field="e-mail" value={props.email} />
                  <UserField field="Phone" value={props.phone} />
                  <UserField field="Website" value={props.website} />
                  <hr/>
                  <SectionTitle>Company</SectionTitle>
                  <UserField field="Name" value={props.company.name} />
                  <UserField field="catchPhrase" value={props.company.catchPhrase} />
                  <UserField field="bs" value={props.company.bs} />
                </ProfileSection>
                <Line />
                <AddressSection>
                  <div style={{textAlign:'center'}}>
                    <SectionTitle>Address</SectionTitle>
                    <UserField field="Street" value={props.address.street} />
                    <UserField field="Suite" value={props.address.suite} />
                    <UserField field="City" value={props.address.city} />
                    <UserField field="Zipcode" value={props.address.zipcode} />
                  </div>
                  <MapContainer 
                     latitude={props.address.geo.lat}
                     longitude={props.address.geo.lng} />
                </AddressSection>
            </ProfileContainer>
            <Coordinates>
                Lat:<strong style={{color:'black',marginRight:"6px"}}>{props.address.geo.lat}</strong> 
                Long:<strong style={{color:'black'}}>{props.address.geo.lng}</strong>
            </Coordinates>
        </Container>
    )
}

const SectionTitle = styled.p`
 text-align:center;
 color:#948e7c;
 margin-top:20px;
`

const Container = styled.div`
 display: inline-flex;
 flex-flow: column;
`

const ProfileContainer = styled.div`
  display:inline-flex;
  @media (max-width:600px){
    display:block;
  }
`

const ProfileSection = styled.div`
  width: 30vw;
  margin: 5px;
  height: 75vh;
  text-align: center;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width:600px){
    width:100vw;
  }
`

const Image = styled.img`
  height:180px;
  width: 180px;
  border-radius:50%;
`
const Line = styled.div`
  height: 75vh;
  margin: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  @media (max-width:600px){
    display:none;
  }
`

const AddressSection = styled.div`
 height: 75vh;
 width: 40vw;
 margin: 5px;
 display: flex;
 flex-flow: column;
 margin:0px 0px 0 100px;
 box-sizing: border-box;
 @media (max-width:600px){
  width: 100vw;
  margin-left:5px;
  display: block;
 }
`

const Coordinates =styled.p`
 text-align: right;
 margin-right: 170px;
 color:#948e7c;
 font-size: small;
 @media (max-width:600px){
  left: -60px;
  text-align:right;
 }
`
export default Profile;
