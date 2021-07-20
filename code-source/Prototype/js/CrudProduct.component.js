// Application
class CrudProduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productsArray: []
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }
  chargementDonnees() {

    var productsArray = null;

    // affichage de données par Ajax

    $.getJSON("../api/getProduct.php",
      function (data) {
        this.setState({ productsArray: data });
      }.bind(this))
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });
  }
  //add product
  addproduct(e) {
    $.ajax({
      url: "api/add.php",
      method: "POST",
      data: {
        numero: numero.value,
        capacite: capacite.value,
        nb_tableaux: nb_tableaux.value,
        formateur: formateur.value
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModalCenter").modal('hide');
        console.log(data);
      }.bind(this)
    })
    e.preventDefault();
  }
  //Update product
  removeproduct(ID) {
    $.ajax({
      url: "/api/delete.php",
      method: "POST",
      data: {
        id: ID
      },
      success: function (data) {
        //   $(this).parent().remove();
        this.chargementDonnees()
      }.bind(this)
    })

  }
  // Remove product
  updateproduct(ID) {
    $.ajax({
      url: "api/update.php",
      method: "POST",
      data: {
        id: ID,
        numero: cNumero.value,
        capacite: cCapacite.value,
        nb_tableaux: cNb_tableaux.value,
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
    let productsArray = this.state.productsArray.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onClickClose={this.removeproduct.bind(this, product.id)}
          onClickUpdate={this.updateproduct.bind(this, product.id)}

        />
      )
    })

    return (
      <div className="container">
        <div className="col-sm-6">
          <span className="btn mt-10 downArrow" data-toggle="modal" data-target="#exampleModalCenter" id="ajouter"><i class="fa-solid fa-plus" /></span>
        </div>

        <table className="table col-6">
          <thead className="thead-dark">
            <tr>

              <th scope="col">numero</th>
              <th scope="col">capacite</th>
              <th scope="col">nb_tablaux</th>
              <th scope="col">formateur</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            {productsArray}
          </tbody>
        </table>




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
                <form className="add-form" onSubmit={this.addproduct.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input1">Numero</label>
                      <input type="number" className="form-control cnumero" id="numero" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Capacité</label>
                      <input type="text" name defaultValue className="form-control ccapacite" id="capacite" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="input3">Nombre de tableaux</label>
                      <input type="text" name defaultValue className="form-control cnb_tableaux" id="nb_tableaux" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="input4">Formateur</label>
                      <input type="text" name defaultValue className="form-control cformateur" id="formateur" />
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
                <form className="" onSubmit={this.updateproduct.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input1">Numero</label>
                      <input type="number" className="form-control cnumero" id="cNumero" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Capacité</label>
                      <input type="text" name className="form-control ccapacite" id="cCapacite" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="input3">Nombre de tableaux</label>
                      <input type="text" name className="form-control cnb_tableaux" id="cNb_tableaux" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="input4">Formateur</label>
                      <input type="text" name className="form-control cformateur" id="cFormateur" />
                    </div>
                  </div>
                  <input type="hidden" name className="sid" />
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary save-student">Enregistrer les modification</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>












        {/* 
                <form id="form-add" className="form-horizontal" onSubmit={this.addproduct.bind(this)}>
                <div className="form-row">
        <div className="col-12">
          <label htmlFor="input1">Numero</label>
          <input type="number" className="form-control cnumero" id="numero" />
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <label htmlFor="input2">Capacité</label>
          <input type="text" className="form-control ccapacite" id="capacite" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-12">
          <label htmlFor="input3">Nombre de tableaux</label>
          <input type="text" className="form-control cnb_tableaux" id="nb_tableaux" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-12">
          <label htmlFor="input4">Formateur</label>
          <input type="text" className="form-control cformateur" id="formateur" />
        </div>
        <button type="submit" className="btn btn-primary enrg-salle">Ajouter</button>
      </div>
     
            </form>  */}

      </div>
    )
  }
}