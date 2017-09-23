import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {

    render() {
        this.copyRightSign = '\u00A9';
        return (
            <footer>
                <div className="container">
                    <h4>Elektron, Copyright {this.copyRightSign} 2017</h4>
                </div>
            </footer>
        );
    }
}