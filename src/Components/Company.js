import React, { Component } from 'react'
import NavB from './NavB'

export default class Company extends Component {

  render() {
    return (
      <div >
       <NavB />
      <div className="row" >
       <div className="container center">
        <div className="card" style={{width:500}} >
        <img src="../img/image1.jpg" height ="500" alt='Job Img' />
               <div className="card-body">

<a href="/jobs" className="btn btn-primary">View Available Jobs</a>
               </div>
               
                </div>

                <div className="card " style={{width:500}} >
        <img src="../img/image2.jpg" height ="500" alt='Job Img' />
               <div className="card-body">

<a href="/companyReg" className="btn btn-primary">Register your company</a>
               </div>
               
                </div>
                <div className="card " style={{width:500}} >
        <img src="../img/image3.jpg" height ="500" alt='Job Img' />
               <div className="card-body">

<a href="/jobLocality" className="btn btn-primary">Find jobs in your locality</a>

               </div>
               
                </div>
                
      </div>
      </div>
      </div>
    )
  }
}
