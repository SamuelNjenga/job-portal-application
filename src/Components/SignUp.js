import React, { Component } from "react";
import NavB from './NavB'
export default class SignUp extends Component {

    emptyItem ={
       firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:''
      }

      constructor(props){
      
        super(props);
        this.state = {
            item:this.emptyItem
              }
              this.handleSubmit = this.handleSubmit.bind(this);
              this.handleChange = this.handleChange.bind(this);
      }


      async handleSubmit(event){    
        event.preventDefault();
  
        const item = {...this.state.item};
        console.log("+++++++");
        console.log(item)
        await fetch('/api/auth/signup',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item),
  
        });
       
        this.props.history.push("/login");
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item ={...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(this.state);
    }
    render() {
        return (
            <div>
            <NavB />
            <div className ="container">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstname" className="form-control" placeholder="First name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastname" className="form-control" placeholder="Last name" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" name="username" className="form-control" placeholder="User name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
}