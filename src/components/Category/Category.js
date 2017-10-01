import React, { Component } from 'react';

export default class Category extends Component {
    render() {
        const { subCategories } = this.props;

        const subCategoriesComponents = Array.isArray(subCategories) && subCategories.map((subCategory) => {
            return <li>{ subCategory }</li>
        })
        // const categoryComponents = Array.isArray(categories) && categories.map((category) => {
        //     return <Category {...category}/>;
        // });
        return (
            <li>{ this.props.name }
                <ul>{ subCategoriesComponents }</ul>
            </li>
        );
    }
}