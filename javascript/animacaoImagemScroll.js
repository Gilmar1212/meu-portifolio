const target = document.querySelectorAll('[data-anime]');
 
    function animaCarregamentoDeImagens(){
           window.addEventListener("load",()=>{
            target.forEach(function(element){
                setTimeout(()=>{
                    element.classList.add('animate');
                },4050)        
        });
        });
    }
  
        animaCarregamentoDeImagens();
    