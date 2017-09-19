import React, { Component } from 'react';
import './Boxes.css'
import Box from "../Box/Box";

export default class Boxes extends Component {

    render() {
        return (
            <section id="boxes">
                <div className="container">
                    <Box label={'!'} text={'Protect equipment'}/>
                    <Box label={'$'} text={'Free transport'}/>
                    <Box label={'%'} text={'Instalments'}/>
                    <Box label={'?'} text={'How to buy'}/>
                </div>
            </section>
        );
    }
}