// JavaScript source code
let f = function () {
    // alert('You Clicked!');
    let btn = document.querySelector("#btn");
    var x = document.getElementById("panel");

    if (btn.innerHTML === "Hide Header") {
        x.style.display = "none";
        btn.innerHTML = "Show Header";
        btn.style.margin = "0px 0px 0px 0px";
    } else {
        x.style.display = "block";
        btn.innerHTML = "Hide Header";
        btn.style.margin = "-50px 0px 0px 0px";
    }
    btn.textContent = result;
}
window.onload = function () {
    document.querySelector("#btn").onclick = f;
}