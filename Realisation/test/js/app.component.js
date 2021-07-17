class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        {/* Site wrapper */}
        <div className="wrapper">
          <Menu />
          <SideBar />




          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper mt-5">
            {/* Content Header (Page header) */}

            <section className="content">
              {/* Default box */}
              <div className="card col-8 mx-auto">


                <div className="row">
                  <div className="col-4 my-4 text-center">
                    <img src="https://image.flaticon.com/icons/png/512/405/405129.png" width="120px" alt="user-avatar" className="img-circle img-fluid" />
                  </div>
                  <div className="col-7 ml-3 text-left">
                    <h2 className="lead mt-4"><b>Nom : Soujoud</b></h2>
                    <h2 className="lead mt-4"><b>Date de naissance : 13/01/2020</b></h2>
                    <h2 className="lead mt-4"><b>Poids à la naissance : 2.8 kg</b></h2>
                  </div>
                  <div className="col-12 text-left">

                    <div class="text-right">
                      <a href="#" class="btn btn-sm">
                        <i class="fas fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-sm">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </div>

                  </div>

                </div>



              </div>
            </section>
            <section className="content">
              <div className="card-body">
                <Crudvaccination />
              </div>
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer">
            <strong>Copyright © 2021 <a href="#">monVaccin</a>.</strong> Tous droits réservés.
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div>






      </div>

    )
  }
}