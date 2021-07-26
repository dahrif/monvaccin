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
          {/* <CrudEnfant /> */}





          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper mt-5">
            {/* Content Header (Page header) */}


            <section className="content">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Mes vaccins</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
              <div className="card-body">
                
                <Crudvaccination />
              </div>
              </div>
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer text-center">
            <strong>Copyright © 2021 <a href="#">monVaccin</a>.</strong> Tous droits réservés.
          </footer>

        </div>






      </div>

    )
  }
}