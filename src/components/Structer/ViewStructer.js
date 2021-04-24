import React from 'react';
import { updateStructer } from '../../actions/structerAction';
import {connect } from 'react-redux';
import history from '../../history'

class StructerDetails extends React.Component {
    constructor(props){
        super(props);
        const location = history.location
        this.state = location.state;
        
    }

  render(){ 

    return(
        <div className="customerDetail">
  
            <div className="container mt-3 mb-5">
            <h2>Details Adhérent</h2>
                <div>
                </div>
            {
                <form onSubmit={this.handleUpdate}>
              
              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="Code Structure">Code Structure :</label>
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="Type structure">Type Structure :</label>
                    <select className="form-control" id="type">
                    <option>--choisir--</option>
                      <option>National</option>
                      <option>Régional</option>
                      <option>Local</option>
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
                    value={this.state.structer.DateCrea}
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
                      value={this.state.structer.MatriFisc}
                      />
                  </div>
                </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="JortCreation">JORT Créattion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="JortCreation"
                    autoComplete="off"
                    value={this.state.structer.JortCreationtion}
                    />
                  </div>
                </div>  
                <div className="col-sm">
                  <div className="form-group">
                    <label htmlFor="Numccptebq">Numéro compte bancaire</label>
                    <input
                    required
                      type="number"
                      className="form-control"
                      id="Numccptebq"
                      autoComplete="off"
                      value={this.state.structer.Numccptebq}
                      />
                  </div>
                </div>               
              </div>
              

              

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="CodePresident">Code Président</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CodePresident"
                        autoComplete="off"
                         value={this.state.structer.CodePresident}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                      <label htmlFor="birthPlace">Code vice président</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CodeVicePresident"
                        autoComplete="off"
                        value={this.state.structer.CodeVicePresident}
                        />
                    </div> 
                   </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="CodeDirEx">Code Dir Executif</label>
                      <input
                      required
                        type="number"
                        className="form-control"
                        id="CodeDirEx"
                        autoComplete="off"
                        value={this.state.structer.CodeDirEx}
                        />
                    </div> 
                </div>               

                <div className="col-sm">
                <div className="form-group">
                <label htmlFor="CodeTresor">Code Trésorier</label>
                      <input
                      required
                        type="CodeTresor"
                        className="form-control"
                        id="CodeTresor"
                        autoComplete="off"
                        value={this.state.structer.CodeTresor}
                        />
                    </div> 
                   </div>               
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                      <label htmlFor="codeMembreBur">Code Membre Bureau</label>
                      <input
                      required
                        type="codeMembreBur"
                        className="form-control"
                        id="codeMembreBur"
                        autoComplete="off"
                        value={this.state.structer.codeMembreBur}
                        />
                    </div> 
                    <button type="submit" className="btn btn-success btn-lg">
                  UPDATE
                </button>

                </div>                        
              </div>

               </form>
              }
                        </div>
    
        </div>
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
    
  