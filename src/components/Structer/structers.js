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

  render() {
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
                      onClick={() => this.viewStructer(structer)}
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
      <div className="row m-4">
        <div className="col-lg-6">
          <h2>Liste des Structures</h2>
        </div>
        <div className="col-lg-6">
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