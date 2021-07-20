<?php
require_once('../model/Product.php');

class ProductsManager {

	//Get Product
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM salles';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Product($row);
			$itm->setId($row["id"]);
			$itm->setnumero($row["numero"]);
			$itm->setcapacite($row["capacite"]);
			$itm->setnb_tableaux($row["nb_tableaux"]);
			$itm->setformateur($row["formateur"]);
			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add Product
	public function add($product){
		$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
		$req = "INSERT INTO `salles`(`id`,`numero`, `capacite`,`nb_tableaux`,`formateur`) VALUES (:id,:numero,:capacite,:nb_tableaux,:formateur)";

		$addProductQuery = $dbh ->prepare($req);
		$addProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
		$addProductQuery -> bindParam(":numero",$product->getnumero(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":capacite",$product->getcapacite(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":nb_tableaux",$product->getnb_tableaux(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":formateur",$product->getformateur(),PDO::PARAM_STR);
		$addProductQuery->execute();
	}

	//Delete Product

	public function delete($id){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=schoolstd", "root", "root2021");

		$req = "DELETE FROM salles WHERE id = $id ";
        $deleteProduct= $dbh->prepare($req);
        $deleteProduct->execute();
    }

	// Update Product
	public function update($product){
		$id = $product->getId();
		$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
		$req = "UPDATE salles SET numero = :numero,capacite = :capacite,nb_tableaux = :nb_tableaux,formateur = :formateur WHERE id = $id";
		$updateProductQuery = $dbh ->prepare($req);
		$updateProductQuery -> bindParam(":numero",$product->getnumero(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":capacite",$product->getcapacite(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":nb_tableaux",$product->getnb_tableaux(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":formateur",$product->getformateur(),PDO::PARAM_STR);
		$updateProductQuery->execute();
	}
}


?>