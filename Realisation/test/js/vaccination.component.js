class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <tr>
                <td className="align-middle"><button className="btn mt-10 " data-toggle="modal" data-target="#exampleModalCenter" ><i className="text-primary nav-icon fas fa-solid fa-plus" />
                </button></td>
                <td className="align-middle">{this.props.vaccination.nom_vaccin}</td>
                <td className="align-middle">{this.props.vaccination.description}</td>
                <td className="align-middle">{this.props.vaccination.date_vaccination}</td>
                <td className="align-middle">{this.props.vaccination.poids}</td>
                <td className="align-middle"><i className="far fa-minus-square text-danger"onClick={this.props.onClickClose}/></td>
                <td className="align-middle"><i data-toggle="modal" data-target="#exampleModal1" className="text-success far fa-edit btn update-btn" onClick={this.props.onClickUpdate}></i></td>

            </tr>

        )
    }
}
