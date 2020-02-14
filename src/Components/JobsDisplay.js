import React, { Component } from 'react'
import NavB from './NavB'
export default class JobsDisplay extends Component {

    state = { 
        isLoading:true,
        Jobs:[]
     }

     async componentDidMount(){
         const response = await fetch('/api/jobRegisters');
         const body = await response.json();
         this.setState({Jobs:body._embedded.jobRegisters,isLoading:false});
     }

  render() {
    const {Jobs,isLoading} = this.state;
    
    if(isLoading)
       return (
       <div>
       <NavB/>Loading..... </div>)
      
    return ( 
        <div>
        <NavB/>
    <div className="container " >
    
        <h2>Available jobs</h2>
        {
            Jobs.map(
                (job) =>
               <div className="card" style={{width:500}} >
               <div className="card-body">

<p className="card-text">{job.companyName}</p>
<p className="card-text">{job.jobTitle}</p>
<p className="card-text">{job.location}</p>
<a href="/moreofjob" className="btn btn-primary "> View more about this job</a>{" "}{" "}{" "}
<a href="/applyJob" className="btn btn-primary">Apply for this job</a>

               </div>
               
                </div>
            )
        }
    </div> 
    </div>
    
    );
  }
}

