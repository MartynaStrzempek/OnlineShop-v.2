import React, {Component} from 'react';
import './MainPage.css';
import Header from "../components/Header/Header";
import SmallNavigation from "../components/SmallNavigation/SmallNavigation";
import MainNavigation from "../components/MainNavigation/MainNavigation";

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <SmallNavigation/>
                <Header/>
                <MainNavigation/>
            </div>
        );
    }
}

