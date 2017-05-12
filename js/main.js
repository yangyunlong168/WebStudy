/**
 * Created by sky on 2017/5/9.
 */
var childeNo1, childeNo2, childeNo3, childeTemp1, childeTemp2, childeTemp3, color1, color2, color3, colorTemp1, colorTemp2, colorTemp3;
function initial() {
    var parentt = $(".mParent");
    for (var i = 0; i < (parentt.children("div").length); i++) {
        var child = parentt.children("div").eq(i);
        $(child).css("backgroundColor", "#334455");
    }
}

function colorSet() {
    var parentt = $(".mParent");
    var colorArry = ["#FF0000", "#FF7F00", "#FFFF00", " #00FF00", "#00FFFF", "#0000FF", "#8B00FF", "#000000", "#3366bb"];
    childeNo1 = Math.floor(Math.random() * 9);
    childeNo2 = Math.floor(Math.random() * 9);
    childeNo3 = Math.floor(Math.random() * 9);

    while(true){
        if(childeNo1==childeNo2||childeNo1==childeNo3||childeNo1==childeTemp1||childeNo1==childeTemp2||childeNo1==childeTemp3){
            childeNo1 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }

    while(true){
        if(childeNo2==childeNo1||childeNo2==childeNo3||childeNo2==childeTemp2||childeNo2==childeTemp1||childeNo2==childeTemp3){
            childeNo2 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }

    while(true){
        if(childeNo3==childeNo1||childeNo3==childeNo2||childeNo3==childeTemp3||childeNo3==childeTemp2||childeNo3==childeTemp1){
            childeNo3 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }
    childeTemp1 = childeNo1;
    childeTemp2 = childeNo2;
    childeTemp3 = childeNo3;

    var child1 = parentt.children("div").eq(childeNo1);
    var child2 = parentt.children("div").eq(childeNo2);
    var child3 = parentt.children("div").eq(childeNo3);

    color1 = Math.floor(Math.random() * 9);
    color2 = Math.floor(Math.random() * 9);
    color3 = Math.floor(Math.random() * 9);

    while(true){
        if(color1==color2||color1==color3||color1==colorTemp1||color1==colorTemp2||color1==colorTemp3){
            color1 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }

    while(true){
        if(color2==color1||color2==color3||color2==colorTemp2||color2==colorTemp1||color2==colorTemp3){
            color2 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }

    while(true){
        if(color3==color1||color3==color2||color3==colorTemp3||color3==colorTemp2||color3==colorTemp1){
            color3 = Math.floor(Math.random() * 9);
        }else{
            break;
        }
    }
    colorTemp1 = color1;
    colorTemp2 = color2;
    colorTemp3 = color3;

    for (var i = 0; i < (parentt.children("div").length); i++) {
        if (i != childeNo1 && i != childeNo2 && i != childeNo3) {
            var child = parentt.children("div").eq(i);
            $(child).css("backgroundColor", "#334455");
        }
    }

    $(child1).css("backgroundColor", colorArry[color1]);
    $(child2).css("backgroundColor", colorArry[color2]);
    $(child3).css("backgroundColor", colorArry[color3]);


}