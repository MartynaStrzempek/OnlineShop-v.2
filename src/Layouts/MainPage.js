import React, {Component} from 'react';
import './MainPage.css';
import Header from "../components/Header/Header";
import SmallNavigation from "../components/SmallNavigation/SmallNavigation";

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <SmallNavigation/>
                <Header/>
            </div>
        );
    }
}

