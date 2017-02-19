/**
 * Created by Nir Mekin on 2/19/2017.
 */



$(document).ready(function () {
    var dataString = 'list=1';
    var listItems=[];
    $.ajax({
        type: 'POST',
        url: 'getProducts3.php',
        data: dataString,
        cache: true,
        success: function(data) {
            if (data == "false")
                console.log("Error can't find Client's Name!");
            //else  console.log(data);
            else {
                $('main')[0].innerHTML= data;
                listMaker();
            }
        }

    });


})