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
    $query1 ="CREATE TABLE tbl_User_220(
              Id INTEGER,
              Name VARCHAR(25),
              Phone INT,
              Address VARCHAR(128),
              Email VARCHAR(50),
              Discount INT,
              PRIMARY KEY (Id)
            )";
    $query2 ="CREATE TABLE tbl_Item_220(
              ItemName VARCHAR(25),
              ItemCode INTEGER,
              ItemPrice FLOAT,
              PRIMARY KEY (ItemCode)
            )";
    $query3 ="CREATE TABLE tbl_Order_220(
              OrderId INT,
              ClientOrder INT,
              ClientDeliver INT,
              countItems INT,
              ItemId INT
            )";
    $query4 ="CREATE TABLE tbl_Cart_220(
              CartId INTEGER,
              CartDate DATE,
              CartTime TIME
            
            )";
    mysqli_query($conn,$query1);
    mysqli_query($conn,$query2);
    mysqli_query($conn,$query3);
    mysqli_query($conn,$query4);

    echo "Tables were created";

    mysqli_close($conn);
?>