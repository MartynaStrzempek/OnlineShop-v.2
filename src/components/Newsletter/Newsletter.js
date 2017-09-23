import React, { Component } from 'react';
import './Newsletter.css'
import Button from "../Button/Button";
import Input from "../Input/Input";

export default class Newsletter extends Component {

    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <form>
                        <div id="newsletterLabel">
                            <label>Join to <br/> Newsletter</label>
                        </div>

                        <Input type="email" label="E-mail"/>

                        <Button label="Sign up"/>
                    </form>
                </div>
            </section>
        );
    }
}

