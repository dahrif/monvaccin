<?php
class Vaccination implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_vaccination' => $this->_id_vaccination,
             'id_vaccin' => $this->_id_vaccin,
             'id_enfant' => $this->_id_enfant,
			 'nom_vaccin' => $this->_nom_vaccin,
			 'description' => $this->_description,
             'date_vaccination' => $this->_date_vaccination,
			 'poids' => $this->_poids,
             'nom_enfant' => $this->_nom_enfant,
			 'date_naissance' => $this->_date_naissance,
			 'poids_naissance' => $this->_poids_naissance,

        );
    }
	private $_id_vaccination;
	private $_id_vaccin;
	private $_id_enfant;
	private $_nom_vaccin;
	private $_description;
	private $_date_vaccination;
	private $_poids;
	private $_nom_enfant;
	private $_date_naissance;
	private $_poids_naissance;


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

		public function setnom_vaccin($nom_vaccin){
			$this->_nom_vaccin = $nom_vaccin;
		}

		public function setdescription($description){
			$this->_description= $description;
		}
		
		public function setdate_vaccination($date_vaccination){
			$this->_date_vaccination = $date_vaccination;
		}

		public function setpoids($poids){
			$this->_poids = $poids;
		}

		public function setnom_enfant($nom_enfant){
			$this->_nom_enfant = $nom_enfant;
		}

		public function setdate_naissance($date_naissance){
			$this->_date_naissance = $date_naissance;
		}

		public function setpoids_naissance($poids_naissance){
			$this->_poids_naissance = $poids_naissance;
		}

}
?>