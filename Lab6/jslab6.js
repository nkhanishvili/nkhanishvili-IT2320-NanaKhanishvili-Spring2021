/*********************************************************************/
//Global Area

function createLink(){
    var link = document.getElementById("parentLink")
    var a = document.createElement('a');
    var linkText = document.createTextNode("tag that you created");
    a.appendChild(linkText);
    a.title = "tag that you created";
    a.href = "http://www.tri-c.com";
    a.id="anchortag";
    link.appendChild(a);
    document.body.appendChild(link);
}

function removeLink(){
    var link = document.getElementById("anchortag");
    link.remove();
}

function changeColor(){
    var color = document.getElementById("inputColor").value;
 
    document.getElementById("box").style.background = color;
  //  document.body.style.backgroundColor=color.Value;
}
function changeSquares(){


   var element1 = document.getElementsByClassName("square1");
    for (var i = 0; i < element1.length; i++) {
        element1[i].style.backgroundColor="black";
    }

    var element2 = document.getElementsByClassName("square2");
    for (var i = 0; i < element2.length; i++) {
        element2[i].style.backgroundColor="white";
    }
    

}
function changeShape(){
  var input= document.getElementsByClassName("inputRadius").value;
   document.getElementsByClassName("square1").style.borderRadius="32px";
 
   
 }
/***************** Function definition area *************/
//write a function to change the size of the box (css)
