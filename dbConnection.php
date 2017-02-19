<?php
    //create a mySQL DB connection:


$dbhost = "182.50.133.146";
$dbuser = "auxstudDB6c";
$dbpass = "auxstud6cDB1!";
$dbname = "auxstudDB6c";

    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    //testing connection success
    if(mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
        );
        console.log("Fail to connect");
    }
?>