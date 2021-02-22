//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract() {
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment() {
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX + 10;//can add any number to itself
    //y = y+10;
    y += 10;//same as y = y+10;
    alert("x=" + globalX + "y=" + y);

}

/* JS statements
Conditional statements:
If statement
Switch statement

Loops:
For loop
While loop
Do while loop

Break
*/

function compare() {
    var charlie = 120;
    var john = 120;

    //conditional if statement

    if (charlie > john) {
        alert("Charlie is taller");
    }
    else if (charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{

    var isTropical = false; //boolean variable: True or False

    switch (fruit) {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;
    }

    alert("Is " + fruit + " tropical?" + isTropical);

}

function Repeat(message) {
    var counter = 0;
    console.log("While loop:");
    while (counter < 5) {
        console.log(message);
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do {
        console.log(message);
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for (var counter = 0; counter < 5; counter++) {
        console.log(message);
    }


}

function Multiply() {
    var number1 = 25;
    var number2 = 42;

    alert("multiply 25 by 42 is: " + number1 * number2);
}
//I want to divide 48 pencils among 12 kids. How many pencils do each child get?
function Pencils_For_Each_Kid() {
    var kids = 12;
    var pencils = 48;

    alert("Each child will get  " + pencils / kids + " pencil");
}
//Calculate the 'mean' of these numbers: 25,47,98,46,52

function Mean_Number() {
    var numbers = [25, 47, 98, 46, 52];
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    var avg = total / numbers.length;
    alert("Mean of these numbers is " + avg);
}

function Even_Numbers() {

    var sum = 0;

    for (var x = 2; x <= 200; x = x + 2) {

        if (x % 2 == 0) {

            sum += x;
        }
        //   console.log(sum + "  " + x);
    }
    alert(sum);
}

function Count_fibonacci() {
    var answer = fibonacci(20);
    alert(answer);
}

function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);


}

