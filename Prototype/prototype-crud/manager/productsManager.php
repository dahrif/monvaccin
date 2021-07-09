<?php
require_once('../model/Product.php');

class ProductsManager {
	// public function get($id){
	// 	$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
	// 	$req = "SELECT * FROM salles WHERE id = $id";
	// 	$row = $dbh->query($req)->fetch();
	// 	return new Product($row);
	// }
	
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM salles';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Product($row);
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
		$addProductQuery -> bindParam(":id",$product->getid(),PDO::PARAM_STR);	
		$addProductQuery -> bindParam(":numero",$product->getnumero(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":capacite",$product->getcapacite(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":nb_tableaux",$product->getnb_tableaux(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":formateur",$product->getformateur(),PDO::PARAM_STR);
		$addProductQuery->execute();
	}
}
?>