<?php
    include("dbConnection.php");
    $userID = $_POST['id'];
    $query = "select id from tbl_User_220 where Id=$userID";
    $result = @mysqli_query($conn,$query);
    $row = mysqli_num_rows($result);

    if($row>0){
        echo "true";
    }
    else echo "false";

    mysqli_close($conn);

?>