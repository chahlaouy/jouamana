import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../../actions/memberAction";
import Dropdown from "./Dropdown";
import axios from "axios";

class CreateMember extends Component {
  constructor() {
    super();
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
    };
    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /** callback for passing data from child to parent component it will be passed as aprop */
  handleCallback = (childData) =>{
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
  cancelCourse = () => { 
    this.setState({ member: {
      gouvernerat:"",
      delegation: "",
      image: "",
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
    selectedFile: null
      
    });
  }
  onChangeHandler = (event) => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  handleChangeFor = (propertyName) => (event) => {
    const { member } = this.state;
    const memberDetails = {
      ...member,
      [propertyName]: event.target.value,
    };
    this.setState({ member: memberDetails });
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:3000/members/upload", data, {})
      .then(res => { 
        console.log(res.data.filename)
        const { member } = this.state;
        const memberDetails = {
          ...member,
          joiningDate: new Intl.DateTimeFormat('en-US').format(this.state.joiningDate),
          image: res.data.filename
        };
        this.setState({ member: memberDetails }, () => {
          this.props.addMember(this.state.member);
        })
        // this.setState.joiningDate = new Intl.DateTimeFormat('en-US').format(this.state.joiningDate);
        // this.props.addMember(this.state.member);
      })
    
  }
  render() {
    return (
      <form ref={(el) => this.myFormRef = el}
       onSubmit={this.handleSubmit}>
        <div className="container mt-3 mb-5">
          <h2>Ajouter un nouveau Adhérent</h2>
          {/* <Dropdown delegation={this.state.member.delegation} gouvernerat={this.state.member.gouvernerat} />  */}
          <Dropdown parentCallback = {this.handleCallback}/> 

          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="firstName">Nom<span  style={{color:'red'}}>*</span></label>
                <input
                  required
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
                <label htmlFor="lastName">Prénom<span  style={{color:'red'}}>*</span></label>
                <input
                  required
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
                <label htmlFor="profession">Profession<span  style={{color:'red'}}>*</span></label>
                <input
                required
                  type="text"
                  className="form-control"
                  id="profession"
                  autoComplete="off"
                  onChange={this.handleChangeFor("profession")}
                  value={this.state.member.profession}
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
              <label htmlFor="cin">CIN/Passport<span  style={{color:'red'}}>*</span></label>
                    <input
                    required
                      type="text"
                      pattern="\d*" 
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
                      <option>choisissez</option>
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
                       <option>choisir</option>
                      <option  value="Président">Président(e)</option>
                      <option  value="Vice Président">Vice Président(e) </option>
                      <option  value="Directeur(rice) Executif">Directeur(rice) Executif(ve) </option>
                      <option  value="sorier(e)">Trésorier(e) </option>
                      <option  value="Simple Membre">Simple Membre </option>
                    </select>
                  </div>                
                </div>    
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="code">Code Adhérent</label>
                    <input
                    pattern="\d*" 
                        type="text"
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
                <label htmlFor="birthDate">Date de naissance</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthDate"
                  autoComplete="off"
                  onChange={this.handleChangeFor("birthDate")}
                  value={this.state.member.birthDate}
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
                  onChange={this.handleChangeFor("birthPlace")}
                  value={this.state.member.birthPlace}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="joiningDate">Date d'adhésion<span  style={{color:'red'}}>*</span>
                </label>
                <input
                required 
                  type="date"
                  className="form-control"
                  id="joiningDate"
                  autoComplete="off"
                  onChange={this.handleChangeFor("joiningDate")}
                  value={this.state.member.joiningDate}
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="image">Déposez un fichier<span  style={{color:'red'}}>*</span></label>
                <input
                required 
                  type="file"
                  className="form-control"
                  id="image"
                  autoComplete="off"
                  onChange={this.onChangeHandler}
                  // onChange={this.handleChangeFor("image")}
                  // value={this.state.member.image}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="email">Email<span  style={{color:'red'}}>*</span></label>
                <input
                required 
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
                <label htmlFor="telephone">Telephone<span  style={{color:'red'}}>*</span></label>
                <input
                required 
                name="tel"
                pattern="\d*" 
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
                  type="text"
                  // pattern="\d*" 
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
                <select className="form-control" id="codeCommission" 
                      onChange={this.handleChangeFor('codeCommission')} value={this.state.member.codeCommission}>
                        <option>choisir</option>
                        <option value="Enseignement, sciences et technologie">Enseignement, sciences et technologie </option>
                        <option value="Développement économique et emploi">Développement économique et emploi</option>
                        <option value="Social et santé ">Social et santé </option>
                        <option value="Culture, tourisme et environnement ">Culture, tourisme et environnement </option>
                    </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="observation">Observation</label>
                <textarea ref={el => this.observation = el}
                  className="form-control"
                  id="observation"
                  name="observation"
                  rows="3"
                  onChange={this.handleChangeFor("observation")}
                  value={this.state.member.observation}
                ></textarea>
              </div>
            </div>
          </div>

          <button onClick={this.cancelCourse} type="reset" className="btn btn-danger">
            Effacer
          </button>
          <button type="submit" className="btn btn-success">
            Ajouter
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  member: state.member,
});

const mapDispatchToProps = (dispatch) => ({
  addMember: (data) => dispatch(addMember(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMember);