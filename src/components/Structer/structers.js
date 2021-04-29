import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStructers, deleteStructer } from "../../actions/structerAction";
import history from "../../history";
import moment from 'moment'

class Structers extends Component {
  constructor(props) {
    super(props);
    this.viewStructer = this.viewStructer.bind(this);
    this.state = {
      structer : {
        CodeStruct : "",
        nomPresident:"",
        nomVice:"",
        nomDirEx:"",
        nomTresor:"",
        nomMembreBureau:"",
        GouvStruct : "",
        DelegStruct : "",
        DateCrea : "",
        TypeStruct : "",
        MatriFisc : "",
        JortCreation : "",
        Numccptebq : "",
        CodePresident : "",
        CodeVicePresident: "",
        CodeDirEx: "",
        CodeTresor: "",
        codeMembreBur: ""
       

    },
      showHide : false,
    };
  }

  componentDidMount() {
    this.props.getStructers();
  }
  static propTypes = {
    getStructers: PropTypes.func.isRequired,
    structers: PropTypes.object.isRequired,
  };

  deleteStructer(structer) {
   
    this.props.deleteStructer(structer);
  }
  updateStructer = (viewStructerDetails) => {
    console.log("this.state ", viewStructerDetails);
    history.push("/structer/update", { structer: viewStructerDetails });
  };

  viewStructer = (viewStructerDetails) => {
    console.log("this.state ", viewStructerDetails);
    history.push("/structer/view", { structer: viewStructerDetails });
  };

  handleModalShowHide(structer) {
    console.log(structer);
    this.setState({structer : structer})
    this.setState({ showHide: !this.state.showHide })
  }
  render() {
    let className = 'hidden';
    if (this.state.showHide) {
      className = '';
    }
    

    const modal = (
      <div className={className}>
        
        <div className="modal-tunisia">
          <div className="modal-tunisia-header">
              <h1>Details Structure</h1>
          </div>
          <div className="modal-tunisia-body">
            <div className="row">
              
              <div className="col-lg-12">

                    <ul class="list-group">
                    <li class="list-group-item">
                      <strong>Code Structure: </strong>
                      <span>{this.state.structer.CodeStruct}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nom President: </strong>
                      <span>{this.state.structer.nomPresident}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nom Vice Président: </strong>
                      <span>{this.state.structer.nomVice}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nom directeur: </strong>
                      <span>{this.state.structer.nomDirEx}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nom Tresor: </strong>
                      <span>{this.state.structer.nomTresor}</span>
                    </li>
                    
                    <li class="list-group-item">
                      <strong>Gouvernerat: </strong>
                      <span>{this.state.structer.GouvStruct}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Delegation: </strong>
                      <span>{this.state.structer.DelegStruct}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nom Membre Bureau: </strong>
                      <span> 
                      {this.state.structer.nomMembreBureau}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Date Creation: </strong>
                      <span> 
                      {moment(this.state.structer.DateCrea).format('MMMM Do YYYY')}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Type Structure: </strong>
                      <span>{this.state.structer.TypeStruct}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Matricule Fiscale: </strong>
                      <span>{this.state.structer.MatriFisc}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Jort Creation: </strong>
                      <span>{this.state.structer.JortCreation}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Numccptebq: </strong>
                      <span>{this.state.structer.Numccptebq}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code President: </strong>
                      <span>{this.state.structer.CodePresident}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Vice President: </strong>
                      <span>{this.state.structer.CodeVicePresident}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Dir Ex: </strong>
                      <span>{this.state.structer.CodeDirEx}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Tresor: </strong>
                      <span>{this.state.structer.CodeTresor}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>code Membre Bureau: </strong>
                      <span>{this.state.structer.codeMembreBur}</span>
                    </li>
                    
                    
                  </ul>
              </div>
            </div>
          </div>
          <div className="modal-tunisia-footer">
            <button className="btn btn-primary" onClick={() => this.handleModalShowHide(this.state.structer)}>Fermer</button>
          </div>
        </div>
       
      </div>
    );
    const { structers } = this.props.structers;

    const structerList = (
      
      <div>
        <div className="col-lg-12 table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> Code Structure </th>
                <th scope="col">Type Structure </th>
                <th scope="col">Date Creation</th>

                <th scope="col">Matricule Fiscale</th>
                <th scope="col">JORT Créattion</th>
                <th scope="col">Numéro compte bancaire</th>
              

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {structers.map((structer, index) => (
                <tr key={index}>
                  <td>{structer.CodeStruct}</td>
                  <td>{structer.TypeStruct}</td>
                  <td> {moment(structer.DateCrea).format('MMMM Do YYYY')}</td>
                  <td>{structer.MatriFisc}</td>
                  <td>{structer.JortCreation}</td>
                  <td>{structer.Numccptebq}</td>
                  <td>
                    <i
                      className="fa fa-info btn btn-info"
                      onClick={() => this.handleModalShowHide(structer)}
                    >
                      {" "}
                    </i>{" "}
                    &nbsp;
                    <i
                      className="fa fa-edit btn btn-info"
                      onClick={() => this.updateStructer(structer)}
                    >
                      {" "}
                    </i>{" "}
                    &nbsp;
                    <i
                      className="fa fa-trash btn btn-danger"
                      onClick={() => this.deleteStructer(structer)}
                    >
                      {" "}
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

    return (

      <div>
         <div>
          {modal}
        </div>
        <div className="row m-4">
          <div className="col-lg-6">
            <h2>Liste des Structures</h2>
          </div>
          <div className="col-lg-6">
            <Link to={`/structer/new`}>
              <button className="btn btn-success pull-right ml-3">
                Filtrer
              </button>
            </Link>
            <Link to={`/structer/new`}>
              <button className="btn btn-success pull-right">
                Ajouter une nouvelle structure
              </button>
            </Link>
          </div>
          
          <div className="col-lg-12 text-center">
            { structers.length === 0 ? "No Structers Create New Structers" : structerList}
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  structers: state.structers,
});

const mapDispatchToProps = (dispatch) => ({
  getStructers: () => dispatch(getStructers()),
  deleteStructer: (structer) => dispatch(deleteStructer(structer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Structers);