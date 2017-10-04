import React, { Component } from 'react';
import SubCategory from "../SubCategory/SubCategory";

export default class Category extends Component {
    render() {
        const { subCategories } = this.props;
        let subCategoryComponents = [];

        for(let i = 0; i < subCategories.length; i++){
            subCategoryComponents[i] = <SubCategory key={i} text={this.props.subCategories[i]}/>;
        }

        return (
            <li>{ this.props.name }
                <ul>{ subCategoryComponents }</ul>
            </li>
        );
    }
}