class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let class_name = ''
        class_name += this.props.vaccination.date_vaccination ? 'text-success fas fa-edit' : ' text-primary fas fa-solid fa-plus';

        return (
            <tr>
                
                <td className="align-middle"><i data-toggle="modal" data-target="#exampleModal1" className={class_name} onClick={this.props.onClickUpdate}></i></td>
                <td className="align-middle">{this.props.vaccination.nom_vaccin}</td>
                <td className="align-middle">{this.props.vaccination.description}</td>
                <td className="align-middle">{this.props.vaccination.date_vaccination}</td>
                <td className="align-middle">{this.props.vaccination.poids}</td>
                <td className="align-middle"><i className="far fa-minus-square text-danger"onClick={this.props.onClickClose}/></td>
                

            </tr>

        )
    }
}
