function show() {
    document.getElementById("side-menu").classList.toggle("show")
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}