/**
 * Created by Nir Mekin on 2/18/2017.
 */


$(document).ready(function () {
    checkForCarts();
    $("#mainDeliverButtons").find('a:eq(0)').css("border-top","1px orange solid");
    var dataString = "id="+parseData+"&list=5";
    $.ajax({
        type: 'POST',
        url: 'getProducts2.php',
        data: dataString,
        cache: true,
        success: function (data) {
            if (data == "false")
                console.log("Error can't find Client's Name!");
            //else  console.log(data);
            else {
                $('main:eq(0)').html(data);
                 console.log(data);
                 $("#cartListsForDeliver").find('ul').each(function () {
                     var module =0;
                     $(this).find('li').each(function () {
                         if(module%2==0){
                             $(this).css("background","#d6d6d6");
                         }
                         else {
                             $(this).css("background","#ebebeb");
                         }
                         module++;

                     })
                     $(this).find('li:eq(0)').css("background","orange");
                 })
            }
        }
    })
})