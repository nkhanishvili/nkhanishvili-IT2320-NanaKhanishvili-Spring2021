window.onload = function () {
 

    ChangeTexts();
    ChangeColor();
}

function ChangeTexts() {


    var buttons = document.getElementsByClassName("btnOrig");

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            ChangeButtonText(this);

        })

    }



};


function ChangeButtonText(button) {
    button.innerHTML = "Active";
    console.log("Changing to Active");
}


function ChangeColor(){

    var squarres = document.getElementsByClassName("square3");
     

    for (var i = 0; i < squarres.length; i++) {

        squarres[i].addEventListener("click", function () {
            ChangeSquare(this);

        })

    }
}

function ChangeSquare(squareObject){
    squareObject.style.background = "green";
    console.log("Changing background to Green ");
}