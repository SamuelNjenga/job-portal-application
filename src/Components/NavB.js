import React,{useState,useContext} from 'react';
import {Context} from '../Components/Context';
import {Link} from 'react-router-dom';
const NavB = () => {

  const [isAuthenticated,setAuthentication] = useContext(Context);

  const isAuthentic = () => {
      const token = localStorage.getItem('token');
      return token && token.length > 10;
  }
  if(isAuthentic()){
    setAuthentication(true);
  }
   const group1 =() =>{
    return <ul className="navbar-nav m-auto">
    <Link to="/signup">
    <li className="nav-item nav-link text-white text-uppercase ml-5" >
      Sign Up
    </li>
    </Link>
     <Link to="/login">
    <li className="nav-item nav-link text-white text-uppercase ml-5" >
      Login
    </li>
    </Link>
  </ul>
  }
  const group3 =() =>{
    return <ul className="navbar-nav m-auto">
    <Link to="/signout">
    <li className="nav-item nav-link text-white text-uppercase ml-5" >
      Sign Out
    </li>
    </Link>
  </ul>
  }
  const group2 = () => {
    return <ul className="navbar-nav m-auto">
    <li className="nav-item active">
      <a className="nav-link text-white text-uppercase ml-5" href="/">Home&nbsp;<i class="fas fa-home"></i><span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/jobs">Jobs</a>
    </li>
    <li className="nav-item" >
      <a className="nav-link text-white text-uppercase ml-5" href="/company">Companies</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/about">About Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/contact">Contacts Us</a>
    </li>
   
  </ul>
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand text-white" href="/">Online Job Portal</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className="fas fa-bars" style={{color:'#fff'}}></i>
      </span>
    </button>
    {group2()}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    {isAuthenticated ?  group3() : group1()}
       
    </div>
    </nav>
  )
}

export default NavB;
