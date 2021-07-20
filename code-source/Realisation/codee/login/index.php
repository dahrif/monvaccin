<?php
include("includes/config.php");
include("../model/parent.php");

//session_destroy(); LOGOUT
if(isset($_SESSION['userLoggedIn'])) {
	$userLoggedIn = new Parents ($con, $_SESSION['userLoggedIn']);
	$name = $userLoggedIn->getfirstname();
	echo "<script>userLoggedIn = '$name';</script>";
}
else {
	header("Location: register.php");
}



?>

<html>
<head>
	<title>Welcome !</title>
</head>

<body>
	Hello!
	<div class="text-center">Want to Leave the Page? <br><a href="../landing-page/index.html">Logout</a></div>
</body>

</html>