import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {

    constructor(){
        super();

        this.state = {
            copyRightSign: 'u00A9',

        }
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <h4>Spice World, Copyright {'u00A9'} 2017</h4>
                </div>
            </footer>
        );
    }
}