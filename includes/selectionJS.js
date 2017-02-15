/**
 * Created by Nir Mekin on 2/13/2017.
 */
 var parseData = (function () {
    var data = window.location.search.substring(1);
    data = data.split('=');
     console.log(data[1]);
    return data[1];
}());

 $(document).ready(function () {
     var profileID = parseData;
     var dataString = "id="+profileID;
     $.ajax({
         type: 'POST',
         url: 'getName.php',
         data: dataString,
         cache: true,
         success: function(data) {
             if (data == "false")
                 console.log("Error can't find Client's Name!");
             //else  console.log(data);
             else {
                 $('.profileName')[0].innerHTML='<br><br><br>'+data;
             }
         }

     });

     $.getJSON("includes/myJson.json",function (data) {

             // console.log(profileID);
             $.each(data,function (k,v) {
                 // console.log(v.id + " " + v.imageSrc);
                 if(v.id==profileID){
                     var profileBackgroundPic = v.imageSrc;
                     console.log(profileBackgroundPic);
                     $("#clientPic").css("background-image","url("+profileBackgroundPic+")");
                     $("#hamburger").find("article").css("background-image","url("+profileBackgroundPic+")");
                     $("a").each(function() {
                         var $this = $(this);
                         var _href = $this.attr("href");
                         $this.attr("href", _href + "?"+"id="+v.id);
                     });
                 }

             })
     })

 })


//$("#selection").find("a").attr("href",$("#selection").find("a").attr('href')+"?"+v.id);