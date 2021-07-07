<?php

class user{
	private $UserId,$UserName,$UserMail,$UserGameId,$UserPassword;
	
	public function getUserId(){
		return $this->UserId;
	}
	public function setUserId($UserId){
		return $this->UserId=$UserId;
	}
	
	public function getUserName(){
		return $this->UserName;
	}
	public function setUserName($UserName){
		return $this->UserName=$UserName;
	}
	
	public function getUserMail(){
		return $this->UserMail;
	}
	public function setUserMail($UserMail){
		return $this->UserMail=$UserMail;
	}
	
	public function getUserPassword(){
		return $this->UserPassword;
	}
	public function setUserPassword($UserPassword){
		return $this->UserPassword=$UserPassword;
	}

	
	public function InsertUser(){
		include "../../connectToDB.php";
		$UserInsert=$_db->prepare("INSERT INTO users (UserName,UserPassword) 
		VALUES (:UserName,:UserPassword)");
		
		$UserInsert->execute(array(
		'UserName'=>$this->getUserName(), 
		'UserPassword'=>$this->getUserPassword() 
		));	
	}
	public function UserLogin(){
		include "../../connectToDB.php";
		$UserRequest=$_db->prepare("SELECT * FROM users WHERE UserName=:UserName AND UserPassword=:UserPassword");
		$UserRequest->execute(array(
		'UserName'=>$this->getUserName(), 
		'UserPassword'=>$this->getUserPassword()  
		));	
		if($UserRequest->rowCount()==0){
			header("Location: ../index.php?error=1");
			return false;
		} else {
			header("Location: indexdash.php");
			return true;
			}
		} 
		//return $UserRequest->rowCount();
	}
	


?>