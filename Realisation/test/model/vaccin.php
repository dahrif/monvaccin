<?php
class Vaccin implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_vaccin' => $this->_id_vaccin,
             'nom_vaccin' => $this->_nom_vaccin,
             'description' => $this->_description,

        );
    }
	private $_id_vaccin;
	private $_nom_vaccin;
	private $_description;



	public function __construct() {
	}

		public function getid_vaccin() { return $this->_id_vaccin; }

		public function getnomvaccin() { return $this->_nom_vaccin; }

		public function getdescription() { return $this->_description; }



		public function setid_vaccin($id_vaccin){
			$this->_id_vaccin = (int) $id_vaccin;
		}

		public function setnom_vaccin($nom_vaccin){
			$this->_nom_vaccin = $nom_vaccin;
		}

		public function setdescription($description){
			$this->_description = $description;
		}


}
?>