/**
 * Created by Nir Mekin on 2/15/2017.
 */
$(document).ready(function () {
    var temp=0;
    $(".addList").find('li').each(function () {
        var _this = $(this);
        if(temp%2==0){
            _this.css("background-color","#d6d6d6");
        }
        else _this.css("background-color","#ebebeb");
        temp++;
    })
    var countList=[];
    var count = 0;
    temp;
    while(temp){
        // console.log("count: " + count+ "  temp: " + temp+"\n");
        countList[count]=0;
        // console.log(countList[count]);
        count++;
        temp--;
    }
    count=0;
    var module = 2;
    $('button').each(function () {
        var _this =$(this);

        if(module%2==0){
            _this.click ( function () {
                countList[count]= countList[count] + 1;
                module+=1;
                console.log("TTT");
            })
        }
        else {
            if (countList[count] > 0){
                _this.click( function (){
                    countList[count] = countList[count] - 1;
                    count++;
                    console.log("T2T");
                    console.log("Test 2: "+countList[count]+ " COUNT: "+count);
                })
            }
        }
    })
})