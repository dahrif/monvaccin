class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <aside className="main-sidebar sidebar-light-primary elevation-4">

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="https://thispersondoesnotexist.com/image" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Dahri Fatima</a>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item m-1">
                <a href="mes-enfants.html" className="nav-link">
                  <i className="fas fa-baby"/>
                  <p>Mes enfants</p>
                </a>

              </li>

              <li className="nav-item m-1">
                <a href="vaccin.html" className="nav-link">
                  <i className="fas fa-stethoscope"/>
                  <p>Mes vaccins</p>
                </a>
              </li>
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              


            </ul>


              <div className="text-center mt-5">
              <a className="btn btn-danger text-white rounded-pill " href="index.html" role="button">DECONNEXION</a>
              </div>
            


          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>


    )
  }
}