class Enfant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <li className="nav-item">{this.props.Enfant.nom_enfant}</li>

        )
    }
}