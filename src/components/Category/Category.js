import React, { Component } from 'react';
import './Category.css'



export default class Category extends Component {

    render() {

        return (
         <li>{this.props.name}
            <ul>

            </ul>
         </li>
        );
    }
}