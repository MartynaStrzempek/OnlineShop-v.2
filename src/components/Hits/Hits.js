import React, { Component } from 'react';
import './Hits.css'
import pumpkin from 'C:/Users/MyszkaMartynka/WebstormProjects/shoppppppp/src/img/pumpkin.png'
export default class Hits extends Component {

    render() {
        return (
            <section id="hits">
                <header id="hitsLabel">
                    <h2>Hits of sales</h2>
                </header>
                <div className="products">
                    <img src={ pumpkin }/>
                    <img src={ pumpkin }/>
                    <img src={ pumpkin }/>
                    <img src={ pumpkin }/>
                </div>
            </section>
        );
    }
}