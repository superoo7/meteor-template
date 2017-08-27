import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isOpen: false
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({error: 'Unable to login. Check email/password'});
            } else {
                this.setState({error: ''});
            }
        });
    }

    render() {
        return (
            <div>
                <div className="boxed-view">
                    <div className="boxed-view__box">

                        <h1>Login</h1>



                        <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
                            <button type="button" onClick={()=>this.setState({isOpen: true})} className="button button--secondary">about</button>
                            <br />

                            <Modal
                                isOpen={this.state.isOpen}
                                contentLabel="Information"
                                onRequestClose={()=>this.setState({isOpen: false})}
                                className="boxed-view__box"
                                overlayClassName="boxed-view boxed-view--modal"
                            >
                               <h2>Shorten</h2>
                                <p>
                                    Shorten your link with ease~
                                </p>
                                <p>
                                    Disclaimer: This website still at testing phase, use at your own risk
                                </p>
                                <p>
                                    This website help you to shorten your long-long website link such as www.google.com/?flkqbfilqhfqgweufuyqihiohv to shorten version
                                </p>
                                <br />
                                <p>
                                    created by <a href="http://superoo7.com">superoo7</a>
                                </p>
                            </Modal>


                            {this.state.error ? <p>{this.state.error}</p> : undefined}
                            <br />
                            <input type="email" ref="email" name="email" placeholder="Email"/>
                            <input type="password" ref="password" name="password" placeholder="Password"/>
                            <button className="button">Login</button>
                        </form>

                        <Link to="/signup">Don't have an account?</Link>
                    </div>
                </div>
            </div>
        );
    }
}