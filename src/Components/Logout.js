import React,{useState,useContext} from 'react';

import {Context} from '../Components/Context';


const Logout = (props) => {
  const [isAuthenticated,setAuthentication] = useContext(Context);
  localStorage.removeItem('token');
  setAuthentication(false);
  console.log(isAuthenticated);
  props.history.push("/login");
  return (
    <div>
      
    </div>
  )
}

export default Logout;

