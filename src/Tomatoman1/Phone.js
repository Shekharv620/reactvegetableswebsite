
import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { Redirect } from 'react-router';
import firebase from './firebase';


export default class Phone extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        else {
            console.log(token)
        }
        this.state = {
            contact: "",
            validated: false,
            loggedIn
        }
        this.onHandleChange = this.onHandleChange.bind(this);
    }
    setValidated(value) {
        this.setState({
            validated: value
        })
    }
    componentDidMount() {
        // this.setUpRecaptcha();
    }
    // setUpRecaptcha = () => {
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             console.log(response)
    //         }
    //     });
    // }
    onSignInSubmit = (e) => {
        e.preventDefault();
         const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            console.log("hii")
        }
        
        this.setValidated(true);
        const phoneNumber = this.state.contact;
        if (phoneNumber) {
            console.log("hello")
            localStorage.setItem("contact", this.state.contact);
            const appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    // ...
                    console.log(confirmationResult)
                    const code = window.prompt("Enter OTP")
                    confirmationResult.confirm(code).then((result) => {
                        // User signed in successfully.
                        const user = result.user;
                        // ...

                        console.log("User is signedIn:===>", user);

                        localStorage.setItem("token", "logincheck")
                        this.setState({
                            loggedIn: true
                        })

                    }).catch((error) => {
                        // User couldn't sign in (bad verification code?)
                        // ...
                        alert("Phone Authentication Failed!!!", error)
                    });

                }).catch((error) => {
                    // Error; SMS not sent
                    // ...
                    console.log("Error:", error)
                });
        }
    }
    onHandleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/VegetableList'/>
        }
        return (
            <div>
                <h1>Phone Login</h1>
                <Form onSubmit={this.onSignInSubmit}>
                    <div id="recaptcha-container"></div>
                    <Form.Group controlId="formPhoneLogin">
                        <Form.Label>PhoneLogin:</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.onHandleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
              {/* <Form noValidate validated={this.state.validated} onSubmit={this.onSignInSubmit}>
                    <div id="recaptcha-container"></div>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Please enter a phone number" required
                                name="contact"
                                value={this.state.contact}
                                onChange={this.onHandleChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>   */}
         </div>
        )
    }
}

