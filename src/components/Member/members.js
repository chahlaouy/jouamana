import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMembers, deleteMember } from "../../actions/memberAction";
import history from "../../history";
import moment from 'moment'

class Members extends Component {
  constructor(props) {
    super(props);
    this.viewMember = this.viewMember.bind(this);
    this.state = {
      member: {
        gouvernerat:"",
        delegation: "",
        image:"",
        firstName: "",
        lastName: "",
        profession: "",
        secteur: "",
        nationality: "",
        cin: "",
        sexe: "",
        type: "",
        birthDate: "",
        joiningDate: "",
        birthPlace: "",
        email: "",
        telephone: "",
        codeStructure: "",
        codeCommission: "",
        observation: "",
      },
      showHide : false,
    };
  }
  componentDidMount() {
    this.props.getMembers();
  }
  static propTypes = {
    getMembers: PropTypes.func.isRequired,
    members: PropTypes.object.isRequired,
  };

  deleteMember(member) {
   
    this.props.deleteMember(member);
  }
  updateMember = (viewMemberDetails) => {
    console.log("this.state ", viewMemberDetails);
    history.push("/member/update", { member: viewMemberDetails });
  };

  viewMember = (viewMemberDetails) => {
    console.log("this.state ", viewMemberDetails);
    history.push("/member/view", { member: viewMemberDetails });
  };

  handleModalShowHide(member) {
    console.log(member);
    this.setState({member : member})
    this.setState({ showHide: !this.state.showHide })
}
  

  render() {
    let className = 'hidden';
    if (this.state.showHide) {
      className = '';
    }
    
    const { members } = this.props.members;

    const modal = (
      <div className={className}>
        
        <div className="modal-tunisia">
          <div className="modal-tunisia-header">
              <h1>Details Adhérent</h1>
          </div>
          <div className="modal-tunisia-body">
            <div className="row">
              <div className="col-lg-6">
                <img src={"/public/" + this.state.member.image} className="image-thumbnail"></img>
              </div>
              <div className="col-lg-6">

                    <ul class="list-group">
                    <li class="list-group-item">
                      <strong>Nom: </strong>
                      <span>{this.state.member.firstName}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Prénom: </strong>
                      <span>{this.state.member.lastName}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Email: </strong>
                      <span>{this.state.member.email}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Cin: </strong>
                      <span>{this.state.member.cin}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Secteur: </strong>
                      <span>{this.state.member.secteur}</span>
                    </li>
                    
                    <li class="list-group-item">
                      <strong>Gouvernerat: </strong>
                      <span>{this.state.member.gouvernerat}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Delegation: </strong>
                      <span>{this.state.member.delegation}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Date de naissance: </strong>
                      <span> 
                      {moment(this.state.member.birthDate).format('MMMM Do YYYY')}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Joining Date: </strong>
                      <span> 
                      {moment(this.state.member.joiningDate).format('MMMM Do YYYY')}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Nationalité: </strong>
                      <span>{this.state.member.nationality}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Profession: </strong>
                      <span>{this.state.member.profession}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Genre: </strong>
                      <span>{this.state.member.sexe}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Télephone: </strong>
                      <span>{this.state.member.telephone}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Type: </strong>
                      <span>{this.state.member.type}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Email: </strong>
                      <span>{this.state.member.email}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Membre: </strong>
                      <span>{this.state.member.codeMember}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Structure: </strong>
                      <span>{this.state.member.codeStructure}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Code Commission: </strong>
                      <span>{this.state.member.codeCommission}</span>
                    </li>
                    <li class="list-group-item">
                      <strong>Observation: </strong>
                      <span>{this.state.member.observation}</span>
                    </li>
                    
                  </ul>
              </div>
            </div>
          </div>
          <div className="modal-tunisia-footer">
            <button className="btn btn-primary" onClick={() => this.handleModalShowHide(this.state.member)}>Fermer</button>
          </div>
        </div>
       
      </div>
    );
    const memberList = (
      <div>
        <div className="col-lg-12 table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>

                <th scope="col">Profession</th>
                <th scope="col">Genre</th>
                <th scope="col">Email</th>
                {/* <th scope="col">Photo</th> */}
                <th scope="col">Téléphone</th>
                <th scope="col">Type</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.codeMember}</td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.profession}</td>
                  <td>{member.sexe}</td>
                  <td>{member.email}</td>
                  {/* <td><img src={member.image}></img></td>  */}
                  <td>{member.telephone}</td>
                  <td>{member.type}</td>

                  <td>
                    <i
                      className="fa fa-info btn btn-info"
                      onClick={() => this.handleModalShowHide(member)}
                    >
                      {" "}
                    </i>{" "}
                    &nbsp;
                    <i
                      className="fa fa-edit btn btn-info"
                      onClick={() => this.updateMember(member)}
                    >
                      {" "}
                    </i>{" "}
                    &nbsp;
                    <i
                      className="fa fa-trash btn btn-danger"
                      onClick={() => this.deleteMember(member)}
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
        <div>
          {modal}
        </div>
        <div className="row m-4">
        </div>
          <div className="col-lg-3">
            <h2>Liste des Adhérents</h2>
          </div>
          
          <div className="col-lg-3">
            {/* <Link > */}
              <button  style={{color:"white"}} className="btn btn-warning pull-right">
                Historique
              </button>
            {/* </Link> */}
          </div>
          <div className="col-lg-3 ">
            <Link to={`/member/new`}>
              <button style={{marginRight:"48px"}} className="btn btn-success ">
                Ajouter un nouvel adhérent
              </button>
            </Link>
            <Link to={`/member/new`}>
              <button style={{marginRight:"48px"}} className="btn btn-success ">
                Filtrer
              </button>
            </Link>
          </div>
        
        <div className="col-lg-12 text-center">
          {members.length === 0 ? "No Members Create New Members" : memberList}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: () => dispatch(getMembers()),
  deleteMember: (member) => dispatch(deleteMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);