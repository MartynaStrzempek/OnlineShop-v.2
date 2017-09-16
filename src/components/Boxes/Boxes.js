import React, { Component } from 'react';
import './Boxes.css'

export default class Boxes extends Component {

    render() {
        return (
            <section id="boxes">
                <div className="container">
                    <div className="box">
                        <label>!</label>
                        <h1>Protect equipment</h1>
                    </div>
                    <div className="box">
                        <label>$</label>
                        <h1> Free transport</h1>
                    </div>
                    <div className="box">
                        <label>%</label>
                        <h1>Instalments</h1>
                    </div>
                    <div className="box">
                        <label>?</label>
                        <h1>How to buy</h1>
                    </div>
                </div>
            </section>
        );
    }
}