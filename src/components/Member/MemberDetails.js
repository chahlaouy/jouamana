import React from 'react';
import { updateMember } from '../../actions/memberAction';
import {connect } from 'react-redux';
import history from '../../history'
import Dropdown from "./Dropdown";
import moment from 'moment'
import axios from 'axios'

class MemberDetails extends React.Component {
    constructor(props){
        super(props);
        const location = history.location
        this.state = location.state;
        this.handleUpdate = this.handleUpdate.bind(this);
        this.getIt =  this.getIt.bind(this);   }

    getIt(event){
      console.log('eveeent',event.target.value)
    }
handleChangeFor = (propertyName) => (event) => {
    const { member } = this.state;
    const memberDetails = {
      ...member,
     
      [propertyName]: event.target.value
    };
    this.setState({ member: memberDetails });
  }
  handleCallback = (childData) =>{
    console.log(childData)
    const { member } = this.state;
    const memberDetails = {
      ...member,
      gouvernerat: childData.gouvernerat.name,
      delegation: childData.delegation.name,
      codeStructure: `${childData.gouvernerat.code} ${childData.delegation.code}`,
    };
    this.setState({ member: memberDetails }, () => {
      console.log(this.state)
    });
    console.log(childData)
    this.setState()
  }
  handleUpdate(event) {
    event.preventDefault();
  
      this.state.member.birthDate = new Intl.DateTimeFormat('en-US').format(this.state.birthDate),
      this.state.member.joiningDate = new Intl.DateTimeFormat('en-US').format(this.state.joiningDate),
      console.log("this.state ", this.state)
      this.props.updateMember(this.state.member);
    // event.preventDefault();
  }

