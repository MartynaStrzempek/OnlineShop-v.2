import React, { Component } from 'react';
import './Newsletter.css'
import Button from "../Button/Button";
import InputWindow from "../InputWindow/InputWindow";

export default class Newsletter extends Component {

    // $(bla(){
    //
    //     $('.formControl').on('focusout', function(){
    //
    //         if($(this).val().length > 0) {
    //             $(this).addClass('hasValue');
    //         }
    //         else{
    //             $(this).removeClass('hasValue');
    //         }
    //     });
    // });



    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <form>
                        <div id="newsletterLabel">
                            <label>Join to <br/> Newsletter</label>
                        </div>
                        <InputWindow type="email" label="E-mail"/>
                        <Button type="submit" label="Sign up"/>
                    </form>
                </div>
            </section>
        );
    }
}

