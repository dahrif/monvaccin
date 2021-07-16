class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <tr className="py-auto">
                <td><button className="btn mt-10 " data-toggle="modal" data-target="#exampleModalCenter" id="ajouter"><i className="text-primary nav-icon fas fa-solid fa-plus" />
                </button></td>
                <td>{this.props.vaccination.nom_vaccin}</td>
                <td>{this.props.vaccination.description}</td>
                <td>{this.props.vaccination.date_vaccination}</td>
                <td>{this.props.vaccination.poids}</td>
                <td><i class="far fa-minus-square text-danger"onClick={this.props.onClickClose}/></td>
                <td><i data-toggle="modal" data-target="#exampleModal1" className="text-success far fa-edit btn update-btn" onClick={this.props.onClickUpdate}></i></td>

            </tr>

        )
    }
}
