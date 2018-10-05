import React from "react";
import { Container, Row, Col, Input, Button, Fa, Card,Table, CardBody, ModalFooter } from 'mdbreact';


const Cpanel = (props) => {
    return (
      <div className="col-md-12" gradient="blue" >
      <div className="card " gradient="blue">

        <div className="card-header card-header-primary" gradient="blue">
          <h4 className="card-title mt-0" gradient="blue" > Mis Cuentas</h4>
          <p className="card-category" gradient="blue" > All Accounts</p>
        </div>

        <div className="card-body" gradient="blue">
          <div className="table-responsive" gradient="blue" >
            <Table className="table table-hover" gradient="blue" >
              <thead className="" gradient="blue" >
              
                <th>
                  ID
                </th>
                <th>
                  Email
                  Email
                </th>
                <th>
                  Password
                </th>
                <th>
                  Status
                </th>
                <th>
                  agina
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
                </tr>
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>


    )

};

export default Cpanel;