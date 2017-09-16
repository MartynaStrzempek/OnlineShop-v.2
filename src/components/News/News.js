import React, { Component } from 'react';
import './News.css'
import pumpkin from 'C:/Users/MyszkaMartynka/WebstormProjects/shoppppppp/src/img/pumpkin.png'

export default class News extends Component {

    render() {
        return (
            <section id="news">
                <header id="newsLabel">
                    <h2>News</h2>
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