import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMembers, deleteMember } from "../../actions/memberAction";
import history from "../../history";

class Members extends Component {
  constructor(props) {
    super(props);
    this.viewMember = this.viewMember.bind(this);
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
  

  render() {
   
    
    const { members } = this.props.members;

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
                <th scope="col">Photo</th>
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
                  <td><img src={member.image}></img></td> 
                  <td>{member.telephone}</td>
                  <td>{member.type}</td>

                  <td>
                    <i
                      className="fa fa-info btn btn-info"
                      onClick={() => this.viewMember(member)}
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
        <div className="col-lg-3">
          <h2>Liste des Adhérents</h2>
        </div>
        <div className="col-lg-3"></div>
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