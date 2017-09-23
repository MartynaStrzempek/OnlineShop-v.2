import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component {

    render() {
        return (
            <div id="newsletterButton">
                <button>{this.props.label}</button>
            </div>
        );
    }
}




