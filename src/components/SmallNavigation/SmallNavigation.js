import React, { Component } from 'react';
import './SmallNavigation.css'

export default class SmallNavigation extends Component {

    render() {
        return (
            <section className="smallNav">
                <div className="container">
                    <nav>
                        <ul>
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