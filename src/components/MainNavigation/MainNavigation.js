import React, { Component } from 'react';
import './MainNavigation.css'
import Categories from "../Categories/Categories";

export default class MainNavigation extends Component {

    render() {

        return (
            <section className="mainNav">
                <div className="container">
                    <nav>
                        <Categories/>
                    </nav>
                </div>
            </section>
        );
    }
}