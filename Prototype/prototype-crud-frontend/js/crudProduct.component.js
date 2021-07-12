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
                numero : numero.value,
                capacite : capacite.value,
                nb_tableaux : nb_tableaux.value,
                formateur : formateur.value
            },
            success: function (data) {
                this.chargementDonnees()
                console.log(data);
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove product
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
        updateproduct(ID){
          $.ajax({
            url:"api/update.php",
            method:"POST",
            data:{
              id : sID,
              numero : Numero,
              capacite : Capacite,
              nb_tableaux : Nb_tableaux,
              formateur : Formateur
            },           
             success: function (data) {
              this.chargementDonnees()
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

        <table className="table">
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

      {/* <div className="modal-footer">
        <button type="submit" className="btn btn-primary enrg-salle">Ajouter</button>
      </div> */}
            </form> 
  
          </div>
        )
    }
  }