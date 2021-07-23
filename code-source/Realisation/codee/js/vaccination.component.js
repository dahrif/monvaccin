class Vaccination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let add = ''
        add +=  this.props.vaccination.date_vaccination ? 'text-success fas fa-edit ' : ' text-primary fas fa-solid fa-plus';

        let done = ''
        done += this.props.vaccination.date_vaccination && this.props.vaccination.poids? 'fait' :'init';

        

        return (
            <tr className={done}>
                
                <td className="align-middle text-center"><i data-toggle="modal" data-target="#exampleModal1" className={add} onClick={this.props.onClickUpdate}></i></td>
                <td className="align-middle text-center">{this.props.vaccination.nom_vaccin}</td>
                <td className="align-middle text-center">{this.props.vaccination.description}</td>
                <td className="align-middle text-center">{this.props.vaccination.date_vaccination}</td>
                <td className="align-middle text-center">{this.props.vaccination.poids}</td>
                <td className="align-middle text-center"><i className="far fa-minus-square text-danger"onClick={this.props.onClickClose}/></td>
                

            </tr>

        )
    }
}
