$(document).ready(function () {
    $("#btn1").click(function () {
        $(".wrapperDiv").hide();
    });
    $("#btn2").click(function () {
        $(".wrapperDiv").show();
    });
    $("#btn3").click(function () {
        $("#1").text("One").css("background-color", "black").css("color", "white");
        $("#2").text("Two").css("background-color", "white").css("color", "black");
        $("#3").text("Three").css("background-color", "black").css("color", "white");
        $("#4").text("Four").css("background-color", "white").css("color", "black");;
    });

    $(".wrapperDiv").hover(function () {
        $(this).css("background-color", "yellow");

    }, function () {
        $(this).removeAttr("style");


    });

});