import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countries: [],states: [],delegation: '',gouvernerat: ''};
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
    
    // this.handleChangeFor = this.handleChangeFor.bind(this);
  }
  

  // handleChangeFor = (propertyName) => (event) => {
  //   const { countries } = this.state;
  //   // this.props.delegation;
   
    
  //   // console.log('this.props.delegation',this.props.gouvernerat)
  //   const memberDetails = {
  //     ...countries,
      
  //     [propertyName]: event.target.value,
      
  //   };
  //   this.setState({ countries: memberDetails });
  // };

  
  // countries heya gouvernorat o states houma les déligation

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "Tunis",
          code: "11",
          states: [
            {name: "Carthage", code: '12'}, {name: "La Medina", code: '13'},{name: "Bab El Bhar"},{name: "Bab Souika"},{name: "El Omrane"},{name: "El Omrane Supérieur"},{name: "Ettahrir"},{name: "El Menzah",},{name: "Cité El Khadhra"},{name: "Le Bardo"},{name: "Sijoumi"},{name: "Ezzouhour"},{name: "El Hrairia"},{name: "Sidi Hassine"},{name: "El Ouardia",},{name: "El Kabaria",},{name: "Sidi El Béchir"},{name: "Djebel Djelloud"},{name: "La Goulette"},{name: "Le Kram"},{name: "La Marsa"},
          ],
        },
        {
          name: "Ariana",
          code: "12",
          states: [
            {name: "Raoued"},{name: "Kalaât El Andalous"},{name: "Sidi Thabet"},{name: "Cité Ettadhamen"},{name: "El Mnihla"},
          ],
        },

        {
          name: "Ben Arous",
          code: "13",
          states: [
            {name: "La Nouvelle Medina",},{name: "El Mourouj",},{
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
          code: "14",
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
          code: "15",
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
          code: "16",
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
          name: "Bèja",
          code: "21",
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
          name: "Jendouba",
          code: "22",
          states: [
            {
              name: "Jendouba Nord",
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
              name: "Fernanar",
            },
            {
              name: "Ghardimaou",
            },  
            {
              name: "Oued Meliz",
            },  
            {
              name: "Balta ",
            },
            {
              name: "Bou Aouane ",
            },
          ],
        },

        {
          name: "El Kef",
          code: "23",
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
          name: "Siliana",
          code: "24",
          states: [
            {
              name: "Siliana Sud",
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
          name: "Sousse",
          code: "31",
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
              name: "Sousse Jawhara",
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
              name: "M’saken",
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
          code: "32",
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
          code: "33",
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
          code: "34",
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
          code: "41",
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
          name: "Kasserine",
          code: "42",
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
              name: "Majel Bel Abbès",
            }, 
              
            
          ],
        },

        {
          name: "Sidi Bouzid",
          code: "43",
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
          code: "51",
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
          code: "52",
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
          code: "53",
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
          code: "61",
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
          code: "62",
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
          code: "63",
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
    this.setState({ gouvernerat: {
      name: event.target.value, 
      code: this.state.countries.filter((cntry) => {return cntry.name === event.target.value})[0].code
    } });
    this.setState({states: this.state.countries.find((cntry) => cntry.name === event.target.value).states});

  }

  changeState(event) {
    this.setState({ delegation:{
      name: event.target.value, 
      code: this.state.states.filter((state) => {return state.name === event.target.value})[0].code
    } }, () => {
      this.props.parentCallback(this.state);
    });
    // const stats = this.state.countries.find(
    //   (cntry) => cntry.name === this.state.gouvernerat
    // ).states;
    // this.setState({
    //   cities: stats.find((stat) => stat.name === event.target.value).cities,
    // });
    // console.log(this.state)
    
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="gouvernerat">Gouvernerat:</label>
              <select
                className="form-control"
                id="gouvernerat"
               
                onChange={this.changeCountry}
              >
                <option  >--Choisir Gouvernerat--</option>

                {
                  this.state.countries.map((e, key) => {
                    return <option key={key} value={e.name}>{e.name}</option>;
                  })
                }
              </select>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="delegation">Délégation:</label>
              <select
                className="form-control"
                id="delegation"
                
                onChange={this.changeState}
              >
                <option>--Choisir Délégation--</option>
                {this.state.states.map((e, key) => {
                  return <option key={key} value={e.name}>{e.name}</option>;
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