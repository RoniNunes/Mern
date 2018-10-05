import React, { Component } from "react";
import { withRouter } from 'react-router';

import { Container, Row, Col, Input, Button, Fa, FormData, CardHeader, CardTitle, CardText, Card, Table, CardBody, ModalFooter } from 'mdbreact';


import AuthService from '../../AuthService';


class Cpanel extends Component {

  constructor(){
    super()
    this.state ={
       email:'',
       password:'',
       pagina:'',
       hora_i:'',
       intervalo:''
    };
    this.addAds = this.addAds.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
  }
 // componentWillMount() {
  //  if (this.Auth.loggedIn())
 //       this.props.history.replace('/');
//}
handleChange(e){ //captura eventos do form
  const {name ,value} = e.target;
  this.setState({
    [name]: value
  });
}


addAds(e) {
      fetch(`http://192.168.1.51:8092/add/accounts`, {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      })
      .then( res=> console.log(res))
      .catch(err => console.error(err))
        e.preventDefault();
        console.log(e)
      
    } 

   


  render() {
    return (
      <div className="container" >


        <Container>
          <section className="form-elegant">
            <Row >
              <Col md="12">

                <CardHeader>Renovador Automatico

                <CardBody className="text-primary">

                  <form onSubmit={this.addAds}>

                    <div className="form-row">
                      <div className="col-8">
                        <input name="email" onChange={this.handleChange} type="text" className="form-control" placeholder="Email" />
                      </div>
                      <div  className="col-4">
                        <input name="password" onChange={this.handleChange} type="text" className="form-control" placeholder="Contraseña" />
                      </div>
                      <div className="col-4">
                        <select name="pagina" onChange={this.handleChange} className="browser-default">
                          <option value="" disabled selected>Cual Pagina?</option>
                          <option value="pasion">Pasion</option>
                          <option value="milanuncios">milanuncios</option>
                        </select>
                      </div>
                      <div className="col-5">
                        <select name="hora_i" onChange={this.handleChange} className="browser-default">
                          <option value="" disabled selected>Empezar renovar a las?</option>
                          <option value="1"> 01:00</option>
                          <option value="2"> 2:00</option>
                          <option value="3"> 4:00</option>
                          <option value="4"> 5:00</option>
                          <option value="5"> 6:00</option>
                          <option value="6"> 7:00</option>
                          <option value="7"> 7:00</option>
                          <option value="8"> 8:00</option>
                          <option value="9"> 9:00</option>
                          <option value="10"> 10:00</option>
                          <option value="11"> 11:00</option>
                          <option value="12"> 12:00</option>
                          <option value="13"> 13:00</option>
                          <option value="14"> 14:00</option>
                          <option value="15"> 15:00</option>
                          <option value="16"> 16:00</option>
                          <option value="17"> 17:00</option>
                          <option value="18"> 18:00</option>
                          <option value="19"> 19:00</option>
                          <option value="20"> 20:00</option>
                          <option value="21"> 21:00</option>
                          <option value="22"> 22:00</option>
                          <option value="23"> 23:00</option>
                          <option value="00"> 00:00</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <select name="intervalo" onChange={this.handleChange} className="browser-default">
                          <option value="" disabled selected>Intervalo</option>
                          <option value="1">A cada 1 min</option>
                          <option value="2">A cada 2 min</option>
                          <option value="3">A cada 4 min</option>
                          <option value="4">A cada 5 min</option>
                          <option value="5">A cada 6 min</option>
                          <option value="6">A cada 7 min</option>
                          <option value="7">A cada 7 min</option>
                          <option value="8">A cada 8 min</option>
                          <option value="9">A cada 9 min</option>
                          <option value="10">A cada 10 min</option>
                          <option value="11">A cada 11 min</option>
                          <option value="12">A cada 12 min</option>
                          <option value="13">A cada 13 min</option>
                          <option value="14">A cada 14 min</option>
                          <option value="15">A cada 15 min</option>
                          <option value="16">A cada 16 min</option>
                          <option value="17">A cada 17 min</option>
                          <option value="18">A cada 18 min</option>
                          <option value="19">A cada 19 min</option>
                          <option value="20">A cada 20 min</option>
                          <option value="21">A cada 21 min</option>
                          <option value="22">A cada 22 min</option>
                          <option value="23">A cada 23 min</option>
                          <option value="24">A cada 24 min</option>
                          <option value="25">A cada 25 min</option>
                        </select>
                      </div>
                    </div>
                    <Button type="submit" className="btn light-blue darken-4">
                      Enviar
                      
</Button>
                  </form>

                </CardBody>
                </CardHeader>
              </Col>





              <Col md="12">


                <div className=" col-md-12" >

                  <div className="card ">

                    <div className="card-header card-header-primary blue-gradient">
                      <h4 className="card-title mt-0" > Mis Cuentas</h4>
                      <p className="card-category" > All Accounts</p>
                    </div>

                    <div className="card-body" >

                      <div className="table-responsive">
                        <Table className="table table-hover blue-gradient" rounded className="btn-block z-depth-1a" >
                          <thead  >

                            <th>
                              ID
                </th>
                            <th>
                              Email
                </th>
                            <th>
                              Clave
                </th>
                            <th>
                              Portal
                        </th>
                            <th>
                              Hora Inicio
                        </th>
                            <th>
                              Intervalo
                        </th>
                          </thead>


                          <tbody>
                            <tr>
                              <td>
                                1
                  </td>
                              <td>
                                Dakota Rice
                  </td>
                              <td>
                                Niger
                  </td>
                              <td>
                                Oud-Turnhout
                  </td>
                              <td>
                                Milnuncios
                  </td>
                              <td>
                                a cada 10 min
                  </td>
                            </tr>

                          </tbody>

                        </Table>

                      </div>
                    </div>
                  </div>

                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>

    )
  }
};
//module.exports=Cpanel ;
export default Cpanel;