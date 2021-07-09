<?php
require_once('../model/product.php');

class productsManager {
	// public function get($id){
	// 	$req = "SELECT * FROM former WHERE id=$id";
	// 	$row = $this->executerRequete($req, array($id))->fetch();
	// 	return new product($row);
	// }
	//get Products
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=formers","root","12345");
		$stack = array();
		$req = "SELECT * FROM former";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["id"]);
			$item->setFirst($row["Firstname"]);
			$item->setLast($row["Lastname"]);
			$item->setMatricule($row["Matricule"]);
			$item->setEmail($row["Email"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=formers","root","12345");
			$req = "INSERT INTO `former`(`id`,`Firstname`, `Lastname`,`Matricule`,`Email`) VALUES (:id,:Firstname,:Lastname,:Matricule,:Email)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Matricule",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Email",$product->getEmail(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=formers","root","12345");

			$req = "DELETE FROM former WHERE id = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
		// update product		
		public function update($product){
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=formers","root","12345");
			$req = "UPDATE Former SET Firstname = :Firstname,Lastname = :Lastname,Matricule = :Matricule,Email = :Email WHERE id = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Matricule",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Email",$product->getEmail(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>