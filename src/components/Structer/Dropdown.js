import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      selectedCountry: "--Choose Country--",
      selectedState: "--Choose State--",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  // countries heya gouvernorat o states houma les déligation

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "Tunis",
          code: "00",
          states: [
            {
              name: "Carthage",
            },
            {
              name: "La Medina",
            },
            {
              name: "Bab El Bhar",
            },
            {
              name: "Bab Souika",
            },
            {
              name: "El Omrane",
            },
            {
              name: "El Omrane Supérieur",
            },
            {
              name: "Ettahrir",
            },
            {
              name: "El Menzah",
            },
            {
              name: "Cité El Khadhra",
            },
            {
              name: "Le Bardo",
            },
            {
              name: "Sijoumi",
            },
            {
              name: "Ezzouhour",
            },
            {
              name: "El Hrairia",
            },
            {
              name: "Sidi Hassine",
            },
            {
              name: "El Ouardia",
            },
            {
              name: "El Kabaria",
            },
            {
              name: "Sidi El Béchir",
            },
            {
              name: "Djebel Djelloud",
            },
            {
              name: "La Goulette",
            },
            {
              name: "Le Kram",
            },
            {
              name: "La Marsa",
            },
          ],
        },
      
        {
          name: "Ariana",
          code: "",
          states: [
            {
              name: "Raoued",
            },
            {
              name: "Kalaât El Andalous",
            },
            {
              name: "Sidi Thabet",
            },
            {
              name: "Cité Ettadhamen",
            },
            {
              name: "El Mnihla",
            },

          ],
        },

        {
          name: "Ben Arous",
          code: "",
          states: [
            {
              name: "La Nouvelle Medina",
            },
            {
              name: "El Mourouj",
            },
            {
              name: "Hammam Lif",
            },
            {
              name: "Hammam Chôtt",
            },
            {
              name: "Bou Mhel El Bassatine",
            },
            {
              name: "Ezzahra",
            },
            {
              name: "Radès",
            },
            {
              name: "Megrine",
            },
            {
              name: "Mohamedia",
            },
            {
              name: "Fouchana",
            },
            {
              name: "Mornag",
            },
          ],
        },
      
        

            {
              name: "Mannouba",
              code: "",
              states: [
                {
                  name: "Douar Hicher",
                },
                {
                  name: "Oued Ellil",
                },
                {
                  name: "Mornaguia",
                },
                {
                  name: "Borj Amri",
                },
                {
                  name: "Djedeida",
                },
                {
                  name: "Tebourba",
                },
                {
                  name: "El Battane",
                },

              ],
            },

            {
              name: "Nabeul",
              code: "",
              states: [
                {
                  name: "Dar Châabane El Fehri",
                },
                {
                  name: "Beni khiar",
                },
                {
                  name: "Korba",
                },
                {
                  name: "Menzel Temime",
                },
                {
                  name: "El Mida",
                },
                {
                  name: "Kelibia",
                },
                {
                  name: "El Haouaria",
                },
                {
                  name: "Hammam El Guezaz",
                },

                {
                  name: "Takelsa",
                },

                {
                  name: "Soliman",
                },
                {
                  name: "Menzel Bouzelfa",
                },
                {
                  name: "Beni Khalled",
                },
                {
                  name: "Grombalia",
                },{
                  name: "Grombalia",
                },{
                  name: "Hammamet",
                },
              ],
            },


            {
              name: "Zaghouan",
              code: "",
              states: [
                {
                  name: "Ez-Zeriba",
                },
                {
                  name: "Bir Mchergua",
                },
                {
                  name: "El Fahs",
                },
                {
                  name: "En-Nadhour",
                },
                {
                  name: "En-Nadhour",
                },           
              ],
            },


            {
              name: "  Bèja",
              code: "",
              states: [
                {
                  name: "Béja Sud",
                },
                {
                  name: "Amdoun",
                },
                {
                  name: "Nefza",
                },
                {
                  name: "Teboursouk",
                },
                {
                  name: "Tibar",
                },
                {
                  name: "Testour",
                },  
                {
                  name: "Goubellat",
                },  
                {
                  name: "Medjez El Bab",
                },  
                    
              ],
            },


            {
              name: "  Jendouba",
              code: "",
              states: [
                {
                  name: "Jendouba Nord",
                },
                {
                  name: "Amdoun",
                },
                {
                  name: "Bou Salem",
                },
                {
                  name: "Tabarka",
                },
                {
                  name: "Ain Draham",
                },
                {
                  name: "Fernana",
                },  
                {
                  name: "Ghardimaou",
                },  
                {
                  name: "Oued Meliz",
                },
                {
                  name: "Balta",
                }, 
                {
                  name: "Bou Aouane",
                }, 
                    
              ],
            },


            {
              name: "  El Kef",
              code: "",
              states: [
                {
                  name: "Kef Est",
                },
                {
                  name: "Nebeur",
                },
                {
                  name: "Sakiet Sidi Youssef",
                },
                {
                  name: "Tajerouine",
                },
                {
                  name: "Kalâat Snan",
                },
                {
                  name: "Kalâat Khasbah",
                },  
                {
                  name: "Djerissa",
                },  
                {
                  name: "El Ksour",
                },
                {
                  name: "Dahmani",
                }, 
                {
                  name: "Es-Sers",
                }, 
                    
              ],
            },

            

            {
              name: "  Siliana",
              code: "",
              states: [
                {
                  name: "Siliana Sud",
                },
                {
                  name: "Bou Arada",
                },
                {
                  name: "Gaâfour",
                },
                {
                  name: "El  Krib",
                },
                {
                  name: "Bourouis",
                },
                {
                  name: "Makthar",
                },  
                {
                  name: "Er-Rouhia",
                },  
                {
                  name: "Kesra",
                },
                {
                  name: "Bargou",
                }, 
                {
                  name: "El Aroussa",
                },       
              ],
            },

            {
              name: "  Sousse",
              code: "",
              states: [
                {
                  name: "Sousse Medina",
                },
                {
                  name: "Sousse Riadh",
                },
                {
                  name: "Sousse Jawhara",
                },
                {
                  name: "Sousse Sidi Abdelhamid",
                },
                {
                  name: "Hammam Sousse",
                },
                {
                  name: "Akouda",
                },  
                {
                  name: "Kalaâ Kebira",
                },  
                {
                  name: "Sidi Bou Ali",
                },
                {
                  name: "Hergla",
                }, 
                {
                  name: "Enfidha",
                }, 
                {
                  name: "Bouficha",
                }, 
                {
                  name: "Kondar",
                }, 
                {
                  name: "Sidi El Héni",
                }, 
                {
                  name: "Msaken",
                },
                {
                  name: "Kalaâ Seghira",
                }, 
                {
                  name: "Zaouia - Ksiba - Thrayet",
                },          
              ],
            },


            {
              name: "Monastir",
              code: "",
              states: [
                {
                  name: "Ouerdanine",
                },
                {
                  name: "Sahline",
                },
                {
                  name: "Zermadine",
                },
                {
                  name: "Beni Hassen",
                },
                {
                  name: "Jammel",
                },
                {
                  name: "Bembla",
                },  
                {
                  name: "Moknine",
                },  
                {
                  name: "Bekalta",
                },
                {
                  name: "Teboulba",
                }, 
                {
                  name: "Ksar Helal",
                }, 
                {
                  name: "Ksibet El Mediouni",
                }, 
                {
                  name: "Sayada-Lamta Bou-Hjar",
                }, 
              ],
            },


            {
              name: "Mahdia",
              code: "",
              states: [
                {
                  name: "Bou Merdès",
                },
                {
                  name: "Bou Merdès",
                },
                {
                  name: "Chorbane",
                },
                {
                  name: "Hebira",
                },
                {
                  name: "Essouassi",
                },
                {
                  name: "El Djem",
                },  
                {
                  name: "Chebba",
                },  
                {
                  name: "Melloulech",
                },
                {
                  name: "Sidi Alouane",
                }, 
                {
                  name: "Ksour Essef",
                }, 
              ],
            },


            {
              name: "Sfax",
              code: "",
              states: [
                {
                  name: "Sfax Ville",
                },
                {
                  name: "Sfax Ouest",
                },
                {
                  name: "Sakiet Ezzit",
                },
                {
                  name: "Sakiet Eddaïer",
                },
                {
                  name: "Sfax Sud",
                },
                {
                  name: "Tina",
                },  
                {
                  name: "Agareb",
                },  
                {
                  name: "Djebeniana",
                },
                {
                  name: "El Amra",
                }, 
                {
                  name: "El Hencha",
                }, 
                {
                  name: "Menzel Chaker",
                }, 
                {
                  name: "Ghraiba",
                }, 
                {
                  name: "Bir ali Ben Kelifa",
                }, 
                {
                  name: "Skhira",
                }, 
                {
                  name: "Mahres",
                }, 
                {
                  name: "Kerkenah",
                }, 
              ],
            },


            {
              name: "Kairouan",
              code: "",
              states: [
                {
                  name: "Kairouan Sud",
                },
                {
                  name: "Echebika",
                },
                {
                  name: "Sbikha",
                },
                {
                  name: "EL Ouslatia",
                },
                {
                  name: "Haffouz",
                },
                {
                  name: "El Alâa",
                },  
                {
                  name: "Hajeb el Ayoun",
                },  
                {
                  name: "Nasrallah",
                },
                {
                  name: "Echrarda",
                }, 
                {
                  name: "Echrarda",
                }, 
              ],
            },


            {
              name: " Kasserine",
              code: "",
              states: [
                {
                  name: "Kasserine Sud",
                },
                {
                  name: "Ezzouhour",
                },
                {
                  name: "Hassi Ferid",
                },
                {
                  name: "Sbeitla",
                },
                {
                  name: "Sbiba",
                },
                {
                  name: "Djedeliane",
                },  
                {
                  name: "El Ayoun",
                },  
                {
                  name: "Thala",
                },
                {
                  name: "Hidra",
                }, 
                {
                  name: "Foussana",
                },
                {
                  name: "Feriana",
                },
                {
                  name: "Majel Bel Abbès",
                },
              ],
            },



            {
              name: "Sidi Bouzid",
              code: "",
              states: [
                {
                  name: "Sidi Bouzid Est",
                },
                {
                  name: "Jilma",
                },
                {
                  name: "Cebalet Ouled Asker",
                },
                {
                  name: "Bir El Hafey",
                },
                {
                  name: "Sidi Ali Ben Aoûn",
                },
                {
                  name: "Menzel Bouzaïenne",
                },  
                {
                  name: "Meknassy",
                },  
                {
                  name: "Souk Jedid",
                },
                {
                  name: "Mezzouna",
                }, 
                {
                  name: "Regueb",
                },
                {
                  name: "Ouled Haffouz",
                }, 
                 
                
              ],
            },



            {
              name: "Gabès",
              code: "",
              states: [
                {
                  name: "Gabes Ouest",
                },
                {
                  name: "Gabes Sud",
                },
                {
                  name: "Ghanouch",
                },
                {
                  name: "El Metouia",
                },
                {
                  name: "Menzel El Habib",
                },
                {
                  name: "El Hamma",
                },  
                {
                  name: "Matmata",
                },  
                {
                  name: "Nouvelle Matmata",
                },
                {
                  name: "Mareth",
                }, 
              ],
            },



            {
              name: "Medenine",
              code: "",
              states: [
                {
                  name: "Medenine Sud",
                },
                {
                  name: "Beni Khedech",
                },
                {
                  name: "Ben Guerdane",
                },
                {
                  name: "Zarzis",
                },
                {
                  name: "Djerba Houmet Souk",
                },
                {
                  name: "Djerba Midoun",
                },  
                {
                  name: "Djerba Ajim",
                },  
                {
                  name: "Sidi Makhloulf",
                },
              ],
            },



            {
              name: "Tataouine",
              code: "",
              states: [
                {
                  name: "Smâr",
                },
                {
                  name: "Bir Lahmar",
                },
                {
                  name: "Ghomrassen",
                },
                {
                  name: "Dhehiba",
                },
                {
                  name: "Remada",
                },
              ],
            },


            {
              name: "Gafsa",
              code: "",
              states: [
                {
                  name: "Sidi Aïch",
                },
                {
                  name: "El Ksar",
                },
                {
                  name: "Gafsa Sud",
                },
                {
                  name: "Oum El Araies",
                },
                {
                  name: "Redeyef",
                },
                {
                  name: "Metlaoui",
                },
                {
                  name: "Mdhila",
                },
                {
                  name: "EL Guetar",
                },
                {
                  name: "Belkhir",
                },
                {
                  name: "Sned",
                },

              ],
            },


            {
              name: "Tozeur",
              code: "",
              states: [
                {
                  name: "Degach",
                },
                {
                  name: "Tameghza",
                },
                {
                  name: "Nefta",
                },
                {
                  name: "Hazoua",
                },
              ],
            },


            {
              name: "Kébili",
              code: "",
              states: [
                {
                  name: "Kebili Sud",
                },
                {
                  name: "Kebeli Nord",
                },
                {
                  name: "Souk El Ahed",
                },
                {
                  name: "Douz Nord",
                },
                {
                  name: "Douz Sud",
                },
                {
                  name: "Faouar",
                },

              ],
            },



















          ],
            
           
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label for="delegation">Gouvernerat:</label>
              <select
                className="form-control"
                id="delegation"
                value={this.state.selectedCountry}
                onChange={this.changeCountry}
              >
                <option>--Choisir Gouvernerat--</option>
                {this.state.countries.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label for="delegation">Délégation:</label>
              <select
                className="form-control"
                id="delegation"
                value={this.state.selectedState}
                onChange={this.changeState}
              >
                <option>--Choisir Délégation--</option>
                {this.state.states.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;