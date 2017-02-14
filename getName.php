<?php
    include("dbConnection.php");
    $userID = $_POST['id'];
    $query = "select * from tbl_user_220 where Id=". $userID;
    $result = mysqli_query($conn,$query);
    $name = mysqli_fetch_assoc($result);
    if(mysqli_num_rows($result)<1)
        echo "false";
    else
        echo $name['Name'];

?>