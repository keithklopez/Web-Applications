let f = function () {
    //let btn = document.querySelector("#add");
    let customer = document.querySelector("#firstname").value;
    document.querySelector("#customer").innerHTML = "Customer: " + customer;
    let drink = document.querySelector("#drinks").value;
    let quantity = document.querySelector("#quantity").value;
    document.querySelector("#price").innerHTML = quantity + " " + drinks[drink].make + " @ $" + drinks[drink].price;
    let total = quantity * drinks[drink].price;
    document.querySelector("#total").innerHTML = "TOTAL DUE: $" + total;
    var x = document.getElementById("receipt");
    x.removeAttribute("hidden");
    x.style.backgroundColor = "white";
    let birth = document.querySelector("#birthdate").value;
    let date = moment().subtract(21, 'years').format("llll");
    let age = moment().diff(birth, "years");
    let price = drinks[drink].price;
    if (age < 21 && price>2) {
        document.querySelector("#customer").innerHTML = "Must be born before";
        document.querySelector("#price").innerHTML = date;
        document.querySelector("#total").innerHTML = "To purchase " + drinks[drink].make;
        x.style.backgroundColor = "red";
    }

   
}


let drinks = [
    { make: "Milkshake", price: 0},
    { make: "Coffee", price: 1 },
    { make: "Tea", price: 2 },
    { make: "Beer", price: 10 },
    { make: "Wine", price: 3 }
];

document.getElementById("drinks").onchange = function () { myFunction() };

function myFunction() {
    let x = document.getElementById("birth");
    var i = document.getElementById("drinks").value;
    if (i < 3) {
        x.setAttribute("hidden", "");
    } else {
        x.removeAttribute("hidden");
    }
}


let time = function () {
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.querySelector("#date").innerHTML = "hi" + date;
}

btn.onclick = f(); {

}

window.onload = function () {
    time();
}
