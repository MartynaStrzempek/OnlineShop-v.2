import React, { Component } from 'react';
import './MessageForm.css'
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

export default class MessageForm extends Component {

    render() {
        return (
           <div className="container">
               <form id="MessageForm">
                   <label>Do You have <br/> a question?</label><br/>
                   <TextArea placeHolder="Write the message..."/>
                   <Button type="submit" label="Send"/>
               </form>
           </div>
        );
    }
}