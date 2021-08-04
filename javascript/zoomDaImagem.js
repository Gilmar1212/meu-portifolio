var body = document.querySelector("body");
var selecionaImagens = document.querySelectorAll(".template");
var setImagemModal = document.querySelector("#insere-Imagem"); 
var manipulaModal = document.querySelector(".modal-imagens-hidden");
var btnFechar = document.querySelector("#btn-fechar")

var zoomDeImagem  =  {
  criaZoom(){
    for(let i = 0; i < selecionaImagens.length;i++){
      selecionaImagens[i].addEventListener('click',()=>{
        let setImagem  = selecionaImagens[i].getAttribute('src');
        setImagemModal.setAttribute('src',setImagem);
        manipulaModal.classList.add("modal-imagens-visible");
        zoomDeImagem.melhoraResolucaoImagem();
      });
     
    }
  },
  fechaImagem(){
    btnFechar.addEventListener('click',()=>{
      manipulaModal.classList.remove("modal-imagens-visible");
    });
   manipulaModal.addEventListener('click',()=>{
      if(manipulaModal){
        manipulaModal.classList.remove("modal-imagens-visible");
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