function navDropdown() {
    var div = document.getElementById("dropdown");
    if (div.style.display == "none") {
        console.log(div.style.display);
        div.style.display = "block";
        console.log("Dropdown acionado");
    } else {
        console.log(div.style.display);
        div.style.display = "none";
        console.log(div.style.display);
    }
}
