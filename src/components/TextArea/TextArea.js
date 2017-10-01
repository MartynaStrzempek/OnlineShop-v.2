import React, { Component } from 'react';
import './TextArea.css'

export default class TextArea extends Component {

    render() {
        return (
            <textarea placeholder={this.props.placeHolder}/>
        );
    }
}