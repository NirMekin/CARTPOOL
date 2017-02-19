<?php
    include("dbConnection.php");
    $userID = $_POST['id'];
    $query = "select * from tbl_User_220 where Id=$userID";
    $result = mysqli_query($conn,$query);

    $numrows = mysqli_num_rows($result);
    if($numrows<1)
        echo "false";
    else{
        $name = mysqli_fetch_assoc($result);
        echo $name['Name'];
    }

    mysqli_close($conn);
?>