import React, { Component } from 'react';
import CategoryStore from '../../Stores/CategoryStore';
//import * as TodoActions from "../../Actions/TodoActions";
import Category from "../Category/Category";


export default class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories: CategoryStore.getAll(),
        }
    }

    componentWillMount(){
        CategoryStore.on("change", () => {
            this.setState({
                categories: CategoryStore.getAll()
            })
        });
    }
    render() {
        const { categories } = this.state;

        const categoryComponents = Array.isArray(categories) && categories.map((category) => {
            return <Category key={category.id} {...category}/>;
        });

        return (
            <div>
                <ul>{ categoryComponents }</ul>
            </div>
        );

    }
}