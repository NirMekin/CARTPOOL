<?php
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
$query1 ="INSERT INTO tbl_User_220 VALUES (111,'Jony Beker',0524658321,'Yehoda Anasi 41','jBeker@gmail.com',5),(222,'Kalanit Horvitz',0544658546,'Anasi 1','KHmail@gmail.com',0);";
$query2 ="INSERT INTO tbl_Item_220 VALUES ('Milk 3%',10,1.5),('Cola',20,5),('Tomato',30,2),('Milk 1%',11,1.5),('Sider',21,4),('Onion',31,3),('Salamon',40,15),('Eal',41,17.5)";
mysqli_query($conn,$query1);
mysqli_query($conn,$query2);


echo "Data was created";

mysqli_close($conn);
?>