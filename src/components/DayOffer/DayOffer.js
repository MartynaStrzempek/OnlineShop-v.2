import React, { Component } from 'react';
import './DayOffer.css'
import Hits from "../Hits/Hits";
import Promotions from "../Promotions/Promotions";
import News from "../News/News";

export default class DayOffer extends Component {

    render() {
        return (
            <div className="container">
                <div id="dayOffer">
                    <Hits/>
                    <Promotions/>
                    <News/>
                </div>
            </div>
        );
    }
}