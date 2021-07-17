// Application
class Crudvaccination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vaccinationsArray: [],
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }


  chargementDonnees() {

    var vaccinationsArray = null;

    // affichage de données par Ajax

    $.getJSON("../api/api-vaccination/getvaccination.php",
      function (data) {
        this.setState({ vaccinationsArray: data });
      }.bind(this))
      
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });
  }


  //add vaccination
  addvaccination(e) {
    $.ajax({
      url: "api/api-vaccination/addvaccination.php",
      method: "POST",
      data: {
        nom_vaccin: nom_vaccin.value,
        date_vaccination: date_vaccination.value,
        poids: poids.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModalCenter").modal('hide');
        console.log(data);
      }.bind(this)
    })
    e.preventDefault();
  }
  // Update vaccination
  removevaccination(id_vaccination) {
    $.ajax({
      url: "/api/api-vaccination/deletevaccination.php",
      method: "POST",
      data: {
        id_vaccination: id_vaccination
      },
      success: function (data) {
        //   $(this).parent().remove();
        this.chargementDonnees()
      }.bind(this)
    })

  }
  // Remove vaccination
  updatevaccination(id_vaccination) {
    $.ajax({
      url: "api/update.php",
      method: "POST",
      data: {
        id_vaccination: id_vaccination,
        nom_vaccin: cnom_vaccin.value,
        date_vaccination: cdate_vaccination.value,
        poids: cpoids.value,
        formateur: cFormateur.value
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
    let vaccinationsArray = this.state.vaccinationsArray.map((vaccination) => {
      return (
        <Vaccination
          key={vaccination.id_vaccination}
          vaccination={vaccination}
          onClickClose={this.removevaccination.bind(this, vaccination.id_vaccination)}
          onClickUpdate={this.updatevaccination.bind(this, vaccination.id)}

        />
      )
    })

    return (
      <div className="container">

        <div className="card">
        <div className="card-header">
          <h3 className="card-title">Mes vaccins</h3>
        </div>
        {/* /.card-header */}
  
          <table className="table table-sm">
            <thead>
              <tr>
                <th></th>
                <th style={{width: '250px'}}>Nom Vaccin</th>
                <th>Description</th>
                <th>Date de vaccination</th>
                <th>Poids</th>
              </tr>
            </thead>
            <tbody>
            {vaccinationsArray}
            </tbody>
            </table>
         
            </div>




        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter  Salle</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="add-form" onSubmit={this.addvaccination.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <input type="hidden" className="form-control cnom_vaccin" id="id_vaccin" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="date_vaccination">date vaccination</label>
                      <input type="date" name defaultValue className="form-control cdate_vaccination" id="date_vaccination" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="poids">poids</label>
                      <input type="text" name defaultValue className="form-control cpoids" id="poids" />
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



        <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content edit-form">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Modifier les informations</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="" onSubmit={this.updatevaccination.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input1">nom_vaccin</label>
                      <input type="number" className="form-control cnom_vaccin" id="cnom_vaccin" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">date_vaccination</label>
                      <input type="text" name defaultValue className="form-control cdate_vaccination" id="cdate_vaccination" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Poids</label>
                      <input type="text" name defaultValue className="form-control cpoids" id="cpoids" />
                    </div>
                  </div>

                  <input type="hidden" name defaultValue className="sid" />
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary save-student">Enregistrer les modification</button>
                    
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