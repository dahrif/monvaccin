class Enfant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <tr>
                <li>{this.props.Enfant.nom_enfant}</li>
            </tr>

        )
    }
}