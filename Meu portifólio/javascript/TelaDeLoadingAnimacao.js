var animacoesDeLogin = {
    animacaoDeLoading(){
    let loading = document.querySelector(".loading");
    if(window.length <= 0 ){
        loading.classList.add("rotacao");
    }
    },
     removeModal(){
        let modalLogin = document.querySelector(".modal-loading");
        modalLogin.classList.add("removeModal");
    }  
}

    window.addEventListener('load',()=>{
    var armazenaAnimacoes = animacoesDeLogin;
    armazenaAnimacoes.animacaoDeLoading();
    setTimeout(()=>{
        armazenaAnimacoes.removeModal();
    },4000)
});
