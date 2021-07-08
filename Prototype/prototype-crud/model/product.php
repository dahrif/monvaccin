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


	public function __construct($data) {
		$this->array_fill($data);
	}

	public function array_fill( $data)
	{
		$this->setId ($data["id"]);
		$this->setnumero ($data["numero"]);
		$this->setcapacite ($data["capacite"]);
		$this->setnb_tableaux ($data["nb_tableaux"]);
		$this->setformateur ($data["formateur"]);

	}

		public function id() { return $this->_id; }
		public function numero() { return $this->_numero; }
		public function capacite() { return $this->_capacite; }
		public function nb_tableaux() { return $this->_nb_tableaux; }
		public function formateur() { return $this->_formateur; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setnumero($numero){
			if (is_string($numero) && strlen($numero) <= 255)
			{
					$this->_numero = $numero;
			}
		}
		public function setcapacite($capacite){
			if (is_string($capacite) && strlen($capacite) <= 255)
			{
					$this->_capacite = $capacite;
			}
		}

		public function setnb_tableaux($nb_tableaux){
				$this->_nb_tableaux = $nb_tableaux;
		}

		public function setformateur($formateur){
				if (is_string($formateur) && strlen($formateur)){
					$this->_formateur = $formateur;
				}
		}

}
?>