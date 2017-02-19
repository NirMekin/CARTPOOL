/**
 * Created by Nir Mekin on 2/15/2017.
 */

var listMaker = function () {
    var temp=0;
    $(".addList").find('li').each(function () {
        var _this = $(this);
        if(temp%2==0){
            _this.css("background-color","#d6d6d6");
        }
        else _this.css("background-color","#ebebeb");
        temp++;
    })

    $('button').each(function () {
        var thisButton = $(this);
        var chatTemp = $(this).text();
        if(chatTemp=='+'){
            $(this).click(function () {
                $('.addList').find('li').each(function () {
                    if($(this).find('button')[0]==thisButton.get(0))
                        $(this).find('article')[0].innerHTML++;
                })
            })
        }
        else {
            $(this).click(function () {
                $('.addList').find('li').each(function () {
                    if($(this).find('button')[1]==thisButton.get(0) && $(this).find('article')[0].innerHTML>0)
                        $(this).find('article')[0].innerHTML--;
                })
            })
        }
    })
    $('#addTiemandDate').click(function () {
        $('ul:eq(2)').toggle(200);
        $('form:eq(1)').toggle(200);
        if($(this).text() == "ADD Time and Date") {
            $(this).text("View Order");
            $(this).css("background","green");
            $('main:eq(0)').find('h1').delay(200).text("Time and Date");
        }
        else {
            $(this).text("ADD Time and Date");
            $(this).css("background","darkorange");
            $('main:eq(0)').find('h1').delay(200).text("Add Products");
        }
        if($('#missingData').css("display")=='block') $('#missingData').css("display",'none');
    })
    var dataString="id="+parseData+"&list=2"+'&';
    var tempCount=1;
    var sum=0;
    var flag=1;
    $("form:eq(1)").submit(function (e) {
        e.preventDefault();

        $('ul:eq(2)').find('li').each(function () {
            var ItemCode=$(this).find('article').attr('id');
            var ItemCount=parseInt($(this).find('article').text());
            if(ItemCount>0){
                dataString+="ItemCode"+tempCount+"="+ItemCode+"&ItemCount"+tempCount+"="+ItemCount+"&";
                tempCount++;
                sum++;
            }
        })
        if(sum>0) {
            if ($('input[type=date]').val() != "") {
                dataString += "date=" + $('input[type=date]').val();
            }
            else{
                flag=0;
            }
            if ($('input[type=time]').val() != "") {
                dataString += "&time=" + $('input[type=time]').val()+"&sum="+sum;
            }
            else{
                flag=0;
            }
            if(flag){
                $.ajax({
                    type: 'POST',
                    url: 'getProducts.php',
                    data: dataString,
                    cache: true,
                    success: function(data) {
                        if (data == "false")
                            console.log("Error can't Proceed at the moment");
                        //else  console.log(data);
                        else {
                            window.location.href = "layout6.html?id=" + parseData;
                            // console.log(data);
                        }
                    }

                });
            }
            else $("#missingData").css("display","block");
        }
        else{
            $("#missingData").css("display","block");
        }
        console.log(dataString);
        console.log($('input[type=date]').val()+"\n"+$('input[type=time]').val());
    })

}

var uploadToDB = function(){


}

$(document).ready(function () {
    var dataString = 'list=1';
    var listItems=[];
    $.ajax({
        type: 'POST',
        url: 'getProducts.php',
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

