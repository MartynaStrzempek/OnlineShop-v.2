import React, { Component } from 'react';
import './Box.css'

export default class Box extends Component {

    render() {
        return (
            <div className="box">
                <label>{this.props.label}</label>
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}


