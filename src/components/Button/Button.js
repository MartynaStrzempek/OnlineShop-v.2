import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component {

    render() {
        return (
            <div id="newsletterButton">
                <button type={this.props.type}>{this.props.label}</button>
            </div>
        );
    }
}




