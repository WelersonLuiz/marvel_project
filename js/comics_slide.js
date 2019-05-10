var slider = document.getElementById("comics-container");

temp = slider.style.left;
function buttonNext(){
    console.log("Clique");

    console.log(temp);
    if (slider.style.left == temp){
        slider.style.left = (-280*4) + "px";
        console.log("if");
    }else{
        slider.style.left = 0 + "px";
        console.log("else");
    }
    console.log(slider.style.left);
}