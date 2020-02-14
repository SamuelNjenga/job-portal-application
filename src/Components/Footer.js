import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
         <div className="footer-middle">
         <div className="container">
         <div className="row">
         {/*Column 1 */}
         <div className="col-md-3 col-sm=6">
         <h4>Lorem ipsum</h4>
         <ul className="list-unstyled">
             <li><a href="/feedback">Feedback</a></li>
             <li><a href="/about">About Us</a></li>
             
         </ul>
         </div>

             {/*Column 2 */}
             <div className="col-md-3 col-sm=6">
         <h4>Lorem ipsum</h4>
         <ul className="list-unstyled">
             <li><a href="/contact">Contact Us</a></li>
             <li><a href="/">Lorem Ipsum</a></li>
             
         </ul>
         </div>
             {/*Column 3 */}
             <div className="col-md-3 col-sm=6">
         <h4>Lorem ipsum</h4>
         <ul className="list-unstyled">
         <li><a href="/">Lorem Ipsum</a></li>
             <li><a href="/">Lorem Ipsum</a></li>
             
         </ul>
         </div>

             {/*Column 4 */}
             <div className="col-md-3 col-sm=6">
         <h4>Lorem ipsum</h4>
         <ul className="list-unstyled">
             <li><a href="/">Lorem Ipsum</a></li>
             <li><a href="/">Lorem Ipsum</a></li>
            
             
         </ul>
         </div>
         </div>   

         {/*Footer Bottom*/}
         <div className="footer-bottom">
             <p className="text-xs-center">
                 &copy;{new Date().getFullYear()} Job Portal - All Rights Reserved
             </p>
         </div>
         </div>
         </div>
        </div>
    );
  }
}

