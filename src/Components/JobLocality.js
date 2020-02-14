import React, { Component } from 'react';
import NavB from './NavB'
export default class JobLocality extends Component {

  state = { 
    isLoading:true,
    Jobs:[],
    url:`/api/jobRegisters`,
    base_url:`/showCitiesEnding?name=`,
    search:''
 }
async getJobs(){
  try{
    const response = await fetch(this.state.url);
    const body = await response.json();
    this.setState({Jobs:body._embedded.jobRegisters,isLoading:false});
  }
  catch(error){
    console.log(error);
  }
}
async getJobs1(){
  try{
    const response = await fetch(this.state.url);
    const body = await response.json();
    this.setState({Jobs:body[0],isLoading:false});
  }
  catch(error){
    console.log(error);
  }
}
 componentDidMount(){
     this.getJobs();
 }
handleChange = e => {
  this.setState(
    {
      search:e.target.value
    },
    () => {
      console.log(this.state.search)
    }
  );
};
handleSubmit = e => {
  e.preventDefault();
  const {base_url,search} = this.state;
  this.setState(() => {
    return {url:`${base_url}${search}`}
  },()=> {
    this.getJobs1();
    console.log('ssss');
}
)
};
  render() {
    const {Jobs} = this.state;
    
    return (
      <div>
        <NavB />
        <strong><h1>Enter location where you want to seach for jobs</h1></strong>
        <form className="form-inline" onSubmit={this.handleSubmit}>
<input className="form-control mr-sm-2" type="search" onChange = {this.handleChange}placeholder="Search" aria-label="Search"></input>
<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    
      
    
        <h2>Available jobs</h2>
        {
            Jobs.map(
                (job) =>
               {
                  return <div className="card" style={{ width: 500 }}>
                    <div className="card-body">

                      <p className="card-text">{job.companyName}</p>
                      <p className="card-text">{job.jobTitle}</p>
                      <p className="card-text">{job.location}</p>
                      <a href="/moreofjob" className="btn btn-primary "> View more about this job</a>{" "}{" "}{" "}
                      <a href="/applyJob" className="btn btn-primary">Apply for this job</a>

                    </div>

                  </div>;
                }
            )
        }
    </div> 
    
    
    )
    
  }
}
