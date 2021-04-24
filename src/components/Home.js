import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => (
  <div className="row">
    <div className="row row-style">
    <div className="col-2"></div>
    <div className="col-3">
    <button style={{float:'right'}}  type="button" class="btn btn-danger btn-lg">
    <Link className="nav-link" to="/members">Gestion des Adhérents</Link>
    </button>
    </div>
    <div className="col-2"></div>
    
    <div className="col-3">
    <button type="button" class="btn btn-success btn-lg">
    <Link className="nav-link" to="/structers">Gestion des Structures</Link>
    </button>
    </div>
    <div className="col-2"></div>
    </div>
    <div className="row rowSecond-style">
    <div className="col-2"></div>
    <div className="col-3">
    <button style={{float:'right',width: '271px'}}  type="button" class="btn btn-warning btn-lg">
    <Link className="nav-link" to="/members">Gestion Financiéres</Link>
    </button>
    </div>
    <div className="col-2"></div>
    
    <div className="col-3">
    <button style={{width: '271px'}} type="button" class="btn btn-primary btn-lg">
    <Link className="nav-link" to="/structures"> Gestion des Activités</Link>
    </button>
    </div>
    <div className="col-2"></div>
    </div>
  </div>

  
  
)


export default Home;
