import React, { Component } from 'react';
import NavB from './NavB'

export default class CompanyRegForm extends Component {
    emptyItem ={
        id:'',
        companyName:'',
        companyEmail:'',
        companyType:'',
        companyAddress:'',
        password:'',
        confirmPassword:'',
        companyQuestion:'',
        companyPassword:''

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
            await fetch('/api/companyRegistrations',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(item),
      
            });
           
            this.props.history.push("/companyRegistrations");
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
              <div className="container ">
              <h3><strong>Register your company to our site</strong></h3>
                  <div className="col-md-5">
                              
                              <form onSubmit={this.handleSubmit}>
                              <div className="form-group">
                    <label>Your Company Name</label>
                    <input type="text" name="companyName" className="form-control" placeholder="Company name" onChange={this.handleChange}/>
                </div>
              
                                  <div className="form-group">
                                  <label>Your Company Email</label>
                                      <input type="email" name ="companyEmail" id="email" className="form-control" 
                                      onChange={this.handleChange}placeholder="Enter your Email"/>
                                  </div>
                                  <div className="form-group">
                    <label>Company Type</label>
                    <input type="text" name ="companyType" className="form-control" placeholder="Company Type" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Company Address</label>
                    <input type="text" name ="companyAddress" className="form-control" placeholder="Company name" onChange={this.handleChange}/>
                </div>
                                  <div className="form-group">
                    <label>Enter Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name ="confirmPassword" className="form-control" placeholder="Confirm password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Company Question</label>
                    <input type="text" name ="companyQuestion" className="form-control" placeholder="Company question" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Company Answer</label>
                    <input type="text" name ="companyAnswer" className="form-control" placeholder="Company answer" onChange={this.handleChange}/>
                </div>
                                 
                                  <button  className="btn btn-outline-primary text-uppercase mt-1" type="submit">Submit</button>{' '}
                              </form>
                          </div>
              </div>
              </div>
          )
  }
}
