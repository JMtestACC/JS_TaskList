// $("li").click(function(){	// w przypadku nieistniejących jeszcze elemntów, trzeba użyć on(), zamiast click(), żeby funcjonalność dla nowych elementów była taka sama jak dla starych
$("ul").on("click", "li", function(){	// nasłuchujemy cały UL, i funkcja działa dla wszystkich LI w UL
	$(this).toggleClass("completed");	// JEDNA LINIJKA ZASTAPILISMY CALY PONIZSZEY KOD...
	// console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none",
	// 	});
	// }
	// else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through",
	// 	});
	// }
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	// TUTAJ ODWOLUJEMY SIE DO LI, NIE DO SPAN PONIWAZ WYZEJ WYWALALISMY RODZICA - LI
	});
	event.stopPropagation();	// 	UZYCIE EVENTU I METODY STOPPROPAGATION ZAPOBIEGA BABELKOWANIU ZDARZEN (PO KLIKNIECIU NIE BEDA WYKONYWAC SIE KOMENDY W UL, DIV I BODY)
});

// $("ul").click(function(){
// 	alert("clicked a ul!");
// });

// $("div").click(function(){
// 	alert("clicked a div!");
// });

// $("body").click(function(){
// 	alert("clicked a body!");
// });

// $("input[type='text']").keypress(function(event){

$("#newTodo").keypress(function(event){
	if(event.which === 13) {
		var todoText = ($(this).val());
		$("#todoList").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")	//w środku nie może być "" - zamiast tego trzeba dać ''
	}
});

// $("input[type='text']").keypress(function(){
// 	alert("Some Key pressed");
// });

$(".fa-plus").click(function(){
	$("#newTodo").fadeToggle();
});

