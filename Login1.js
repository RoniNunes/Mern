import React, { Component } from 'react';
//import './Login.css';



//posso remover
import logo from './logo.svg';
//import './App.css';
import AuthService from './AuthService';
import NavBar from './components/NavBar';

//fim posso remover

class Login extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Auth = new AuthService();

    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    


    render() {
        return (
            <div>


 
 <NavBar/>

            <div className="container fluid">
            <div class="col s6" style={{ padding: "70px" }}><span class="flow-text">Renova tus anuncios de los portales
            Milanuncio y Pasion</span></div>
                <div className="card">
                    <strong>Login</strong>

                    <div className="card col s12 l10">{/*CARD*/}
            <a className="nav-link" href="/#/">
                 
                  <i className="material-icons">logout</i> Login
                </a>
                <div className="card-conten" style={{ padding: '100px' }}>{/*CARD-CONTENT FORM*/}
                    


                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            className="form-item"
                            placeholder="Email"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                    </div>{/*END CARD-CONTENT FORM*/}
            </div>{/*END CARD*/}
                </div>
            </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    } 
}



export default Login;

