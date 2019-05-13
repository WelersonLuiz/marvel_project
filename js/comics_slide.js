var slider = document.getElementById("comics-list");

left = 0;
num_comics = $('body ul li').length-4;
page_size = -document.querySelector("li").scrollWidth*4;

function buttonNext(){
    if (num_comics > 0){
        if(num_comics >= 4){
            left += page_size;
            slider.style.left = left + "px";
            num_comics -= 4;
        }else{
            left -= document.querySelector("li").scrollWidth*num_comics;
            slider.style.left = left + "px";
            num_comics = 0;
        }
    }else{
        slider.style.left = (left+100) + "px";
        setTimeout(function slideBlock(){
                slider.style.left = left + "px";
            }, 50);
    }
}

function buttonPrevious(){
    if (num_comics == $('body ul li').length-4){
        slider.style.left = (left-100) + "px";
        setTimeout(function slideBlock(){
                slider.style.left = 0 + "px";
            }, 50);
    }else{       
        if(num_comics+4 <= $('body ul li').length-4){
            left -= page_size;
            slider.style.left = left + "px";
            num_comics += 4;
        }else{
            num_comics = $('body ul li').length-num_comics;
            left = 0;
            slider.style.left = 0 + "px";
        }

    }
}