import React, { Component } from 'react'
import NavB from './NavB'
export default class About extends Component {
  render() {
    return (
      <div>
      <NavB />
      <div className="container">
          <h3 className="" ><strong>About us</strong></h3>
          <p>Online job portal is a web application which provides the users with the ability to register to this application and search for jobs and manage their accounts.Each user will have an account with their own home page.The purpose of the application is to provide job portal for job seekers, to submit their CV and apply for job, where employers can now select best employees from the available candidates who applied for the job. </p>
      </div>
      </div>
    )
  }
}
