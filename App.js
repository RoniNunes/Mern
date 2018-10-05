import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';


import AuthService from './AuthService';
import withAuth from './withAuth';
////import NavBar from './components/NavBar';
import HomePanel from './components/HomePanel';

const Auth = new AuthService();

//importa meus components


// fim meus componentes




class App extends Component {
    render() {
        return (
            <div className="container">

               <HomePanel/>
               <p className="container">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
                

                <h2>Bienvenidos App{this.props.user.username}</h2>


            </div>
        );

    }
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
}

export default withAuth(App);
