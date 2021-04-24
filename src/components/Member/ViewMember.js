import React from "react";
import { updateMember } from "../../actions/memberAction";
import { connect } from "react-redux";
import history from "../../history";
import moment from 'moment'

class ViewMember extends React.Component {
  constructor(props) {
    super(props);
    const location = history.location;
    this.state = location.state;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  

  handleChangeFor = (propertyName) => (event) => {
    const { member } = this.state;
    const memberDetails = {
      ...member,
      [propertyName]: event.target.value,
    };
    this.setState({ member: memberDetails });
  };

  handleUpdate(event) {
    event.preventDefault();
    console.log("this.state ", this.state);
    console.log("this.props ", this.props);
    this.props.updateMember(this.state.member);
  }

  render() {
  
    return (
      <div className="customerDetail">
        <div className="container mt-3 mb-5">
          <h2>Details Adhérent</h2>
          <div></div>
          
              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="delegation">Gouvernerat:</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="delegation"
                      autoComplete="off"
                      onChange={this.handleChangeFor("firstName")}
                      value={this.state.member.gouvernerat}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="delegation">Délégation:</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="delegation"
                      autoComplete="off"
                      onChange={this.handleChangeFor("firstName")}
                      value={this.state.member.delegation}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="firstName">Nom</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="firstName"
                      autoComplete="off"
                      onChange={this.handleChangeFor("firstName")}
                      value={this.state.member.firstName}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="lastName">Prénom</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="lastName"
                      autoComplete="off"
                      onChange={this.handleChangeFor("lastName")}
                      value={this.state.member.lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                <label htmlFor="lastName">Profession</label>
                  <input
                      disabled
                      type="text"
                      className="form-control"
                      id="firstName"
                      autoComplete="off"
                      onChange={this.handleChangeFor("firstName")}
                      value={this.state.member.profession}
                    />
                      
                      </div>  
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="secteur">Secteur</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="secteur"
                      autoComplete="off"
                      onChange={this.handleChangeFor("secteur")}
                      value={this.state.member.secteur}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="nationality">Nationalité</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="nationality"
                      autoComplete="off"
                      onChange={this.handleChangeFor("nationality")}
                      value={this.state.member.nationality}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="cin">CIN/Passport</label>
                    <input
                      disabled
                      type="number"
                      className="form-control"
                      id="cin"
                      autoComplete="off"
                      onChange={this.handleChangeFor("cin")}
                      value={this.state.member.cin}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="sexe">Genre</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="sexe"
                      autoComplete="off"
                      onChange={this.handleChangeFor("sexe")}
                      value={this.state.member.sexe}
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="type">Type Adhérent</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="type"
                      autoComplete="off"
                      onChange={this.handleChangeFor("type")}
                      value={this.state.member.type}
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="code">Code Adhérent</label>
                    <input
                      disabled
                      type="number"
                      className="form-control"
                      id="code"
                      autoComplete="off"
                      onChange={this.handleChangeFor("code")}
                      value={this.state.member.codeMember}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="birthDate">Date de naissance</label>
                    <input
                      disabled
                      // type="number"
                      className="form-control"
                      id="birthDate"
                      autoComplete="off"
                      onChange={this.handleChangeFor("birthDate")}
                      value={moment(this.state.member.birthDate).format('MMMM Do YYYY')}
                     
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="birthPlace">Lieu de naissance</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="birthPlace"
                      autoComplete="off"
                      onChange={this.handleChangeFor("birthPlace")}
                      value={this.state.member.birthPlace}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="joiningDate">Date d'adhésion</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="joiningDate"
                      autoComplete="off"
                      onChange={this.handleChangeFor("joiningDate")}
                      value={moment(this.state.member.joiningDate).format('MMMM Do YYYY')}
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="form-group">
                    <img src={'../public/' + this.state.member.image} alt="niyah" ></img>
                    {/* <label htmlFor="birthPlace">Déposez un fichier</label>
                    <input
                      disabled
                      type="file"
                      className="form-control"
                      id="birthPlace"
                      autoComplete="off"
                    /> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      disabled
                      type="email"
                      className="form-control"
                      id="email"
                      autoComplete="off"
                      onChange={this.handleChangeFor("email")}
                      value={this.state.member.email}
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="telephone">Telephone</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="telephone"
                      autoComplete="off"
                      onChange={this.handleChangeFor("telephone")}
                      value={this.state.member.telephone}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="codeStructure">Code Strcuture</label>
                    <input
                      disabled
                      // type="number"
                      className="form-control"
                      id="codeStructure"
                      autoComplete="off"
                      onChange={this.handleChangeFor("codeStructure")}
                      value={this.state.member.codeStructure}
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="codeCommission">Code Commission</label>
                    <input
                      disabled
                      // type="number"
                      className="form-control"
                      id="codeCommission"
                      autoComplete="off"
                      onChange={this.handleChangeFor("codeCommission")}
                      value={this.state.member.codeCommission}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="observation">Observation</label>
                    <textarea
                      disabled
                      className="form-control"
                      id="observation"
                      rows="3"
                      onChange={this.handleChangeFor("observation")}
                      value={this.state.member.observation}
                    ></textarea>
                  </div>
                </div>
              </div>
           
          
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMember: (member) => dispatch(updateMember(member)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMember);