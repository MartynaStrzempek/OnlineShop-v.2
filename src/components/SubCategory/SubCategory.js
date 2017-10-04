import React, { Component } from 'react';

export default class SubCategory extends Component {
    render() {
        console.log(this.props);
        return (
            <li>{this.props.text}</li>
        );
    }
}