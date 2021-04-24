import {GET_STRUCTERS, ADD_STRUCTER,DELETE_STRUCTER } from '../constants/ActionTypes';
import axios from "axios";
import history from '../history'
const API_URL = 'http://localhost:3001/api/';

export const getStructers = () => dispatch => {
    return fetch(API_URL+'structers')
    .then((response) => {
        return response.json();
       })
      .then(result => {
        console.log("structers actions ", result);
        dispatch({
            type: GET_STRUCTERS,
            payload: result.structers
          });
      });
    }


    export const addStructer = (structer) => {
        console.log("structer ", structer);
            return (dispatch) => {
                return axios.post(API_URL+'structers/', structer)
                    .then((res) => {
                        console.log("response ", res);
                        dispatch({ type: ADD_STRUCTER, payload : res.data.result })
                        history.push(`/structers`)

                    });
            }
          }
    
    export const updateStructer = (structer) => {
            console.log("udpate structer ", structer);
                return (dispatch) => {
                    return axios.put(API_URL+'structers/', structer) 
                        .then((res) => {
                            // console.log("response ", res);
                            
                            history.push('/structers')
                        });
                }
    }

    export const deleteStructer= (structer) => {
        return (dispatch) => {
            return axios.delete(API_URL+'structers', {data : structer})
                .then((res) => {
                    dispatch({ type: DELETE_STRUCTER, payload : structer })
                });
        }
    }
