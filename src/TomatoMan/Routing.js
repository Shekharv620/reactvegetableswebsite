import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo'
import Phone from './Phone';
import Logout from './Logout';
import Profile from './Profile';
import History from './History';
import Cart from './Cart';
import VegetableList from './VegetableList';


export default class Routing extends Component {
    render() {
        return (
            <div>
                
                <Router>
                    <div>
                        
                        <Switch>
                            {/* <Route exact path='/' component={logo}></Route> */}
                            <Route exact path='/' component={Phone}></Route>
                            <Route path='/vegetable' component={VegetableList}></Route>
                            <Route path='/cart' component={Cart}></Route>
                            <Route path='/profile' component={Profile}></Route>
                            <Route path='/history' component={History}></Route>
                            <Route path='/logout' component={Logout}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
