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
                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
        <a href="#" className="nav-link active">
        <img src="childs.png" witdh="20px" height="20px" />
          <p>
            Mes enfants
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            
            <a href="./index.html" className="nav-link active">
              
            
              <p><crudEnfant /></p>
            </a>
          </li>

        </ul>
      </li>


              </ul>

              <a className="btn mt-10 " data-toggle="modal" data-target="#exampleModalCenter2" name="" id="" className="btn btn-primary text-white text-center rounded-pill" href="#" role="button">Ajouter un enfant</a>


            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
          

        )
    }
}