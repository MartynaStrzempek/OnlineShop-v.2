import React, { Component } from 'react';
import './MainNavigation.css'
import Category from "../Category/Category";

export default class MainNavigation extends Component {

    render() {

        return (
            <section className="mainNav">

                <div className="container">
                    <nav>
                        <ul>
                            <Category name="oriental"/>

                            <li>Thai
                                <ul>
                                    <li>Spicy</li>
                                    <li>Mild</li>
                                    <li>Sweet</li>
                                </ul>
                            </li>

                            <li>Indian
                                <ul>
                                    <li>Spicy</li>
                                    <li>Mild</li>
                                    <li>Sweet</li>
                                </ul>
                            </li>

                            <li>Chinese
                                <ul>
                                    <li>Spicy</li>
                                    <li>Mild</li>
                                    <li>Sweet</li>
                                </ul>
                            </li>

                            <li>Japanese
                                <ul>
                                    <li>Spicy</li>
                                    <li>Mild</li>
                                    <li>Sweet</li>
                                </ul>
                            </li>

                            <li>Vietnamese
                                <ul>
                                    <li>Spicy</li>
                                    <li>Mild</li>
                                    <li>Sweet</li>
                                </ul>
                            </li>

                            <li>Newsletter</li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}