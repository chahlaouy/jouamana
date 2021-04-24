import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addStructer} from '../../actions/structerAction';
import Dropdown from "../Member/Dropdown";


class CreateStructer extends Component {
  
    constructor() {
        super();
        this.state = {
          // regional:Boolean = false,
          // local:Boolean = false,
          // national:Boolean = false,
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
               

            }
            
        };
        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getType = this.getType.bind(this);
      }
      /** callback for passing data from child to parent component it will be passed as aprop */
  handleCallback = (childData) =>{
    const { structer } = this.state;
    const structerDetails = {
      ...structer,
      DelegStruct: childData.delegation.name,
      GouvStruct: childData.gouvernerat.name,
      CodeStruct: `${childData.gouvernerat.code} ${childData.delegation.code}`,
    };
    this.setState({ structer: structerDetails }, () => {
      console.log(this.state)
    });
    console.log(childData)
  }
      // getType(event){
      //   if(event.target.value ='Local'){
      //     this.regional = false
      //     this.national = false
      //     this.local = true
      //   }
      //   if(event.target.value ='regional'){
      //     this.regional = true
      //     this.national = false
      //     this.local = false
      //   }
      //   if(event.target.value ='National'){
      //     this.regional = false
      //     this.national = true
      //     this.local = false
      //   }
      // }
      handleChangeFor = (propertyName) => (event) => {
        const { structer } = this.state;
        const structerDetails = {
          ...structer,
          [propertyName]: event.target.value
        };
        this.setState({ structer: structerDetails });
      }
      
      handleSubmit(event) {
        event.preventDefault();
        console.log("test ", this.state.structer)
        this.props.addStructer(this.state.structer);
      }
      cancelCourse = () => {
        this.setState({
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
           

        }
        })
      }

      
      render() {
    
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="container mt-3 mb-5">
            <h2>Ajouter un nouveau Structure</h2>
            <Dropdown  parentCallback = {this.handleCallback} /> 


            
             
              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="Code structure">Code Structure :</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="DateCrea"
                      autoComplete="off"
                      onChange={this.handleChangeFor('DateCrea')} value={this.state.structer.CodeStruct}
                      />
                  </div>
                </div>
                <div className="col-sm">
                <div className="form-group">
                    <label htmlFor="TypeStruct">Type Structure:</label>
                    <select className="form-control" id="type"
                     onChange={this.handleChangeFor('TypeStruct')} value={this.state.structer.TypeStruct} required>
                    {/* onChange={this.getType.bind(this)} */}
                    <option >--choisir--</option>
                      <option value="National">National</option>
                      <option value="regional">Régional</option>
                      <option value="Local">Local</option>
                    </select>
                  </div>
                </div>
              </div>

                 
            
             
              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="DateCrea">Date Creation</label>
                  <input
                  required
                      type="date"
                      className="form-control"
                      id="DateCrea"
                      autoComplete="off"
                      onChange={this.handleChangeFor('DateCrea')} value={this.state.structer.DateCrea}
                      />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="MatriFisc">Matricule Fiscale</label>
                    <input
                    required
                      type="text"
                      className="form-control"
                      id="MatriFisc"
                      autoComplete="off"
                      onChange={this.handleChangeFor('MatriFisc')} value={this.state.structer.MatriFisc}
                      />
                  </div>
                </div>               
              </div>
      
              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="JortCreation">JORT Création</label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="JortCreation"
                    autoComplete="off"
                    onChange={this.handleChangeFor('JortCreation')} value={this.state.structer.JortCreation}
                    />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="Numccptebq">Numéro compte bancaire</label>
                    <input
                    required
                      type="text"
                      className="form-control"
                      id="Numccptebq"
                      autoComplete="off"
                      onChange={this.handleChangeFor('Numccptebq')} value={this.state.structer.Numccptebq}
                      />
                  </div>
                </div>               
              </div>
              
              <div className="row">
               
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="CodePresident">Code Président</label>
                    <input
                    required
                        type="text"
                        className="form-control"
                        id="CodePresident"
                        autoComplete="off"
                        onChange={this.handleChangeFor('CodePresident')} value={this.state.structer.CodePresident}
                        />
                  </div>                
                </div>  
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="nomPresident">Nom Président</label>
                    <input
                    required
                        type="text"
                        className="form-control"
                        id="nomPresident"
                        autoComplete="off"
                        onChange={this.handleChangeFor('nomPresident')} value={this.state.structer.nomPresident}
                        />
                  </div>                
                </div>  
                      
              </div>


              <div className="row">
                <div className="col-3">
                  <div className="form-group">
                      <label htmlFor="CodeDirEx">Code Directeur Executif</label>
                      <input
                      required
                        type="text"
                        className="form-control"
                        id="CodeDirEx"
                        autoComplete="off"
                        onChange={this.handleChangeFor('CodeDirEx')} value={this.state.structer.CodeDirEx}
                        />
                    </div> 
                </div>       
                <div className="col-3">
                  <div className="form-group">
                      <label htmlFor="nomDirEx">Nom Directeur Executif</label>
                      <input
                      required
                        type="text"
                        className="form-control"
                        id="nomDirEx"
                        autoComplete="off"
                        onChange={this.handleChangeFor('nomDirEx')} value={this.state.structer.nomDirEx}
                        />
                    </div> 
                </div>          

                <div className="col-3">
                <div className="form-group">
                      <label htmlFor="CodeTresor">Code Trésorier</label>
                      <input
                      required
                        type="text"
                        className="form-control"
                        id="CodeTresor"
                        autoComplete="off"
                        onChange={this.handleChangeFor('CodeTresor')} value={this.state.structer.CodeTresor}
                        />
                    </div> 
                   </div>         
                   
                <div className="col-3">
                <div className="form-group">
                      <label htmlFor="nomTresor">Nom Trésorier</label>
                      <input
                      required
                        type="text"
                        className="form-control"
                        id="nomTresor"
                        autoComplete="off"
                        onChange={this.handleChangeFor('nomTresor')} value={this.state.structer.nomTresor}
                        />
                    </div> 
                   </div>        
              </div>

              <div className="row">
              <div className="col-3">
                <div className="form-group">
                      <label htmlFor="CodeVicePresident">Code vice président</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CodeVicePresident"
                        autoComplete="off"
                        onChange={this.handleChangeFor('CodeVicePresident')} value={this.state.structer.CodeVicePresident}
                        />
                    </div> 
                   </div>      
                   <div className="col-3">
                <div className="form-group">
                      <label htmlFor="nomVice">Nom vice président</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nomVice"
                        autoComplete="off"
                        onChange={this.handleChangeFor('nomVice')} value={this.state.structer.nomVice}
                        />
                    </div> 
                   </div>  
                <div className="col-3">
                  <div className="form-group">
                      <label htmlFor="codeMembreBur">Code Membre Bureau</label>
                      <input
                        type="text"
                        className="form-control"
                        id="codeMembreBur"
                        autoComplete="off"
                        onChange={this.handleChangeFor('codeMembreBur')} value={this.state.structer.codeMembreBur}
                        />
                    </div> 
                </div>  
                <div className="col-3">
                  <div className="form-group">
                      <label htmlFor="nomMembreBureau">Nom Membre Bureau</label>
                      <input
                      required
                        type="text"
                        className="form-control"
                        id="nomMembreBureau"
                        autoComplete="off"
                        onChange={this.handleChangeFor('nomMembreBureau')} value={this.state.structer.nomMembreBureau}
                        />
                    </div> 
                </div>              
            </div>
            <div className="row">
             <div className="col-6">
               <div className="row">
               <div className="col-2">
              <button onClick={this.cancelCourse} type="reset" className="btn btn-danger mr-2">Effacer</button>
              </div>
              <div className="col-2">
              <button type="submit"  className="btn btn-success">Ajouter</button>
              </div>
               </div>
             </div>
          
            </div>
        </div>
      
          </form>
        );
      }
}

const mapStateToProps = (state) => ({
    structer: state.structer
})

const mapDispatchToProps = (dispatch) => ({
    addStructer: (data) => dispatch(addStructer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateStructer);