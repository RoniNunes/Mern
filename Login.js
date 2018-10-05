import React, { Component } from 'react';
//import './Login.css';
//import './Signup.css'
import { Container, Row, Col, Input, Button, Fa, CardText, CardTitle, CardHeader, Card, CardBody, ModalFooter } from 'mdbreact';

//posso remover
//import logo from './logo.svg';
//import './App.css';
import AuthService from './AuthService';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//fim posso remover

class Login extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Auth = new AuthService();

    }
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }



    render() {
        return (
            <div >



                <NavBar />


                <div className="row " style={{ margin: "auto" }}>

                    <aside role="complementary" className="col-md-10 col-md-pull-12">
                        <div className="text-left">

                            <h3 className="dark-grey-text mb-5 "><strong></strong></h3>
                        </div>



                        <div className="card-content " >{/*CARD-CONTENT FORM*/}



                            <Container>
                                <section className="form-elegant">
                                    <Row >

                                        <Col md="4">

                                            <CardHeader>Renovador Automatico</CardHeader>
                                            <CardBody className="text-primary">
                                                <CardTitle tag="h5">Conoces a este sitio?</CardTitle>
                                                <CardText>Contacte con nosotros</CardText>
                                            </CardBody>


                                        </Col>
                                        <Col md="8">
                                            <Card className="col-md-12 col-md-pull-12">
                                                <CardBody className="mx-4">

                                                    <div className="text-center">
                                                        <h3 className="blue-text ml2"><strong>Conectar a SuPanel</strong></h3><br />
                                                    </div>

                                                    {/*
                                                    <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-user mr-1"></i>
                                                                Login</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fa fa-user-plus mr-1"></i>
                                                                Register</a>
                                                        </li>

</ul>*/}
                                                    <form onSubmit={this.handleFormSubmit}>
                                                        <Input name="email"
                                                            label="Su email"
                                                            group type="email"
                                                            validate error="wrong"
                                                            success="right"
                                                            onChange={this.handleChange} />

                                                        <Input name="password"
                                                            label="Su password"
                                                            group type="password"
                                                            validate containerClass="mb-0"
                                                            onChange={this.handleChange} />

                                                        <p className="font-small blue-text d-flex justify-content-end pb-3">
                                                            Forgot <a href="#"
                                                                className="blue-text ml-1">
                                                                Password?
                                                    </a>
                                                        </p>

                                                        <div className="text-center mb-3">
                                                            <Button
                                                                type="submit"
                                                                value="SUBMIT"
                                                                gradient="blue"
                                                                rounded className="btn-block z-depth-1a" >Conectar
                                                                </Button>
                                                        </div>

                                                    </form>


                                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                                                    <div className="row my-3 d-flex justify-content-center">
                                                        <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                                                        <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                                                        <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                                                    </div>

                                                </CardBody>
                                                <ModalFooter className="mx-5 pt-3 mb-1">
                                                    <Footer />
                                                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1"> Registrase</a></p>
                                                </ModalFooter>
                                            </Card>
                                        </Col>




                                    </Row>
                                </section>
                            </Container>
                        </div>{/*END CARD-CONTENT FORM*/}

                    </aside>
                </div>


            </div>



        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }
}



export default Login;

