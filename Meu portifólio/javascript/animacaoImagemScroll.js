const target = document.querySelectorAll('[data-anime]');
const animationClass='animate';


 
    function animaImagens(){
           window.addEventListener("load",()=>{
            target.forEach(function(element){
                setTimeout(()=>{
                    element.classList.add(animationClass);
                },4050)
              
 
        });
        });
    }
  
        animaImagens();
    