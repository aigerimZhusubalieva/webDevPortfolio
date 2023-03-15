$(document).ready(function(){
	$("#backgroundImageBody").css({
		"background-image": "url('../img/back.jpg')",
	});

	$("#subnav li").each(function(){
		$(this).css({
			"display":"inline-block",
			"color":"black",
			"margin":"10px",
			"font-size":"20px",
			"pointer":"cursor"
		});
	});

	$("#l1").bind("click", function(){
		$(".app").hide();
		$("#t1").fadeIn("slow");
	});
	$("#l2").bind("click", function(){
		$(".app").hide();
		$("#t2").css({
			"display": "flex",
			"font-size": "45px",
			"font-family": "monospace"
		});
	});
	$("#l3").bind("click", function(){
		$(".app").hide();
		$("#t3").fadeIn("slow");
	});
});