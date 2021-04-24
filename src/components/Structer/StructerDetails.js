import React from 'react';
import { updateStructer } from '../../actions/structerAction';
import {connect } from 'react-redux';
import history from '../../history'
import Dropdown from "../Member/Dropdown";
import moment from 'moment'

class StructerDetails extends React.Component {
    constructor(props){
        super(props);
        const location = history.location
        this.state = location.state;
        this.handleUpdate = this.handleUpdate.bind(this);
    }

handleChangeFor = (propertyName) => (event) => {
    const { structer} = this.state; 
    const structerDetails = {
      ...structer,
      [propertyName]: event.target.value
    };
    this.setState({ structer : structerDetails });
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
        });

      }
  handleUpdate(event) {
    event.preventDefault();
    this.props.updateStructer(this.state.structer);
  }

  render(){

    return (
      <form onSubmit={this.handleUpdate}>
        <div className="container mt-3 mb-5">
        <h2>Ajouter un nouveau Structure</h2>
        <Dropdown  parentCallback = {this.handleCallback} /> 

        <div class="row my-2">
            <div class="col-sm">
                <strong>{this.state.structer.GouvStruct}</strong>
            </div>
            <div class="col-sm "><strong >{this.state.structer.DelegStruct}</strong></div>
        </div>

        
         
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="Code structure">Code Structure :</label>
                <input
                    
                  type="text"
                  className="form-control"
                  id="CodeStruct"
                  autoComplete="off"
                  onChange={this.handleChangeFor('CodeStruct')} value={this.state.structer.CodeStruct}
                  />
              </div>
            </div>
            <div className="col-sm">
            <div className="form-group">
                <label htmlFor="TypeStruct">Type Structure:</label>
                <select className="form-control" id="type"
                 onChange={this.handleChangeFor('TypeStruct')} value={this.state.structer.TypeStruct}>
                {/* onChange={this.getType.bind(this)} */}
                <option  value={this.state.structer.TypeStruct}>{this.state.structer.TypeStruct}</option>
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
              <label htmlFor="DateCrea">Date Creation  <strong>{
                      moment(this.state.structer.DateCrea).format('MMMM Do YYYY')
                      
                }</strong></label>
              <input
                
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
                    type="text"
                    className="form-control"
                    id="CodeTresor"
                    autoComplete="off"
                    onChange={this.handleChangeFor('CodeTresor')} value={this.state.structer.CodeTresor || ''}
                    />
                </div> 
               </div>         
               
            <div className="col-3">
            <div className="form-group">
                  <label htmlFor="nomTresor">Nom Trésorier</label>
                  <input
                    
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
          
          </div>
          <div className="col-2">
          <button type="submit"  className="btn btn-success">Update</button>
          </div>
           </div>
         </div>
      
        </div>
    </div>
  
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      structers: state.structers
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    updateStructer : structer => dispatch(updateStructer(structer))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(StructerDetails);
    
  