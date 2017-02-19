/**
 * Created by Nir Mekin on 2/18/2017.
 */
$(document).ready(function () {
    var _herf= window.location.pathname;

    var split_href=_herf.split('/');
    split_href=split_href[split_href.length-1];

    if(split_href=="layout5.html") {
        $('#discount').find('button').each(function () {
            $(this).click(function () {
                window.location.href = "layout7.html?id=" + parseData+"&text="+$(this).text();
            })
        })
    }
    if(split_href=="layout7.html"){
        var data = window.location.search.substring(1);
        data = data.split('=');
        console.log(data[2]);
        if(data[2]=="Yes"){
            $('header').find('article').text("0%");

        }
        var temp=0;


        $('h4').find('span:eq(0)').fadeIn(1000).delay(1000);
        $('h4').find('span:eq(1)').fadeIn(2500).delay(3500);
        $('h4').find('span:eq(2)').fadeIn(4000).delay(5000);

        setTimeout(function(){
            window.location.href="layout9.html?id="+parseData;
        }, 5000);
    }
    if(split_href=="layout9.html"){
        dataString = "id="+parseData+"&list=10";
        $.ajax({
            type: 'POST',
            url: 'getProducts2.php',
            data: dataString,
            cache: true,
            success: function (data) {
                if(data=="true"){
                    setTimeout(function(){
                        window.location.href="layout1.html?id="+parseData;
                    }, 3000);

                }
            }
        })
    }
})