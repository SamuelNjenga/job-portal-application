import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Category from './Components/Category';
import Expenses from './Components/Expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Login from './Components/Login';
import About from './Components/About';
import SignUp from './Components/SignUp';
import JobsDisplay from './Components/JobsDisplay';
import Company from './Components/Company';
import JobDescriptor from './Components/JobDescriptor';
import CompanyRegForm from './Components/CompanyRegForm';
import JobSearchModal from './Components/JobSearchModal';
import JobLocality from './Components/JobLocality';
import ApplyJob from './ApplyJob';
import Logout from './Components/Logout';
import { ContextProvider } from './Components/Context';
import NavB from './Components/NavB';
class App2 extends Component {
    state = {  }
    render() { 
        return ( 
        <ContextProvider>

<div>
            <Router>
        <Switch>
             <Route path = '/' exact={true} component={Home}/>
             <Route path = '/navb' exact={true} component={NavB}/>
             
             <Route path = '/categories' exact={true} component={Category} />
             <Route path = '/company' exact={true} component={Company} />
             <Route path = '/jobLocality' exact={true} component={JobLocality} />
             <Route path = '/jobSearchModal' exact={true} component={JobSearchModal} />
             <Route path = '/companyReg' exact={true} component={CompanyRegForm} />
             <Route path = '/moreofjob' exact={true} component={JobDescriptor} />
             <Route path = '/jobs' exact={true} component={JobsDisplay} />
             <Route path = '/expenses' exact={true} component={Expenses} />
             <Route path ='/login' exact={true} component ={Login} />
             
             <Route path ='/signup' exact={true} component ={SignUp} />
             <Route path ='/signout' exact={true} component ={Logout} />
             <Route path ='/applyJob' exact={true} component ={ApplyJob} />
             <Route path ='/contact' exact={true} component ={Contact} />
             <Route path ='/feedback' exact={true} component ={Feedback} />
             <Route path = '/about' exact = {true} component = {
                 About} />

        </Switch>
    </Router>
        </div>
        </ContextProvider>
        );
    }
}
 
export default App2;