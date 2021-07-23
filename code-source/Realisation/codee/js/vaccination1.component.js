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



            <div>
                <h4>{this.props.enfant.nom_enfant}<span> <i className="fas fa-edit"></i></span> <span> <i className="far fa-trash-alt"></i></span></h4>
                <h2 className="lead mt-2"><b>{this.props.enfant.date_naissance}</b></h2>
                <h2 className="lead mt-2"><b>{this.props.enfant.poids_naissance}</b></h2>
            </div>


        )
    }
}