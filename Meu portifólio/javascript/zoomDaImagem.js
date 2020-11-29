
var selecionaImagens = document.querySelectorAll(".template");
var setImagemModal = document.querySelector("#insere-Imagem"); 
var manipulaOModal = document.querySelector(".modal-imagens-hidden");
var btnFechar = document.querySelector("#btn-fechar")

var zoomDeImagem  =  {
  criaZoom(){
    for(let i = 0; i < selecionaImagens.length;i++){
      selecionaImagens[i].addEventListener('click',()=>{
        let setImagem  = selecionaImagens[i].getAttribute('src');
        setImagemModal.setAttribute('src',setImagem);
        manipulaOModal.classList.add("modal-imagens-visible");
        zoomDeImagem.melhoraResolucaoImagem();
       
      });
     
    }
  },
  fechaImagem(){
    btnFechar.addEventListener('click',()=>{
      manipulaOModal.classList.remove("modal-imagens-visible");
    });
   manipulaOModal.addEventListener('click',()=>{
      if(manipulaOModal){
        manipulaOModal.classList.remove("modal-imagens-visible");
      }
    });
  },
   melhoraResolucaoImagem(){
    if(setImagemModal.naturalHeight >="2180"){
        setImagemModal.style.height = "300vh";
    }else if(setImagemModal.naturalHeight <="2180"){
      setImagemModal.style.height = "inherit";
    }
  } 
}

zoomDeImagem.criaZoom();
zoomDeImagem.fechaImagem();