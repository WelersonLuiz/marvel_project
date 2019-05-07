function responsiveNavBar() {
    var nav = document.getElementById("myNavBar");
    if (nav.className === "topnav") {
        nav.className += "responsive";
    } else {
        nav.className = "topnav";
    }
}

//Inicialização da variável slideIndex
var slideIndex = 0;

//Recebe o numero de slides
var slides = document.getElementsByClassName("slider-image");

//Recebe a posição do container de slides
var container_position = document.getElementById("img-container");

//Define a largura do container para todos os slides disponíveis
document.getElementById("img-container").style.width = slides.length*1000+"px";

//Timer passando os slides a cada 5 segundos
var myTimer = setInterval(function rollSlide(){    
    nextSlide();
    }, 7000);

//Função passa pro próximo slide
function nextSlide(){
    console.log(slideIndex);
    //Verifica se o index de imagem está no range correto e resseta se estourar
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
  
    //Seta a posição do container com relação ao index do slide
    container_position.style.left = (-1000*slideIndex) + "px";

    //Resseta o timer de 5 segundos
    clearInterval(myTimer);
    myTimer = setInterval(function rollSlide(){    
        nextSlide();
        }, 7000);
    
    //Incrementa o slide;
    slideIndex++;
}

function previousSlide(){
    console.log(slideIndex);
    if (slideIndex == 0){
        //Seta a posição do container com relação ao index do slide
        container_position.style.left = (-1000*(slides.length-1)) + "px";
        slideIndex = slides.length;
        
        //Incrementa o slide;
        slideIndex--;
    }else{
        //Seta a posição do container com relação ao index do slide
        container_position.style.left = (-1000*(slideIndex-1)) + "px";
        
        //Incrementa o slide;
        slideIndex--;
    }
    
    //Resseta o timer de 5 segundos
    clearInterval(myTimer);
    myTimer = setInterval(function rollSlide(){    
        nextSlide();
        }, 7000);
}