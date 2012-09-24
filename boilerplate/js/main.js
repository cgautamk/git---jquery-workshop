// console.log("main.js is loaded");


$(document).ready(function(){
  // will only execute jquery after page is rendered 

	$("img").on("dblclick", function(){
		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();
	});

// $("img").click(function(){
 		//here
//	$("img").width(200);

 //	 });
 
});