/**
 * Created by Nir Mekin on 2/18/2017.
 */
var checkForCarts = function () {
    dataString = "id="+parseData+"&list=4";
    $.ajax({
        type: 'POST',
        url: 'getProducts2.php',
        data: dataString,
        cache: true,
        success: function (data) {
            if (data == "false")
                $("#mainDeliverButtons").find('span').hide();
            //else  console.log(data);
            else if(data=="true"){
                console.log(data);
                $("#mainDeliverButtons").find('span').show();
            }
        }
    })


}