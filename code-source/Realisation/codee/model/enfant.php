<?php
class Enfant implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_enfant' => $this->_id_enfant,
             'id_parent' => $this->_id_parent,
             'nom_enfant' => $this->_nom_enfant,
             'date_naissance' => $this->_date_naissance,
             'poids_naissance' => $this->_poids_naissance,
             'genre' => $this->_genre,


        );
    }
	private $_id_enfant;
	private $_id_parent;
	private $_nom_enfant;
	private $_date_naissance;
	private $_poids_naissance;
    private $_genre;


	public function __construct() {
	}

		public function getid_enfant() { return $this->_id_enfant; }

		public function getid_parent() { return $this->_id_parent; }

		public function getnom_enfant() { return $this->_nom_enfant; }

		public function getdate_naissance() { return $this->_date_naissance; }

		public function getpoids_naissance() { return $this->_poids_naissance; }

        public function getgenre() { return $this->_genre; }




		public function setid_enfant($id_enfant){
			$this->_id_enfant = (int) $id_enfant;
		}

		public function setid_parent($id_parent){
			$this->_id_parent = $id_parent;
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

        public function setgenre($genre){
			$this->_genre = $genre;
		}

		

}
?>