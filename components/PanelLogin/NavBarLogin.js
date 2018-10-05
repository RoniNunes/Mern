
import React ,{ Component } from 'react';
//import ReactDom from 'react-dom';
import AuthService from '../../AuthService';
import withAuth from '../../withAuth';
////import NavBar from './components/NavBar';
//import HomePanel from '../components/HomePanel';

const Auth = new AuthService();



class NavBarLogin extends Component {

  render(){
    return (



      <nav className="mb-1 navbar navbar-expand-lg navbar-dark blue lighten-1 blue-gradient">

        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          gradient="blue"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#!" className="brand-logo">Supanel
      <i className="fa fa-cloud" ariahidden="true"></i></a>


        <div className="collapse navbar-collapse"
         id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown " dropdown>
              <a dropdownToggle 
                className="nav-link  waves-light" mdbWavesEffect>
                Settings<span className="fa fa-gear"></span></a>

            </li>

            <li className="nav-item dropdown btn-group" dropdown>
              <a dropdownToggle className="nav-link  waves-light" mdbWavesEffect>
                Profile <span className="fa fa-user"></span></a>

            </li>


            {/*<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user"></i> Profile </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                <a className="dropdown-item waves-effect waves-light" href="#">My account</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Log out</a>
              </div>
            </li>*/}

            <li className="nav-item dropdown btn-group" dropdown>

            <a className="form-submit" onClick={this.handleLogout.bind(this)} href="login"
            
              dropdownToggle  className="nav-link  waves-light" mdbWavesEffect>
                Salir <span className="caret"></span><i className="fa fa-sign-out" ></i></a>


            </li>

            {/*<!-- your navbar here -->*/}
          </ul>



        </div>

      </nav>



    );
  }handleLogout() {
    Auth.logout();
    this.props.history.replace('/login');
}

};

export default NavBarLogin;