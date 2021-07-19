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

            {/* <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> */}

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Accueil
                  </p>
                </a>
              </li>
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <img src="childss.png" witdh="20px" height="20px" />
                  <p>
                    Mes enfants
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">

                      <crudEnfant />

                    </a>
                  </li>
                </ul>
              </li>


            </ul>
            <div className="text-center">
              <button data-toggle="modal" data-target="#exampleModalCenter2" name="" id="" className="btn btn-primary text-white rounded-pill text-center" href="#" role="button">Ajouter un enfant</button>
              </div>

              <div className="text-center align-self-end">
              <button name="" id="" className="btn btn-danger text-white rounded-pill " href="/login/logout.php" role="button">DECONNEXION</button>
              </div>
            


          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>


    )
  }
}