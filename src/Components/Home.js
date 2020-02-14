import React, { Component } from 'react';
import Footer from './Footer'
import NavB from './NavB';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <NavB />
            <h2 style={{display:'flex', justifyContent:'center',alignItems:'center',height:'60vh'}}>Welcome to our application</h2>
            <Footer />
        </div>
             );
    }
}
 
export default Home;