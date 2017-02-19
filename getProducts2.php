<?php
    include ("dbConnection.php");
    $selectQuery = $_POST['list'];
    $idClient = $_POST['id'];
    if($selectQuery==1) {
        echo "<h1>Latest Orders:</h1><section class=\"addCart\">";
            $query = "SELECT ClientOrder from tbl_Order_220
                    where ClientDeliver=0
                    and ClientOrder != $idClient
                    GROUP BY ClientOrder";

            $result = mysqli_query($conn,$query);

            while($id = mysqli_fetch_array($result)){
                $query = "SELECT Name, CartDate,CartTime from tbl_User_220
                          INNER JOIN tbl_Order_220 ON ClientOrder=Id
                          INNER JOIN tbl_Cart_220 ON OrderId = CartId
                            WHERE id = $id[0]
                            group by Name, CartDate,CartTime LIMIT 4";
                $result = mysqli_query($conn,$query);
                while($test = mysqli_fetch_array($result)){
                    echo "<section><p>$test[1]</p><p>$test[2]</p><p>$test[0]</p></section>";
                }
            }
            echo "</section>";
            echo "<section id=\"lightbox\">
                    <section id=\"lightOn\">
                        <button>X</button>
                        <h3>Do you like to make This Order</h3>
                        <h2></h2>
                        <section id='insertDataHere'>
                       
                        </section>
                        <button>Yes</button>
                        <button>No</button>
                    </section>
                </section>";
    }
    else if($selectQuery==2){
        $_name=$_POST['name'];
        $_date=$_POST['date'];
        $_time=$_POST['time'];

        $query = "SELECT itemname,countitems,orderid FROM tbl_Order_220
                  INNER JOIN tbl_Cart_220 ON orderid=cartid
                  INNER JOIN tbl_Item_220 ON itemid=itemcode
                INNER JOIN tbl_User_220 as u ON clientorder=id
                WHERE u.name=\"$_name\"
                AND carttime='$_time'
                and cartdate='$_date'";
        $result = mysqli_query($conn,$query);
        echo "<p>$_date</p>";
        echo "<p>$_time</p>";
        echo "<p>$_name</p>";
        echo "<h3>---List---</h3>";
        while($test = mysqli_fetch_array($result)){
            echo "<p class='orderId=$test[2]'>$test[0] $test[1]</p>";


        }
    }
    if($selectQuery==3){
        $_id=$_POST['id'];
        $_order = $_POST['orderId'];
        echo "Test New 3";
        $query = "update tbl_Order_220
                  SET ClientDeliver=$_id
                  where OrderId = $_order";
        $result = mysqli_query($conn,$query);
    }

    if($selectQuery==4){
        $_id=$_POST['id'];
        $query = "SELECT ClientDeliver FROM tbl_Order_220
                  WHERE ClientDeliver=$_id";
        $result = mysqli_query($conn,$query);
        if(mysqli_num_rows($result)>=1)
            echo "true";
        else{
            echo "false";
        }
    }
    if($selectQuery==5){
        $_id = $_POST['id'];
        echo "<h1>Orders</h1>";
        $query ="SELECT * from tbl_Order_220
                 where ClientDeliver=$_id";
        $result = mysqli_query($conn,$query);
        if(mysqli_num_rows($result)>1){
            echo "<section id=\"cartListsForDeliver\">";
            $row=mysqli_fetch_array($result);
            echo "<ul>";
            $query_name = "select Name from tbl_User_220
                            INNER JOIN tbl_Order_220 on Id = ClientOrder
                            where Id =$row[1]
                            group by Name";
            $result_name = mysqli_query($conn,$query_name);

            $query_item_name = "select ItemName from tbl_Item_220
                                INNER JOIN tbl_Order_220 on ItemId = ItemCode
                                where ItemId =$row[4]
                                GROUP BY ItemId";
            $result_item_name = mysqli_query($conn,$query_item_name);

            $order_name =mysqli_fetch_array($result_name);
            echo "<li>$order_name[0]</li>";
            $item_name = mysqli_fetch_array($result_item_name);
            echo "<li><p>$item_name[0]</p><p>$row[3]</p></li>";
            $count_item = $row[3];

            $order_id=$row[0];
            while($row=mysqli_fetch_array($result)){
                if($row[0]!=$order_id){
                    echo "</ul>";
                    echo "<ul>";
                    $query_name = "select Name from tbl_User_220
                            INNER JOIN tbl_Order_220 on Id = ClientOrder
                            where Id =$row[1]
                            group by Name";
                    $result_name = mysqli_query($conn,$query_name);
                    $order_name =mysqli_fetch_array($result_name);
                    echo "<li>$order_name[0]</li>";
                    $order_id=$row[0];
                }
                $query_item_name = "select ItemName from tbl_Item_220
                                INNER JOIN tbl_Order_220 on ItemId = ItemCode
                                where ItemId =$row[4]
                                GROUP BY ItemId";
                $result_item_name = mysqli_query($conn,$query_item_name);
                $count_item = $row[3];
                $item_name = mysqli_fetch_array($result_item_name);
                echo "<li><p>$item_name[0]</p><p>$count_item</p></li>";



            }
            echo "</ul>";
            echo "</section>";
        }

    }
    if($selectQuery==10){
        $id=$_POST['id'];
        $query= "delete from tbl_Order_220
                WHERE ClientDeliver=$id";
        $result = mysqli_query($conn,$query);
        echo "true";
    }
    mysqli_close($conn);
?>