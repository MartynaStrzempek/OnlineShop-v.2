import React, { Component } from 'react';
import './InputWindow.css'

export default class InputWindow extends Component {

    // AddClassHasValue(){
    //     if((document.getElementById('formControl').value.length) > 0)
    //     {
    //         this.addClass(formControl, 'hasValue');
    //     }
    // }


    render() {
        return (
            <div className="inputGroup">
                <input type={this.props.type} className="formControl"/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}




