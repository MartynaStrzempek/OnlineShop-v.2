import React, { Component } from 'react';
import './SmallNavigation.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Miss, Match } from 'react-router-native';

export default class SmallNavigation extends Component {
    render() {
        return (
            <section className="smallNav">
                <div className="container">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Help</li>
                            <li>Contact</li>
                            <li>Sign In</li>
                            <li>Sign Up</li>
                            <li>Cart</li>
                        </ul>
                    </nav>
                </div>
            </section>

        );
    }

}