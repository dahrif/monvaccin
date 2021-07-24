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
                <th className="align-middle text-center"></th>
                <th className="align-middle text-center">Nom Vaccin</th>
                <th className="align-middle text-center">Description</th>
                <th className="align-middle text-center">Date de vaccination</th>
                <th className="align-middle text-center">Poids</th>
                <th className="align-middle text-center"></th>
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

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
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