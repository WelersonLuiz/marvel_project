var slider = document.getElementById("comics-list");

position_slider = slider.style.left;

function buttonNext(){
    console.log(position_slider);
    
    if (slider.style.left == position_slider){
        slider.style.left = (-280*4) + "px";
    }else{
        slider.style.left = (-100) + "px";
        setTimeout(function slideBlock(){
                slider.style.left = 0 + "px";
                console.log(slider.style.left);
            }, 100);
    }
}


function buttonPrevious(){

    if (slider.style.left == "0px"){
        slider.style.left = (-300) + "px";
        setTimeout(function slideBlock(){
                slider.style.left = 0 + "px";
                console.log(slider.style.left);
            }, 50);
    }else{
        slider.style.left -=  + "px";
    }
}