  render(){

    return(
        <div className="customerDetail">
  
            <div className="container mt-3 mb-5">
            <h2>Details Adhérent</h2>
            <Dropdown parentCallback = {this.handleCallback} /> 
            <div class="row my-2">
              <div class="col-sm">
                <strong>{this.state.member.gouvernerat}</strong>
              </div>
              <div class="col-sm "><strong >{this.state.member.delegation}</strong></div>
            </div>
                <div>
                </div>
            {
                <form onSubmit={this.handleUpdate}>
              
              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="firstName">Nom</label>
                  <input
                   
                    type="text"
                    className="form-control"
                    id="firstName"
                    autoComplete="off"
                    onChange={this.handleChangeFor('firstName')} value={this.state.member.firstName}
                    />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="lastName">Prénom</label>
                    <input
                     
                      type="text"
                      className="form-control"
                      id="lastName"
                      autoComplete="off"
                      onChange={this.handleChangeFor('lastName')} value={this.state.member.lastName}
                      />
                  </div>
                </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="profession">Profession</label>
                  <input
                   
                    type="text"
                    className="form-control"
                    id="profession"
                    autoComplete="off"
                    onChange={this.handleChangeFor('profession')} value={this.state.member.profession}
                    />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="secteur">Secteur</label>
                    <input
                      type="text"
                      className="form-control"
                      id="secteur"
                      autoComplete="off"
                      onChange={this.handleChangeFor('secteur')} value={this.state.member.secteur}
                      />
                  </div>
                </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="nationality">Nationalité</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nationality"
                    autoComplete="off"
                    onChange={this.handleChangeFor('nationality')} value={this.state.member.nationality}
                    />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="cin">CIN/Passport</label>
                    <input
                     
                      type="number"
                      className="form-control"
                      id="cin"
                      autoComplete="off"
                      onChange={this.handleChangeFor('cin')} value={this.state.member.cin}
                      />
                  </div>
                </div>               
              </div>
              

              <div className="row">
                <div className="col-6">
                <div className="form-group">
                    <label htmlFor="sexe">Genre</label>
                    <select className="form-control" id="sexe" 
                    onChange={this.handleChangeFor('sexe')} value={this.state.member.sexe}>
                      
                      <option value={this.state.member.sexe}>{this.state.member.sexe}</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </select>
                  </div>
                </div>  
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="type">Type Adhérent</label>
                    <select className="form-control" id="type"                  
                    onClick={this.getCode}
                    onChange={this.handleChangeFor('type')} value={this.state.member.type} >
                       <option  value={this.state.member.type}>{this.state.member.type}</option>
                      <option  value="Président(e)">Président(e)</option>
                      <option  value="Vice Président(e)">Vice Président(e) </option>
                      <option  value="Directeur(rice) Executif(ve)">Directeur(rice) Executif(ve) </option>
                      <option  value="Trésorier(e)">Trésorier(e) </option>
                      <option  value="Simple Membre">Simple Membre </option>
                    </select>
                  </div>                
                </div>    
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="code">Code Adhérent</label>
                    <input
                        type="Number"
                        className="form-control"
                        id="code"
                        autoComplete="off"
                        onChange={this.handleChangeFor('code')} value={this.state.member.codeMember}
                        />
                  </div>                
                </div>              
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="birthDate">Date de naissance <strong>{
                      moment(this.state.member.birthDate).format('MMMM Do YYYY')
                      
                      }</strong></label>

                      <input
                        type="date"
                        className="form-control"
                        id="birthDate"
                        autoComplete="off"
                      
                        onChange={this.handleChangeFor('birthDate')} value={this.state.member.birthDate}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                      <label htmlFor="birthPlace">Lieu de naissance</label>
                      <input
                        type="text"
                        className="form-control"
                        id="birthPlace"
                        autoComplete="off"
                        onChange={this.handleChangeFor('birthPlace')} value={this.state.member.birthPlace}
                        />
                    </div> 
                   </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="joiningDate">Date d'adhésion <strong>{
                      moment(this.state.member.joiningDate).format('MMMM Do YYYY')
                      
                      }</strong> </label>
                      <input
                       
                        type="date"
                        className="form-control"
                        id="joiningDate"
                        autoComplete="off"
                        onChange={this.handleChangeFor('joiningDate')} value={this.state.member.joiningDate}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                      <label htmlFor="image">Déposez un fichier</label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        autoComplete="off"
                        />
                    </div> 
                   </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                       
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="off"
                        onChange={this.handleChangeFor('email')} value={this.state.member.email}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                      <label htmlFor="telephone">Telephone</label>
                      <input
                       
                        type="text"
                        className="form-control"
                        id="telephone"
                        autoComplete="off"
                        onChange={this.handleChangeFor('telephone')} value={this.state.member.telephone}
                        />
                    </div> 
                   </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="codeStructure">Code Strcuture</label>
                      <input
                        // type="number"
                        className="form-control"
                        id="codeStructure"
                        autoComplete="off"
                        onChange={this.handleChangeFor('codeStructure')}
                        value={this.state.member.codeStructure}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                      <label htmlFor="codeCommission">Code Commission</label>
                <select className="form-control" id="codeCommission" 
                      onChange={this.handleChangeFor('codeCommission')} 
                      value={this.state.member.codeCommission}
                      >
                        <option value={this.state.member.codeCommission}>{this.state.member.codeCommission}</option>
                     <option>Enseignement, sciences et technologie </option>
                      <option>Développement économique et emploi</option>
                      <option>Social et santé </option>
                      <option>Culture, tourisme et environnement </option>
                    </select>
                    </div> 
                   </div>               
              </div>

              <div className="row">

                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="observation">Observation</label>
                    <textarea className="form-control" id="observation" rows="3" onChange={this.handleChangeFor('observation')} value={this.state.member.observation}>  
                    </textarea>
                  </div>
                </div>
              </div>
 

                <button type="submit" className="btn btn-success btn-lg">
                  Modifier
                </button>

               </form>
              }
                        </div>
    
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      members: state.members
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    updateMember : member => dispatch(updateMember(member))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MemberDetails);