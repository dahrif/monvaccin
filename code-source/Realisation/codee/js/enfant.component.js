class Enfant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <h4 className="accordion-title rounded shadow">{this.props.enfant.nom_enfant}<span> <i className="fas fa-edit"></i></span> <span> <i className="far fa-trash-alt"></i></span></h4>

        )
    }
    
}