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
        date_naissance: date_naissance.value,
        poids_naissance: poids_naissance.value,
        genre: genre.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModal1").modal('hide');
        console.log(data);
      }.bind(this)
    })
    e.preventDefault();
  }
  // Update enfant
  removeenfant(id_enfant) {
    $.ajax({
      url: "/api/api-enfant/deleteenfant.php",
      method: "POST",
      data: {
        id_enfant: id_enfant
      },
      success: function (data) {
        $(this).parent().remove();
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
        nom_enfant: cnom_enfant.value,
        date_naissance: cdate_naissance.value,
        poids_naissance: cpoids_naissance.value,
        genre: cgenre.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModal2").modal('hide');

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
          onClickdel={this.removeenfant.bind(this, enfant.id_enfant)}
          onClickUpdate={this.showUpdateModel.bind(this, enfant)}
        />

      )
    })

    return (
      <div className="container">
        <div className="text-right">
          <button className="btn btn-primary mb-2 mr-2 " data-toggle="modal" data-target="#exampleModal1" id="ajouter">Ajouter un enfant </button>
        </div>
        

             {enfantsArray}


        <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter un enfant</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="add-form" onSubmit={this.addenfant.bind(this)}>

                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="date_naissance">Nom</label>
                      <input type="text" className="form-control cdate_naissance" id="nom_enfant" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="date_naissance">Date de naissance</label>
                      <input type="date" className="form-control cdate_naissance" id="date_naissance" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="poids">Poids à la naissance</label>
                      <input type="text" className="form-control cpoids" id="poids_naissance" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select className="form-control" id="genre">
                      <option>Fille</option>
                      <option>Garçon</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" id="ajouter" className="btn btn-primary enrg-salle">Ajouter</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>



        <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                      <label htmlFor="date_naissance">Nom</label>
                      <input type="text" value={this.state.enfant.nom_enfant} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, nom_enfant: e.target.value } })}  className="form-control cdate_naissance" id="cnom_enfant" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Date enfant</label>
                      <input type="date" value={this.state.enfant.date_naissance} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, date_naissance: e.target.value } })} className="form-control date_enfant" id="cdate_naissance" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="input2">Poids</label>
                      <input type="text" value={this.state.enfant.poids_naissance} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, poids_naissance: e.target.value } })} className="form-control cpoids" id="cpoids_naissance" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select value={this.state.enfant.genre} onChange={(e) => this.setState({ enfant: { ...this.state.enfant, genre: e.target.value } })} className="form-control" id="cgenre">
                      <option>Fille</option>
                      <option>Garçon</option>
                    </select>
                  </div>

                  <input type="hidden" className="id_enfant" />
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Valider</button>

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