//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

var SalesPerson = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
var December_Sales = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
var January_Sales = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
var February_Sales = [8000, 7500, 45000, 10000, 38000, 22000, 15000];
var Total_Sales = [];
var Commision = [];
var AVG = [];

var isDisplayed = 0;

function CalculateCommission() {
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";
    Total_Of_Sales();
    Calculate_Commision();
    Calculate_AVG();

    for (let i = 0; i < SalesPerson.length; i++) {
        if (Commision[i] > topCommission) {
            topCommission = Commision[i];
            topSalesPerson = SalesPerson[i];
        }
    }
    if (isDisplayed != 1) {
        for (let i = 0; i < SalesPerson.length; i++) {

            var tr = document.createElement("tr");

            var SalesPersonTD = document.createElement("td");
            var CommisionTD = document.createElement("td");
            var AVGTD = document.createElement("td");
            SalesPersonTD.innerText = SalesPerson[i];
            CommisionTD.innerText = Commision[i];
            AVGTD.innerText = AVG[i];
            tr.appendChild(SalesPersonTD);
            tr.appendChild(CommisionTD);
            tr.appendChild(AVGTD);
            document.getElementById("Employee_Table").appendChild(tr);
        }
        var GetTopPerson = document.getElementById("topSalesPerson");
        GetTopPerson.innerText = topSalesPerson;
        var GetcommisionID = document.getElementById("commisionID");
        GetcommisionID.innerText = topCommission;
        isDisplayed = 1;
    }
}

function Total_Of_Sales() {
    for (let i = 0; i < SalesPerson.length; i++) {
        Total_Sales.push(December_Sales[i] + January_Sales[i] + February_Sales[i]);
    }
}
function Calculate_Commision() {
    for (let i = 0; i < SalesPerson.length; i++) {

        if (Total_Sales[i] > 30000) {
            Commision.push(Total_Sales[i] * 0.08);

        }
        else if (Total_Sales[i] > 15000 && Total_Sales[i] < 30000) {
            Commision.push(Total_Sales[i] * 0.05);

        }
        else if (Total_Sales[i] > 10000 && Total_Sales[i] < 15000) {
            Commision.push(Total_Sales[i] * 0.03);

        }
        else if (Total_Sales[i] > 5000 && Total_Sales[i] < 10001) {
            Commision.push(Total_Sales[i] * 0.03);
            ;
        }
        else if (Total_Sales[i] > 0 && Total_Sales[i] < 5000) {
            Commision.push(Total_Sales[i] * 0.03);

        }
        // 0-5000 			1%
        // 5001-10000 		2%
        // 10001-15000 		3%
        // 15001-30000 		5%
        // 30001 and above 	8%
        // 
    }
}

function Calculate_AVG() {
    for (let i = 0; i < SalesPerson.length; i++) {
        AVG.push((December_Sales[i] + January_Sales[i] + February_Sales[i]) / 3);

    }
}