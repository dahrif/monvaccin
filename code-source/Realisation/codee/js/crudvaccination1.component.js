// Application
class Crudenfant extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enfantsArray: [],
      enfant: {},
    };
    this.showUpdateModel = this.showUpdateModel.bind(this);
  }
  componentDidMount() {
    this.chargementDonnees();
  }


  chargementDonnees() {

    var enfantsArray = null;

    // affichage de données par Ajax

    $.getJSON("/api/api-enfant/getenfant.php",
      function (data) {
        this.setState({ enfantsArray: data });
      }.bind(this))

      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });
  }


  //add enfant
  addenfant(e) {
    $.ajax({
      url: "/api/api-enfant/addenfant.php",
      method: "POST",
      data: {
        nom_enfant: nom_enfant.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModalCenter").modal('hide');
        console.log(data);
      }.bind(this)
    })
    e.preventDefault();
  }
  // Update enfant
  removeenfant(date_enfant) {
    $.ajax({
      url: "/api/api-enfant/deleteenfant.php",
      method: "POST",
      data: {
        date_enfant: date_enfant,
      },
      success: function (data) {
        //   $(this).parent().remove();
        this.chargementDonnees()
      }.bind(this)
    })

  }

  showUpdateModel(enfant) {
    this.setState({ enfant: enfant })
  }

  updateenfant() {
    $.ajax({
      url: "/api/api-enfant/updateenfant.php",
      method: "POST",
      data: {
        id_enfant: this.state.enfant.id_enfant,
        date_enfant: cdate_enfant.value,
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
    let enfantsArray = this.state.enfantsArray.map((enfant) => {
      return (
        <Enfant

          key={enfant.id_enfant}
          enfant={enfant}

        />

      )
    })

    return (
      <div className="container">



        <div className="container">
          <div id="accordion" className="accordion-container">
            <div className="accordion-title rounded shadow"> {enfantsArray} </div>




            <div className="accordion-content">
              <div className="card col-md-12 mx-auto">
                {enfantsArray}

                <div className="row">
                  <div className="col-md-4 my-3 mx-auto">
                    <img src="https://image.flaticon.com/icons/png/512/405/405129.png" width="120px" alt="user-avatar" className="img-circle img-fluid" />
                  </div>
                  <div className=" col-7 mt-2 ml-3">

                  </div>
                  <div className="col-12 text-left">



                  </div>

                </div>



              </div>


              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Mes vaccins</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{ width: '250px' }}>Nom Vaccin</th>
                        <th>Description</th>
                        <th>Date de enfant</th>
                        <th>Poids</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </table>

                </div>
              </div>

            </div>
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
                <form className="add-form" onSubmit={this.addenfant.bind(this)}>

                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="date_enfant">date enfant</label>
                      <input type="date" className="form-control cdate_enfant" id="date_enfant" />
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
                <form className="" onSubmit={this.updateenfant.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Date enfant</label>
                      <input type="date" value={this.state.enfant.date_enfant} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, date_enfant: e.target.value } })} className="form-control date_enfant" id="cdate_enfant" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Poids</label>
                      <input type="text" value={this.state.enfant.poids} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, poids: e.target.value } })} className="form-control cpoids" id="cpoids" />
                    </div>
                  </div>

                  <input type="hidden" className="sid" />
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

jQuery(function ($) {

  $(".accordion-content").css("display", "none");


  $(".accordion-title").click(function () {

    $(".accordion-title").not(this).removeClass("open");

    $(".accordion-title").not(this).next().slideUp(300);

    $(this).toggleClass("open");

    $(this).next().slideToggle(300);
  });
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function (response) {
    return true;
  }).catch(function (e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}