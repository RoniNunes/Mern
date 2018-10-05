
import React from 'react';
//import ReactDom from 'react-dom';

const NavBarLogin = (props) => {
    return (
  

    
        <nav className="navbar purple darken-3">
 
         

       

<a href="#!" className="brand-logo">Supanel<i className="fa fa-cloud" ariahidden="true"></i></a>



            
            
        
         
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link" href="login">
                 
                 <i className="material-icons">logout</i> Salir
               </a>

                
              </li>
              {/*<!-- your navbar here -->*/}
            </ul>


            
          </div>
       
      </nav>
       
     

    )
};

export default NavBarLogin;