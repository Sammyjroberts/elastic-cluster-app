import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min'
import './App.css';
import logo from "./img/logo.svg"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./pages/Home";
import ClusterDetail from "./pages/ClusterDetail";

class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light green shadow fixed-top" >
                        <a className="navbar-brand" href="#">
                            <img src={logo} style={{height: "40px", marginRight: "33px"}}></img>
                        </a>
                    </nav>
                    <Route exact path="/" component = {Home}/>
                    <Route exact path="/cluster/:id" component = {ClusterDetail}/>

                </div>
            </Router>
        );
    }
}

export default App;
