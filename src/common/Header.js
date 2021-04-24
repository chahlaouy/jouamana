import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>
  (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="row" style={{width:'100%',marginTop:'20px'}}> 
       <div className="col-6">
      <img className="style-img" src={require('../assets/images/logo.jpg')} alt=""></img><br/>
      <p className='style-p'>… Vivre avec dignité et respect de ses droits …</p>
      </div>
      <div className="col-4"></div>
      <div className="col-2">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" style={{marginTop:'45px'}} id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item { 'active': history.getCurrentLocation().pathname === '/' })}" >
           <Link className="nav-link link-style" to="/">Accueil <span className="sr-only">(current)</span></Link>
         </li>
       
       </ul>
     </div>
        </div>
        </div>
   </nav>
  )

export default Header;