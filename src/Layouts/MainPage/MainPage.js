import React, {Component} from 'react';
import './MainPage.css';
import SmallNavigation from "../../components/SmallNavigation/SmallNavigation";
import Header from "../../components/Header/Header";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Boxes from "../../components/Boxes/Boxes";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
//import MessageForm from "../../components/MessageForm/MessageForm";
import DayOffer from "../../components/DayOffer/DayOffer";
//import TextArea from "../../components/TextArea/TextArea";
//import Button from "../../components/Button/Button";

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <SmallNavigation/>
                <Header/>
                <MainNavigation/>
                <DayOffer/>
                {/*<MessageForm/>*/}
                <Boxes/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}

