import React, { Component } from 'react';
import logo from 'C:/Users/MyszkaMartynka/WebstormProjects/shoppppppp/src/img/logo.png';

export default class Header extends Component {

    render() {
        return (
            <header id="mainHeader">
                <div className="container">
                    <div>
                        <img src={ logo } alt="Spice World"/>
                    </div>
                </div>
            </header>
        );
    }
}

