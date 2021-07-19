class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <tr>
                <td class="align-middle"><button className="btn mt-10 " data-toggle="modal" data-target="#exampleModalCenter" id="ajouter"><i className="text-primary nav-icon fas fa-solid fa-plus" />
                </button></td>
                <td class="align-middle">{this.props.vaccination.nom_vaccin}</td>
                <td class="align-middle">{this.props.vaccination.description}</td>
                <td class="align-middle">{this.props.vaccination.date_vaccination}</td>
                <td class="align-middle">{this.props.vaccination.poids}</td>
                <td class="align-middle"><i class="far fa-minus-square text-danger"onClick={this.props.onClickClose}/></td>
                <td class="align-middle"><i data-toggle="modal" data-target="#exampleModal1" className="text-success far fa-edit btn update-btn" onClick={this.props.onClickUpdate}></i></td>

            </tr>

        )
    }
}
