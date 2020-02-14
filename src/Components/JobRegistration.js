import React, { Component } from 'react'

export default class JobRegistration extends Component {
    emptyItem ={
        id:'',
        companyName:'',
        jobTitle:'',
        skillsNeeded:'',
        summary:''

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
            await fetch('/api/feedbacks',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(item),
      
            });
           
            this.props.history.push("/feedbacks");
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
                  <div className="col-md-5">
                              <h3><strong>Feedback to our site</strong></h3>
                              <form onSubmit={this.handleSubmit}>
              
                                  <div className="form-group">
                                  <label>Your Email</label>
                                      <input type="email" name ="email" id="email" className="form-control" 
                                      onChange={this.handleChange}placeholder="Enter your Email"/>
                                  </div>
                                  <label>Your Feedback</label>
                                  <textarea className= "form-control" name ="feedbackMessage" id="feedbackMessage" cols="60" rows="3" onChange={this.handleChange} placeholder="Enter your feedback"/>
                                  {/* <Link className="btn btn-outline-primary text-uppercase mt-1">
                                  <i className="fa-paper-plane-o" aria-hidden="true" />
                                  <i className="fab fa-telegram-plane" />&nbsp;Submit
                                  </Link> */}
                                  <button  className="btn btn-outline-primary text-uppercase mt-1" type="submit">Submit</button>{' '}
                              </form>
                          </div>
              </div>
          )
                                }
}

