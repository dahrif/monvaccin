<?php
class Parents implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id_parent' => $this->_id_parent,
             'firstname' => $this->_firstname,
             'lastname' => $this->_lastname,
             'gender' => $this->_gender,
             'email' => $this->_email,
             'password' => $this->_password,
             'phone' => $this->_phone,
             'email' => $this->_email,
        );
    }
	private $_id_parent;
	private $_firstname;
	private $_lastname;
	private $_gender;
	private $_email;
    private $_password;
    private $_phone;
    private $_photo_profile;



	public function __construct() {
	}

		public function getid_parent() { return $this->_id_parent; }

		public function getfirstname() { return $this->_firstname; }

		public function getlastname() { return $this->_lastname; }

		public function getgender() { return $this->_gender; }

		public function getemail() { return $this->_email; }

        public function getpassword() { return $this->_password; }

        public function getphone() { return $this->_phone; }

        public function getphoto_profile() { return $this->_photo_profile; }



		public function setid_parent($id_parent){
			$this->_id_parent = (int) $id_parent;
		}

		public function setfirstname($firstname){
			$this->_firstname = $firstname;
		}

		public function setlastname($lastname){
			$this->_lastname = $lastname;
		}

		public function setgender($gender){
			$this->_gender = $gender;
		}

		public function setemail($email){
			$this->_email = $email;
		}

        public function setpassword($password){
			$this->_password = $password;
		}

        public function setphone($phone){
			$this->_phone = $phone;
		}

        public function setphoto_profile($photo_profile){
			$this->_photo_profile = $photo_profile;
		}



}
?>