import React, { Component } from 'react';

export default class Layout extends Component {

    constructor(props)
    {
        super(props);
        this.state =
            {
                header: props.car.name,
                paragraph: props.car.year
            }

    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <p>{this.state.paragraph}</p>
            </div>
        );
    }
}

