/**
 * Created by Nir Mekin on 2/13/2017.
 */
$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var userId = $("select[name=client]").val();
        var dataString =  "id="+userId;
        console.log(userId);
        $.ajax({
            type: 'POST',
            url: 'verifyUser.php',
            data: dataString,
            cache: true,
            success: function(data){
                if(data=="true")
                     window.location.href = "index.html?id=" + userId;
            }

        });
    });
});