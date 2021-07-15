class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <tr>
                <td>{this.props.vaccination.nom_vaccin}</td>
                <td><input type="date" class="form-control" id="date_vaccination" /></td>
                <td>{this.props.vaccination.poids}</td>
                <td><i className="close far fa-trash-alt" onClick={this.props.onClickClose}></i></td>
                <td><i data-toggle="modal" data-target="#exampleModal1" className="far fa-edit btn update-btn" onClick={this.props.onClickUpdate}></i></td>

            </tr>

        )
    }
}
