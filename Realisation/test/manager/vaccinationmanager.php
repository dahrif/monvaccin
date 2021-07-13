<?php
require_once('../model/Product.php');

class VaccinationManager {

	//Get Product
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM vaccination';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Product($row);
			$itm->setid_vaccination($row["id_vaccination"]);
			$itm->setid_vaccin($row["id_vaccin"]);
			$itm->setid_enfant($row["id_enfant"]);
			$itm->setdate_vaccination($row["date_vaccination"]);
			$itm->setpoids($row["poids"]);
			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add Product
	public function add($product){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `vaccination`(`id_vaccin`, `id_enfant`,`date_vaccination`,`poids`) VALUES (:id_vaccin,:id_enfant,:date_vaccination,:poids)";

		$addProductQuery = $dbh ->prepare($req);
		$addProductQuery -> bindParam(":id_vaccin",$product->getid_vaccin(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":id_enfant",$product->getid_enfant(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":date_vaccination",$product->getdate_vaccination(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":poids",$product->getpoids(),PDO::PARAM_STR);
		$addProductQuery->execute();
	}

	//Delete Product

	public function delete($id_vaccination){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin", "root", "root2021");
		$req = "DELETE FROM vaccination WHERE id_vaccination = $id_vaccination ";
        $deleteProduct= $dbh->prepare($req);
        $deleteProduct->execute();
    }

	// Update Product
	public function update($product){
		$id_vaccination = $product->getid_vaccination();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE vaccination SET id_vaccin = :id_vaccin,id_enfant = :id_enfant,date_vaccination = :date_vaccination,poids = :poids WHERE id_vaccination = $id_vaccination";
		$updateProductQuery = $dbh ->prepare($req);
		$updateProductQuery -> bindParam(":id_vaccin",$product->getid_vaccin(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":id_enfant",$product->getid_enfant(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":date_vaccination",$product->getdate_vaccination(),PDO::PARAM_STR);
		$updateProductQuery -> bindParam(":poids",$product->getpoids(),PDO::PARAM_STR);
		$updateProductQuery->execute();
	}
}


?>