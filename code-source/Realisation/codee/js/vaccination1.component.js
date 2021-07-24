class Enfant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let class_name = ''
        class_name += this.props.enfant.nom_enfant ? 'text-success fas fa-edit' : ' text-primary fas fa-solid fa-plus';

        let done = ''
        done = + this.props.enfant.poids ? 'fait' : 'pas-fait';

        return (



            <div id="accordion" className="accordion-container">
                <div className="accordion-title rounded shadow"> {this.props.enfant.nom_enfant}<span> <i className="fas fa-edit"></i></span> <span> <i className="far fa-trash-alt"></i></span></div>
                <div className="card col-md-12 mx-auto">



                </div>

                <div className="card col-md-12 mx-auto">


                    <div className="row">
                        <div className="col-md-4 my-3 mx-auto">
                            <img src="https://image.flaticon.com/icons/png/512/405/405129.png" width="120px" alt="user-avatar" className="img-circle img-fluid" />
                        </div>
                        <div className=" col-7 mt-2 ml-3">
                            <h2 className="lead mt-2"><b>Nom: {this.props.enfant.nom_enfant}</b></h2>
                            <h2 className="lead mt-2"><b>Date de naissance : {this.props.enfant.date_naissance}</b></h2>
                            <h2 className="lead mt-2"><b>Poids à la naissance : {this.props.enfant.poids_naissance}</b></h2>
                        </div>
                        <div className="col-12 text-left">



                        </div>

                    </div>



                </div>                <Crudvaccination />
            </div>


        )
    }
}