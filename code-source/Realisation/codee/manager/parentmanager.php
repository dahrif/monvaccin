<?php
require_once(__DIR__.'../../model/parent.php');
class ParentManager {

	//Get Product
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM parent';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Parents($row);
			$itm->setid_parent($row["id_parent"]);
			$itm->setfirstname($row["firstname"]);
			$itm->setlastname($row["lastname"]);
			$itm->setgender($row["gender"]);
			$itm->setemail($row["email"]);
            $itm->setpassword($row["password"]);
			$itm->setphone($row["phone"]);


			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add Product
	public function add($product){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `parent`(`firstname`, `lastname`,`gender`,`email`,) VALUES (:firstname,:lastname,:gender,:email)";

		$addProductQuery = $dbh ->prepare($req);
		$addProductQuery -> bindParam(":firstname",$product->getfirstname(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":lastname",$product->getlastname(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":gender",$product->getgender(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":email",$product->getemail(),PDO::PARAM_STR);
        $addProductQuery -> bindParam(":password",$product->getpassword(),PDO::PARAM_STR);

		$addProductQuery->execute();
	}

	//Delete Product

	public function delete($id){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin", "root", "root2021");
		$req = "DELETE FROM parent WHERE id = $id ";
        $deleteProduct= $dbh->prepare($req);
        $deleteProduct->execute();
    }

	// Update Product
	public function update($Parent){
		$id = $Parent->getId();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE parent SET firstname = :firstname,lastname = :lastname,gender = :gender,email = :email WHERE id = $id";
		$updateParentQuery = $dbh ->prepare($req);
		$updateParentQuery -> bindParam(":firstname",$Parent->getfirstname(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":lastname",$Parent->getlastname(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":gender",$Parent->getgender(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":email",$Parent->getemail(),PDO::PARAM_STR);
        $updateParentQuery -> bindParam(":password",$Parent->getemail(),PDO::PARAM_STR);
        $updateParentQuery -> bindParam(":phone",$Parent->getphone(),PDO::PARAM_STR);

		$updateParentQuery->execute();
	}
}


?>