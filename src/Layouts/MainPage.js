import React, {Component} from 'react';
import './MainPage.css';
import SmallNavigation from "../components/SmallNavigation/SmallNavigation";
import Header from "../components/Header/Header";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Hits from "../components/Hits/Hits";
import Promotions from "../components/Promotions/Promotions";
import News from "../components/News/News";
import Boxes from "../components/Boxes/Boxes";
import Newsletter from "../components/Newsletter/Newsletter";

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
                    <News/>
                </div>
                <Boxes/>
                <Newsletter/>
            </div>
        );
    }
}

