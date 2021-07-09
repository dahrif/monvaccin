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

        $.getJSON("api/getProduct.php",
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
            url: "/api/addProduct.php",
            method: "POST",
            data: {
                Firstname : Firstname.value,
                Lastname : Lastname.value,
                Matricule : Matricule.value,
                Email : Email.value,
            },
            success: function (data) {
                this.chargementDonnees()
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove product
    removeproduct(i) {
        $.ajax({
            url: "/api/deleteProduct.php",
            method: "POST",
            data: {
                id: i
            },
            success: function (data) {
                //   $(this).parent().remove();
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
                />
            )
        })

        return (
            <div className="container">

        <table className="table">
          <thead className="thead-dark">
            <tr>
            
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Matricule</th>
              <th scope="col">Email</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
{productsArray}
          </tbody>
        </table>

                <form
                    id="form-add"
                    className="form-horizontal"
                    onSubmit={this.addproduct.bind(this)}>


                    <div className="form-row">
                        <div className="col-12">
                            <label for="inputName4">First Name</label>
                            <input type="text" className="form-control Firstname" id="Firstname" placeholder="First name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12">
                            <label for="inputLast4">Last Name</label>
                            <input type="text" className="form-control Lastname" id="Lastname" placeholder="Last name"/>
              </div>
                        </div>

                        <div className="form-row">
              <div className="form-group col-12">
                <label for="inputMatricule4">Matricule</label>
                <input type="number" className="form-control Matricule" id="Matricule" placeholder="Matricule"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control Email" id="Email" placeholder="Email"/>
              </div>
            </div>









                        <div className="input-group">

                            <div className="input-group-btn">
                                <button type="submit" className="btn btn-default">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="38" fill="currentColor" className="bi bi-plus-square text-right" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
            </form>
  
          </div>
                )
    }
  }