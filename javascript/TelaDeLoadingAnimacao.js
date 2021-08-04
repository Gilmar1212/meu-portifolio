var carregamentoDePagina = {
    animacaoDeLoading(){
    let loading = document.querySelector(".loading");
        loading.classList.add("rotacao");
    },
     removeModal(){
        let modalLogin = document.querySelector(".modal-loading");
        modalLogin.classList.add("removeModal");
    }  
}
    window.addEventListener('load',()=>{
    var armazenaAnimacoes = carregamentoDePagina;
    armazenaAnimacoes.animacaoDeLoading();
    setTimeout(()=>{
        armazenaAnimacoes.removeModal();   
    },4000)
});
