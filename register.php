<?php
$conn = mysqli_connect("localhost", "root", "", "minor_project");
if($conn === false){
	die("ERROR: Could not connect. "
	. mysqli_connect_error());
}
$nameuser = $_REQUEST['a'];
$username = $_REQUEST['b'];
$email = $_REQUEST['c'];
$passcode = $_REQUEST['d'];
$sql = "INSERT INTO language_dekho VALUES ('$nameuser', 
	'$username','$email','$passcode')";
	if(mysqli_query($conn, $sql)){
		header("Location:login.html");
	} else{
		echo "ERROR: Hush! Sorry $sql. "
			. mysqli_error($conn);
	}
mysqli_close($conn);
?>