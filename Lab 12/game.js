$(function () {
    //jQuery code goes here

    var $Cube = $('#box');
    var $CubeContainer = $Cube.parent();
    var max = 100;


    function getBoxPosition() {

        // max 100 right top left and right 
        var border = {};
        border.top = $Cube.position().top;
        border.left = $Cube.position().left;
        border.right = border.left + $Cube.outerWidth();
        border.bottom = border.top + $Cube.outerHeight();
        return border;
    }

    $('#up').on('click', function () {

        var UP = getBoxPosition().top - max;
        if (UP < 0) {
            UP = 0;
            alert("Cube is all the way UP,  can not go outside of the container!!!!!!")
        }

        $Cube.stop().animate({
            top: UP
        });
    });
    $('#down').on('click', function () {

        var Down = getBoxPosition().top + max;

        if (getBoxPosition().bottom + max > $CubeContainer.outerHeight()) {
            Down = $CubeContainer.outerHeight() - $Cube.outerHeight();
        }
        if(Down==0){
            alert("Cube is all the way down,  can not go outside of the container!!!!!!")
        }

        $Cube.stop().animate({
            top: Down
        });
    });


    $('#left').on('click', function () {

        var Left = getBoxPosition().left - max;

        if (Left < 0) {
            Left = 0;
            alert("Cube is all the way left,  can not go outside of the container!!!!!!")
        }


        $Cube.stop().animate({
            left: Left
        });
    });


    $('#right').on('click', function () {

        var Right = getBoxPosition().left + max;


        if (getBoxPosition().right + max > $CubeContainer.outerWidth()) {
            Right = $CubeContainer.outerWidth() - $Cube.outerWidth();
        }


        $Cube.stop().animate({
            left: Right
        });
    });


    $('#fadeout').on('click', function () {

        $Cube.stop().fadeOut();
    });


    $('#fadein').on('click', function () {

        $Cube.stop().fadeIn();
    });


    $('#blink').on('click', function () {
        $Cube.stop().fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400);
    });


    $('#reset').on('click', function () {
        
        $Cube.removeAttr('style');
    });


});



