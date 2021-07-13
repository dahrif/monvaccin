<?php
class Vaccination implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_vaccination' => $this->_id_vaccination,
             'id_vaccin' => $this->_id_vaccin,
             'id_enfant' => $this->_id_enfant,
             'date_vaccination' => $this->_date_vaccination,
             'poids' => $this->_poids,
        );
    }
	private $_id_vaccination;
	private $_id_vaccin;
	private $_id_enfant;
	private $_date_vaccination;
	private $_poids;


	public function __construct() {
	}

		public function getid_vaccination() { return $this->_id_vaccination; }

		public function getid_vaccin() { return $this->_id_vaccin; }

		public function getid_enfant() { return $this->_id_enfant; }

		public function getdate_vaccination() { return $this->_date_vaccination; }

		public function getpoids() { return $this->_poids; }


		public function setid_vaccination($id_vaccination){
			$this->_id_vaccination = (int) $id_vaccination;
		}

		public function setid_vaccin($id_vaccin){
			$this->_id_vaccin = $id_vaccin;
		}

		public function setid_enfant($id_enfant){
			$this->_id_enfant = $id_enfant;
		}

		public function setdate_vaccination($date_vaccination){
			$this->_date_vaccination = $date_vaccination;
		}

		public function setpoids($poids){
			$this->_poids = $poids;
		}

}
?>