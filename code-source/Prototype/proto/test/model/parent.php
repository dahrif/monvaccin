<?php
class Parents implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_parent' => $this->_id_parent,
             'nom' => $this->_nom,
             'prenom' => $this->_prenom,
             'genre' => $this->_genre,
             'email' => $this->_email,
             'mot_de_passe' => $this->_mot_de_passe,
             'telephone' => $this->_telephone,
             'email' => $this->_email,
        );
    }
	private $_id_parent;
	private $_nom;
	private $_prenom;
	private $_genre;
	private $_email;
    private $_mot_de_passe;
    private $_telephone;
    private $_photo_profile;



	public function __construct() {
	}

		public function getid_parent() { return $this->_id_parent; }

		public function getnom() { return $this->_nom; }

		public function getprenom() { return $this->_prenom; }

		public function getgenre() { return $this->_genre; }

		public function getemail() { return $this->_email; }

        public function getmot_de_passe() { return $this->_mot_de_passe; }

        public function gettelephone() { return $this->_telephone; }

        public function getphoto_profile() { return $this->_photo_profile; }



		public function setid_parent($id_parent){
			$this->_id_parent = (int) $id_parent;
		}

		public function setnom($nom){
			$this->_nom = $nom;
		}

		public function setprenom($prenom){
			$this->_prenom = $prenom;
		}

		public function setgenre($genre){
			$this->_genre = $genre;
		}

		public function setemail($email){
			$this->_email = $email;
		}

        public function setmot_de_passe($mot_de_passe){
			$this->_mot_de_passe = $mot_de_passe;
		}

        public function settelephone($telephone){
			$this->_telephone = $telephone;
		}

        public function setphoto_profile($photo_profile){
			$this->_photo_profile = $photo_profile;
		}



}
?>