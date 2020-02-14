import React, { Component } from 'react'
import { Redirect } from 'react-router';
import NavB from './Components/NavB'
import Axios from 'axios';

export default class ApplyJob extends Component {

  state ={
    file:'',
    error:'',
    msg:'',
    selectedFile:null
}

    isAuthenticated(){
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    uploadFile = (event) => {
      event.preventDefault();
      let data = new FormData();
      data.append('file',this.state.selectedFile,this.state.selectedFile.name);
    
      Axios.post('http://localhost:8080/upload',data).then(function (){
        console.log('SUCCESS!!');
      }).catch(function (){
        console.log('FAILURE!!');
      });
    }
    onFileChangeHandler = (e) => {
      this.setState({
          selectedFile: e.target.files[0]
      });
      
  };
  
  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {!isAlreadyAuthenticated ? <Redirect to={{
                pathname:'/login' 
            }} /> : (
<div >
<NavB />
  <div className="container"><h2> Welcome{}</h2>


  <div className="card" style={{width:500}} >
               <div className="card-body">

  <strong><p className="card-text">Upload your cv</p></strong>

<input type="file" className="form-control-file" onChange={this.onFileChangeHandler}/>{" "}{" "}{" "}<br></br>
<button className="btn btn-primary" onClick={this.uploadFile}>Click here to upload</button>

               </div>
               
                </div>
  </div>
</div>

            )}
      </div>
    )
  }
}
