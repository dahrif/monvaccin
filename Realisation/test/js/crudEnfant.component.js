// Application
class CrudEnfant extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        EnfantsArray: []
      };
    }
    componentDidMount() {
      this.chargementDonnees();
    }
    chargementDonnees() {
  
      var EnfantsArray = null;
  
      // affichage de données par Ajax
  
      $.getJSON("../api/api-enfant/getenfant.php",
        function (data) {
          this.setState({ EnfantsArray: data });
        }.bind(this))
        
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        });
    }
  
  
    //add Enfant
    addEnfant(e) {
      $.ajax({
        url: "api/api-enfant/addenfant.php",
        method: "POST",
        data: {
          nom_vaccin: nom_enfant.value,
          date_naissance: date_naissance.value,
          poids_naissance: poids_naissance.value,
        },
        success: function (data) {
          this.chargementDonnees()
          $("#exampleModalCenter").modal('hide');
        }.bind(this)
      })
      e.preventDefault();
    }
    
     // Remove Enfant
    removeEnfant(id_enfant) {
      $.ajax({
        url: "/api/api-enfant/deleteenfant.php",
        method: "POST",
        data: {
          id_enfant: id_enfant
        },
        success: function (data) {
          this.chargementDonnees()
        }.bind(this)
      })
  
    }
   // Update Enfant
    updateEnfant(ID) {
      $.ajax({
        url: "api/update.php",
        method: "POST",
        data: {
          id_enfant: ID,
          nom_enfant: cnom_enfant.value,
          date_Enfant: cdate_Enfant.value,
          poids: cpoids.value,
        },
        success: function (data) {
          this.chargementDonnees()
          $("#exampleModal1").modal('hide');
  
        }.bind(this)
      })
    }
  
  
  
    onChangeInput(e) {
      // this.setState({value: e.target.value})
    }
  
    render() {
      let EnfantsArray = this.state.EnfantsArray.map((Enfant) => {
        return (
          <Enfant
            key={Enfant.id_Enfant}
            Enfant={Enfant}
            onClickClose={this.removeEnfant.bind(this, Enfant.id_Enfant)}
            onClickUpdate={this.updateEnfant.bind(this, Enfant.id)}
  
          />
        )
      })
  
      return (
        <div className="container">
          <div className="col-sm-6">

          </div>
  

  
  
  
  
          <div className="modal fade" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter un enfant</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="add-form" onSubmit={this.addEnfant.bind(this)}>
                    <div className="form-row">
                      <div className="col-12">
                        <label htmlFor="nom_enfant">Nom enfant</label>
                        <input type="text" className="form-control cnom_enfant" id="nom_enfant" placeholder="Entez le nom de votre enfant" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-12">
                        <label htmlFor="date_naissance">date naissance</label>
                        <input type="date" name defaultValue className="form-control cdate_naissance" id="date_naissance" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-12">
                        <label htmlFor="poids">poids à la naissance</label>
                        <input type="text" name defaultValue className="form-control cpoids" id="poids_naissance" placeholder="Entrez le poids "/>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary enrg-salle">Ajouter</button>
                    </div>
                  </form>
                </div>
  
              </div>
            </div>
          </div>
  
  

  
  
      
  
        </div>
      )
    }
  }