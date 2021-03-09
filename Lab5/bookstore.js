/********************************************/
//20books 5 US 5 UK 5 Canada 5 Germany
var Books = [
    { name: "How I Became A Ghost ", author: "Tim Tingle", price:20.13, origin: "US" },
    { name: "The Reader", author: "Bernhard Schlink", price: 25.65, origin: "German" },
    { name: "The Swarm", author: "Frank Schätzing", price: 23.65, origin: "US" },
    { name: "White Teeth", author: "Zadie Smith", price: 22.55, origin: "Britain " },
    { name: "Jane Eyre", author: "Charlotte Brontë", price: 23.35, origin: " Northern England" },
    { name: "A Hero of Our Time", author: "Mikhail Lermontov", price: 21.65, origin: "Russian" },
     { name: "The Adventures of Huckleberry Finn", author: " Mark Twain", price: 22.23, origin: "US" },
     { name: "Beloved", author: "Toni Morrison", price: 21.65, origin: "US" },
     { name: "The Grapes of Wrath", author: "John Steinbeck", price: 22.65, origin: "US" },
     { name: "The Color Purple", author: "Alice Walker", price: 24.65, origin: "US" },
     { name: "Kukaracha", author: "Nodar Dumbadze", price: 25.65, origin: "GEO" },
     { name: "The Knight in the Panther's Skin", author: "Shota Rustaveli", price: 21.65, origin: "GEO" },
     { name: "The Trial", author: "Req_Date_Filled", price: 20.14, origin: "German" },
     { name: "The Tin Drum", author: "Günter Grass", price: 23.45, origin: "German" },
     { name: "Berlin Alexanderplatz", author: "Alfred Döblin", price: 22.35, origin: "German" },
     { name: "The Fire Next Time", author: "James Baldwin", price: 23.62, origin: "US" },
     { name: "To Kill a Mockingbird", author: "Harper Lee", price: 24.24, origin: "US" },
     { name: "Gone with the Wind", author: "Margaret Mitchell", price: 24.25, origin: "US" },
     { name: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", price: 25.34, origin: "India" },
     { name: "How to Stop Worrying and Start Living", author: "Dale Carnegie", price: 23.15, origin: "Britain " }

]




function getDiscountedPrices() {
    var salesPrice = 0;
    Books.forEach(b => {
        salesPrice = b.price - (b.price * getDiscountPercent(b.origin) / 100);
        console.log(" Book: " + b.name + " Author: "+b.author + " Price: " + b.price + "   SalesPrice: " + salesPrice);
        salesPrice = 0;
    })

}

function getDiscountPercent(country) {

    if (country === "US") {
        return 10;
    } else if (country === "UK") {
        return 5;
    } else if (country === "Canada") {
        return 12;
    }
    else {
        return 15;
    }
}
// If the country of origin is US, discount % will be 10%
// If the country of origin is UK, discount % will be 5%
// If the country of origin is Canada, discount % will be 12%
// If the country of origin is other than the above 3 countries, the discount % will be 15%