import React from "react";

const Accounts = (props) => {
  return (
    <div className="col-md-12">
      <div className="card card-plain">
        <div className="card-header card-header-primary">
          <h4 className="card-title mt-0"> Msis Cuentas</h4>
          <p className="card-category"> All Accounts</p>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="" gradient="blue">
                <th>
                  ID
                </th>
                <th>
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
                    Milanuncios
                  </td>
                </tr>

              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>


  )

};

export default Accounts;