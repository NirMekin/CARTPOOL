$(document).ready(function () {

    $(".showLightBox").bind('click',function () {
        // $("#lightbox").css('display','block');
        $("#lightbox").show(200);
    })
    $("button")[0].addEventListener('click',function () {
        $("#lightbox").hide(200);
    })

})