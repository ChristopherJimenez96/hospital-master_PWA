<?php
	$con = mysqli_connect("localhost","usr_empresa","Empres@123");
	date_default_timezone_set ("America/Bogota");
	mysqli_select_db($con,"db_hospital");
	if(!$con){
			die("Failed to connect");
			}
?>