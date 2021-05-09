import React, { Component } from 'react'
import firebase from './firebase';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
export default class Logout extends Component {
    componentDidMount(){
        { firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("signOut")
            localStorage.removeItem("token")
           
        }).catch((error) => {
            // An error happened.
            console.log(error)
        })}
    }
    render() {
        return (
            <div style={{marginTop:200,fontSize:100,textAlign:'left'}}>
                 <Helmet>                                
            <style>{'body { background-image:url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1898&q=80"); }'}</style>
        </Helmet>

                 <NavBar />
                 <Link to="/"><b>PhoneLogin</b></Link>
            </div>
        )
    }
}
