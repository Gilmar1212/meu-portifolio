/*  $("nav a").click(function(e){
	e.PreventDefault;
	var id =$(this).attr('href');
	targetOffset=$(id).offset().top;
	$('html,body').animate({
		scrollTop:targetOffset-220
	},500);
});  */
var menu = document.querySelectorAll("ul a");

for(let i = 0; i < menu.length;i++){
	menu[i].addEventListener('click',(e)=>{
		e.preventDefault();
		var contaDistanciaDaTela =menu[i].offsetTop;
		let body = document.querySelector("body");
		menu[i].animate([
			{transform: 'translateY(0px)' }
		],{duration:1000,
			iterations:Infinity
			
		});
		
	});
}