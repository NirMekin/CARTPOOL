
var lightBoxOpenCart = function () {
        var dataString = "id="+parseData+"&list=2";
        $('.addCart').find('section').each(function () {
            var _date = $(this).find('p:eq(0)').text();
            var _time = $(this).find('p:eq(1)').text();
            var _name = $(this).find('p:eq(2)').text();

            $(this).click(function () {
                dataString+="&date="+_date+"&time="+_time+"&name="+_name;
                // console.log(dataString);
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
                            $('#insertDataHere').html(data);
                            console.log(data);
                            // console.log($('#insertDataHere').text());
                            $("#lightbox").css("display","block");
                        }
                    }
                })
            })

        })
    $('#lightOn').find('button').each(function () {
        var temp_text=$(this).text();
        if(temp_text=='X'|| temp_text=='No' ){
            $(this).click(function () {
                $('#lightbox').css("display","none");
            })
        }
        else if(temp_text=='Yes'){
            $(this).click(function () {
                // console.log("YES");
                console.log($('#insertDataHere').find('p:last-child').attr('class'));
                var dataString =$('#insertDataHere').find('p:last-child').attr('class');
                dataString+="&id="+parseData+"&list=3";

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
                            // console.log(data);
                            checkForCarts();
                        }
                    }
                })
                $('#lightbox').css("display","none");
            })
        }
    })
}



$(document).ready(function () {
    var dataString = "id="+parseData+"&list=1";
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
                $('main:eq(0)')[0].innerHTML = data;
                // console.log(data);
                checkForCarts();
                lightBoxOpenCart();
            }
        }
    })
})
