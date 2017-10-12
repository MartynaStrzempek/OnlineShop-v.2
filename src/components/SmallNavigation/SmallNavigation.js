import React, { Component } from 'react';
import './SmallNavigation.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Switch, Redirect} from 'react-router';
import Home from './Home';
import SignUpPage from './SignUpPage';

export default class SmallNavigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <section className="smallNav">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><Link to="/Home">Home</Link></li>
                                    <li>Help</li>
                                    <li>Contact</li>
                                    <li>Sign In</li>
                                    <li><Link to="/SignUpPage">Sign Up</Link></li>
                                    <li>Cart</li>
                                </ul>
                                <Switch>
                                    <Route exact path='/Home' component={Home}/>
                                    <Route path='/SignUpPage' component={SignUpPage}/>
                                </Switch>
                            </nav>
                        </div>
                    </section>
                </Router>
            </div>
        );
    }
}