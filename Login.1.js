import React, { Component } from 'react';
//import './Login.css';



//posso remover
//import logo from './logo.svg';
//import './App.css';
import AuthService from './AuthService';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
            <div className="col s12" style={{ padding: "70px" }}><span class="flow-text"></span></div>
                
                    
        
                <div className="card-content" style={{ padding: '100px' }}>{/*CARD-CONTENT FORM*/}
                    
                
                    <strong>Login</strong>


                    <form onSubmit={this.handleFormSubmit}>
                    <i className="material-icons prefix">email</i>
                        <label for="email_inline">Email</label>
                        <input name="email" type="text" placeholder="Email" autoFocus 
                            onChange={this.handleChange}
                        />
                        <i className="material-icons prefix">lock</i>
                        <label for="email_inline">Password</label>
                        <input name="password" type="password" placeholder="Password" autoFocus
                            onChange={this.handleChange}
                        />

                        <br/>
                        

                        <button className="btn waves-effect waves-light flow-text" type="submit" name="action">Entrar
    <i className="material-icons right">cloud</i>
                        </button>

                        <div className="col s12 ">
                            <div className="col s8 ">
                                <strong className="text-center">No estas Registrado?</strong><a href="#!"> Registrarse</a>
                                <br />
                                <strong className="text-center">¿Help?</strong><a href="#!"> Soporte</a>
                            </div>
                            </div>
                    </form>
                    </div>{/*END CARD-CONTENT FORM*/}
               
                </div>
                <Footer/>
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

