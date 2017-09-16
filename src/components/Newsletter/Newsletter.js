import React, { Component } from 'react';
import './Newsletter.css'

export default class Newsletter extends Component {

    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <form>
                        <div id="newsletterLabel">
                            <label>Join to <br/> Newsletter</label>
                        </div>

                        <div className="inputGroup">
                            <input type="email" className="formControl"/>
                                <label>E-mail</label>
                        </div>

                        <div id="newsletterButton">
                            <button type="submit" value="Sign up" className="formControl"/>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}