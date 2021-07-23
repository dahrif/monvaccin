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
              <div className="card-body">
                
                <Crudenfant />
                
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