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

   

              <li className="nav-item">
                <a href="acceuil.html" className="nav-link">
                  <i className="fas fa-home"/>
                  <p> Accueil</p>
                </a>
              </li>
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="mes-enfants.html" className="nav-link">
                  <i className="fas fa-baby"/>
                  <p> Mes enfants</p>
                </a>
                <ul className="nav nav-treeview">
                  {/* <crudEnfant /> */}
               
                </ul>
              </li>


            </ul>


              <div className="text-center align-self-end">
              <button name="" id="" className="btn btn-danger text-white rounded-pill " href="../login/logout.php" role="button">DECONNEXION</button>
              </div>
            


          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>


    )
  }
}