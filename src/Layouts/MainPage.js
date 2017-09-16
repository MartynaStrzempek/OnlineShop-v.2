import React, {Component} from 'react';
import './MainPage.css';
import SmallNavigation from "../components/SmallNavigation/SmallNavigation";
import Header from "../components/Header/Header";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Hits from "../components/Hits/Hits";
import Promotions from "../components/Promotions/Promotions";

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <SmallNavigation/>
                <Header/>
                <MainNavigation/>
                <div className="container">
                    <Hits/>
                    <Promotions/>
                </div>
            </div>
        );
    }
}

