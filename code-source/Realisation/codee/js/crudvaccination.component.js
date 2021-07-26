// Application
class Crudvaccination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vaccinationsArray: [],
      vaccination: {},
    };
    this.showUpdateModel = this.showUpdateModel.bind(this);
  }
  componentDidMount() {
    this.chargementDonnees();
  }


  chargementDonnees() {

    var vaccinationsArray = null;

    // affichage de données par Ajax

    $.getJSON("/api/api-vaccination/getvaccination.php",
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
      url: "/api/api-vaccination/addvaccination.php",
      method: "POST",
      data: {
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

  // delete vaccination
  removevaccination(id_vaccination) {
    $.ajax({
      url: "/api/api-vaccination/deletevaccination.php",
      method: "POST",
      data: {
        id_vaccination: id_vaccination,
        date_vaccination: null,
        poids: null,
      },
      success: function (data) {
        //   $(this).parent().remove();
        this.chargementDonnees()
      }.bind(this)
    })

  }

  showUpdateModel(vaccination) {
    this.setState({ vaccination: vaccination })
  }

  updatevaccination() {
    $.ajax({
      url: "/api/api-vaccination/updatevaccination.php",
      method: "POST",
      data: {
        id_vaccination: this.state.vaccination.id_vaccination,
        date_vaccination: cdate_vaccination.value,
        poids: cpoids.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModal1").modal('hide');

      }.bind(this)
    })
    e.preventDefault();
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
          onClickUpdate={this.showUpdateModel.bind(this, vaccination)}

        />
      )
    })

    return (
      <div className="container">

        <div className="card">

          <div className="card-body table-responsive p-0">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="align-middle text-center">Nom enfant</th>
                  <th scope="col" className="align-middle text-center">Nom Vaccin</th>
                  <th scope="col" className="align-middle text-center">Description</th>
                  <th scope="col" className="align-middle text-center">Date de vaccination</th>
                  <th scope="col" className="align-middle text-center">Poids</th>
                  <th scope="col" className="align-middle text-center"></th>
                  <th scope="col" className="align-middle text-center"></th>
                </tr>
              </thead>
              <tbody>
                {vaccinationsArray}
              </tbody>
            </table>

          </div>

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
                      <label htmlFor="date_vaccination">date vaccination</label>
                      <input type="date" className="form-control cdate_vaccination" id="date_vaccination" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="poids">poids</label>
                      <input type="text" className="form-control cpoids" id="poids" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" id="ajouter" className="btn btn-primary enrg-salle">Ajouter</button>
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
                <h5 className="modal-title" id="exampleModalCenterTitle">Mon vaccin</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="" onSubmit={this.updatevaccination.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Date vaccination</label>
                      <input type="date" value={this.state.vaccination.date_vaccination} onChange={(e) => this.setState({ vaccination: { ...this.state.vaccination, date_vaccination: e.target.value } })} className="form-control date_vaccination" id="cdate_vaccination" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Poids</label>
                      <input type="text" value={this.state.vaccination.poids} onChange={(e) => this.setState({ vaccination: { ...this.state.vaccination, poids: e.target.value } })} className="form-control cpoids" id="cpoids" />
                    </div>
                  </div>

                  <input type="hidden" className="id_vaccination" />
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary save-student">Valider</button>

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

