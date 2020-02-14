import React,{useState,useContext, Component} from 'react';
import NavB from './NavB';
import { Redirect } from "react-router";
import axios from 'axios';
import {Context} from '../Components/Context';

const emptyItem ={
    usernameOrEmail:'', 
    password:''
  }

  const handleSubmit = async (event, props, setAuthentication, item, setItem) => {    
    event.preventDefault();

    const i = {...item};
     axios.post('http://localhost:8080/api/auth/signin', i).then(resp => {
         
         if(resp.status === 200){
            props.history.push("/"); 
            localStorage.setItem('token',resp.data.accessToken);
            
            setAuthentication(true);
            
            console.log(resp.data.accessToken);
           }
           else{ 
            alert('Wrong credentials')
            }
     }).catch(err => {
        alert('An error occurred ' + err.message)
    }) ;  
}

const isAuthenticated_ = () => {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
}

const handleChange = (event, item, setItem) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let i ={...item};
    i[name] = value;
    setItem(i);
}

const Login = (props) => {
    const [item, setItem] = useState(emptyItem);
    const isAlreadyAuthenticated = isAuthenticated_();
    const [isAuthenticated,setAuthentication] = useContext(Context);
    return (
        <div>{isAlreadyAuthenticated ?  <Redirect to={{
            pathname:'/' 
        }} /> : (
            <div>
            <NavB />
            <div className="container">
           
            <form onSubmit={(e) => handleSubmit(e, props, setAuthentication, item, setItem)}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address or Username</label>
                <input type="text" name = "usernameOrEmail" className="form-control" placeholder="Enter email or username" onChange={(e) => handleChange(e, item, setItem)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name ="password" className="form-control" placeholder="Enter password" onChange={(e) => handleChange(e, item, setItem)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block text-center" >Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="/login">password?</a>
            </p>
        </form>
        </div>
        </div>)}</div>
    );
};
export default Login;