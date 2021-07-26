class Enfant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let class_name = ''
        class_name += this.props.enfant.nom_enfant ? 'text-success fas fa-edit' : ' text-primary fas fa-solid fa-plus';

        let done = ''
        done += this.props.enfant.poids ? 'fait' : 'pas-fait';

        let img = ""
        img += this.props.enfant.genre == "Fille" ? "https://image.flaticon.com/icons/png/512/405/405129.png" : "https://image.flaticon.com/icons/png/512/405/405108.png"

        return (



                <div className="card col-lg-8 col-md-12 mx-auto">


                    <div className="row">
                        <div className="col-4 my-3 mx-auto">
                            <img src={img} width="120px" alt="user-avatar" className="img-circle img-fluid" />
                        </div>
                        <div className=" col-7 mt-2 ml-3">
                            <h2 className="lead mt-2"><b>Nom: {this.props.enfant.nom_enfant}</b></h2>
                            <h2 className="lead mt-2"><b>Date de naissance : {this.props.enfant.date_naissance}</b></h2>
                            <h2 className="lead mt-2"><b>Poids à la naissance : {this.props.enfant.poids_naissance}</b></h2>
                        </div>
                        <div className="col-12 text-right">

                            <i className="fas fa-trash" onClick={this.props.onClickdel} ></i> <i className="fas fa-edit" data-toggle="modal" data-target="#exampleModal2" onClick={this.props.onClickUpdate}></i>

                        </div>

                    </div>



                </div>  
         


        )
    }
}