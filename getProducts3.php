<?php

include ("dbConnection.php");
$selectQuery = $_POST['list'];
if($selectQuery==1){
    $query = "SELECT * FROM tbl_Item_220
              ORDER BY ItemCode";
    $result = mysqli_query($conn,$query);
    echo "<h1>Add Products</h1>";
    echo "<ul class=\"addList\">";
    while($row = mysqli_fetch_assoc($result)){
        echo "<li>".$row['ItemName']."<button>+</button><button>-</button><article id=".$row['ItemCode'].">0</article></li>";
    }
    echo "</ul>";

    echo "<form id=\"submitCartData\" method=\"post\" action=\"\">
            <label>Enter a date:</label>
            <input type=\"date\" name=\"bday\" min=\"2017-02-18\"><br><br>
            <label>Enter Time:</label>
            <input type=\"time\"><br><br>
            <input type=\"submit\">
        </form>";
    echo "<p id='missingData'>Missing Data</p>";
    echo "<button id=addTiemandDate>ADD Time and Date</button>";
}
else if($selectQuery==2){
    $query = "SELECT MAX(OrderId) FROM tbl_Order_220";
    $result = mysqli_query($conn,$query);
    $max_temp = mysqli_num_rows($result);
    $max;
    if($max_temp<1){
        $max=0;
    }
    else{
        $max_temp = mysqli_fetch_row($result);
        $max=$max_temp[0];
    }
    $date = $_POST['date'];
    $time = $_POST['time'];
    echo $max;
    $idClinet = $_POST['id'];
    for($i=1;$i<=$_POST['sum'];$i++){
        $item = $_POST['ItemCode'.$i];
        $count = $_POST['ItemCount'.$i];
        $query = "INSERT INTO tbl_Order_220 VALUES ($max+1,$idClinet,0,$count,$item)";
        $result = mysqli_query($conn,$query);
    }

    $query = "INSERT INTO tbl_Cart_220 VALUE($max+1,'$date','$time')";
    $result = mysqli_query($conn,$query);
    echo $max." ".$idClinet." ".$date." ".$time;
}


mysqli_close($conn);
?>