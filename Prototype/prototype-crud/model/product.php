<?php
class Product implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id' => $this->_id,
             'numero' => $this->_numero,
             'capacite' => $this->_capacite,
             'nb_tableaux' => $this->_nb_tableaux,
             'formateur' => $this->_formateur,
        );
    }
	private $_id;
	private $_numero;
	private $_capacite;
	private $_nb_tableaux;
	private $_formateur;


	public function __construct() {
	}

		public function getId() { return $this->_id; }

		public function getnumero() { return $this->_numero; }

		public function getcapacite() { return $this->_capacite; }

		public function getnb_tableaux() { return $this->_nb_tableaux; }

		public function getformateur() { return $this->_formateur; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setnumero($numero){
			$this->_numero = $numero;
		}

		public function setcapacite($capacite){
			$this->_capacite = $capacite;
		}

		public function setnb_tableaux($nb_tableaux){
			$this->_nb_tableaux = $nb_tableaux;
		}

		public function setformateur($formateur){
			$this->_formateur = $formateur;
		}

}
?>