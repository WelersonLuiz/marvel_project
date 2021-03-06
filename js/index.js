//Inicialização da variável slideIndex
var slideIndex = 1;

//Recebe o numero de slides
var slides = document.getElementsByClassName("slider-image");

//Recebe a posição do container de slides
var container_position = document.getElementById("img-container");

//Define a largura do container para todos os slides disponíveis
document.getElementById("img-container").style.width = slides.length*1000+"px";

//Timer passando os slides a cada 5 segundos
var myTimer = setInterval(function rollSlide(){    
    nextSlide();
    }, 5000);

//Inicia a posição da variável para manipulação.
container_position.style.left = "0px";

//Função passa pro próximo slide
function nextSlide(){
    //Verifica se o index de imagem está no range correto e resseta se estourar
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
  
    //Seta a posição do container com relação ao index do slide
    container_position.style.left = (-1000*slideIndex) + "px";

    //Resseta o timer de 5 segundos
    clearInterval(this.myTimer);
    this.myTimer = setInterval(function rollSlide(){    
        nextSlide();
        }, 5000);
    
    //Incrementa o slide;
    slideIndex++;
}

function previousSlide(){
    //Decrementa o slide;
    slideIndex--;

    if (slideIndex == 0){
        //Seta a posição do container com relação ao index do slide
        container_position.style.left = (-1000*(slides.length-1)) + "px";
        slideIndex = slides.length;
    }else{
        //Seta a posição do container com relação ao index do slide
        container_position.style.left = (-1000*(slideIndex-1)) + "px";  
    }
    
    //Resseta o timer de 5 segundos
    clearInterval(this.myTimer);
    this.myTimer = setInterval(function rollSlide(){    
        nextSlide();
        }, 5000);
}