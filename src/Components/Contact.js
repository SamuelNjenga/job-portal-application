import React, { Component } from 'react';
import NavB from './NavB'
export default class Contact extends Component {

emptyItem = {
    id:'',
    contactName:'',
    contactEmail:'',
    contactMobileNumber:'',
    contactMessage:''
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
        await fetch('/api/contactUses',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item),

        });
       
        this.props.history.push("/contactUses");
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
        <strong class style={{display:'flex', justifyContent:'center',alignItems:'center',height:'20vh'}}><strong>Do you have any questions? Please do not hesitate to contact us directly.Our team will come back to you within a matter of hours to help you.</strong></strong>
        
        <div className="col-md-5">
        
                        <h3><strong>Contact Us</strong></h3>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <label>Name</label>
                                <input type="text" name ="contactName" id ="contactName" className="form-control" 
                                onChange={this.handleChange} placeholder="Name"/>
                            </div>
                            <div className="form-group">
                            <label>Email</label>
                                <input type="email" name ="contactEmail" id="contactEmail" className="form-control" 
                                onChange={this.handleChange} placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name ="contactMobileNumber" id="contactMobileNumber" className="form-control" 
                                onChange={this.handleChange} placeholder="Phone"/>
                            </div>
                            <textarea className= "form-control" cols="60" rows="3" name="contactMessage" id="contactMessage" onChange={this.handleChange}  placeholder="Message"/>
                            {/* <Link className="btn btn-outline-primary text-uppercase mt-1" type="submit">
                            <i className="fa-paper-plane-o" aria-hidden="true" />
                            <i className="fab fa-telegram-plane" />&nbsp;Send
                            </Link> */}
                            <button  className="btn btn-outline-primary text-uppercase mt-1" type="submit">Submit</button>{' '}
                        </form>
                    </div>
                    </div>
                    </div>
      
    )
  }
}
