class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let add = ''
        add +=  this.props.vaccination.date_vaccination ? 'text-success fas fa-edit ' : ' text-primary fas fa-solid fa-plus';

        let done = ''
        done += this.props.vaccination.date_vaccination && this.props.vaccination.poids ? 'fait' :'init';

        let del = ''
        del += this.props.vaccination.date_vaccination || this.props.vaccination.poids ? "far fa-minus-square text-danger" : '';


        return (
 
            <tr className={done}>
                <td scope="row" className="align-middle text-center">{this.props.vaccination.nom_enfant}</td>
                <td className="align-middle text-center">{this.props.vaccination.nom_vaccin}</td>
                <td className="align-middle text-center">{this.props.vaccination.description}</td>
                <td className="align-middle text-center">{this.props.vaccination.date_vaccination}</td>
                <td className="align-middle text-center">{this.props.vaccination.poids}</td>
                <td className="align-middle text-center"><i data-toggle="modal" data-target="#exampleModal1" className={add} onClick={this.props.onClickUpdate}></i></td>
                <td className="align-middle text-center"><i className={del} onClick={this.props.onClickClose}/></td>
            </tr>

        )
    }
}
