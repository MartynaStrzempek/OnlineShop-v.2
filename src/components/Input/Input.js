import React, { Component } from 'react';
import './Input.css'

export default class Input extends Component {

    render() {
        return (
            <div className="inputGroup">
                <input type={this.props.type} className="formControl"/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}




