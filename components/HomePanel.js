import React, { Component } from 'react';
//import Accounts from './Accounts';
import NavBar from './NavBar';
import Footer from './Footer';
import NavBarLogin from './PanelLogin/NavBarLogin';
import Cpanel from './PanelLogin/Cpanel';
//import Footer from '../container/Footer'
//import NavBarLogin from './NavBarLogin'
//import Cpanel from './Cpanel'


import AuthService from '../AuthService';
import withAuth from '../withAuth';
////import NavBar from './components/NavBar';


const Auth = new AuthService();



class HomePanel extends Component {
    render() {

        return (
            <div className="container">
                <div className="wrapper ">
                    <div className="sidebar " data-color="purple" data-background-color="white">

                        <div className="logo">
                            <a href="http://renovadorx.tk" className="simple-text logo-normal">
                                Auto Renovador
                            </a>
                            <li className="nav ">
                                <a className="form-submit" onClick={this.handleLogout.bind(this)} href="login">
                                    <i className="material-icons" >logout</i> Salir
                            </a>
                            </li>
                           {/*
                            <p className="container">
                                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                            </p>
                            <h2>Bienvenidos App desde HomePanel {this.props.user.username}</h2>
                           */}



                        </div>
                        <div className="sidebar-wrapper">
                            <ul className="nav">

                                <li className="nav-item active  ">
                                    <a className="nav-link blue-gradient" href="#0">
                                        <i className="material-icons">dashboard</i>
                                        <p>Panel De Control</p>
                                    </a>
                                </li>
                                {/*<!-- your sidebar here -->*/}
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">

                        {/*<!-- Navbar -->*/}
                        <NavBarLogin />

                        {/*<!-- End Navbar -->*/}


                        <div className="content">
                            <div className="container-fluid">

                                {/* <!-- your content here -->*/}

                                <Cpanel />
                                
                            </div>
                            
                        </div>
                        
                        <Footer />

                    </div>

                </div>

            </div>


        );
    }
    handleLogout() {
        Auth.logout();
        this.props.history.replace('/login');
    }

}

export default withAuth(HomePanel);




