import React from 'react';
import PropTypes from 'prop-types';

const styleObject={fontSize:25,color:"red"
}

const Profile = ({fullName,bio,profession,children}) =>{  
const handleName = () =>{
    alert(`Hi ! My name is ${fullName}`)
  }
     return (
       <div>
          <img src="mon image.jpg"/>{children}

         <h1  style={styleObject}> {fullName}</h1>
         <button onClick={handleName}> Click me </button>
         <h1 style={styleObject}>{bio}</h1>
         <h1 style={styleObject}>{profession}</h1>
       </div>
      
     )
    }
    export default Profile
    Profile.prototype={
      fullName:PropTypes.string,
      bio:PropTypes.string,
      profession:PropTypes.string,
      Image:PropTypes.img,
  };