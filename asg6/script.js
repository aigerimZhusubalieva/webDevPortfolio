let var1 = true
$("#changeBtn").bind("click", function(){
	if(var1){
		var1 = false
		$("#special").css("color", "#007a00");
		$(".highlight").css({
			"border":"3px solid black",
			"background-color":"#FCF6BD",
			"box-shadow": "5px 8px black"
		});
		$("p").each(function(){
    		$(this).css({
    			"color":"rgba(169, 222, 249, 1.0)",
    			"font-family":"monospace",
    			"font-size":"20px"
    		});
    		alert($(this).text())
    	});
	}else{
		var1 = true
		$("#special").css("color", "black");
		$(".highlight").css({
			"border":"none",
			"background-color":"transparent",
			"box-shadow": "none"
		});
		$("p").each(function(){
    		$(this).css({
    			"color":"black",
    			"font-family":"inherit",
    			"font-size":"16px"
    		});
    	});
	}
	
});

$("#show1").css("display", "none");
$("#hide1").bind("click", function(){
	$("#img1").css("display", "none");
	$("#show1").css("display", "block");
	$("#hide1").css("display", "none");
});

$("#show1").bind("click", function(){
	$("#img1").css("display", "block");
	$("#show1").css("display", "none");
	$("#hide1").css("display", "block");
});

$("#show2").css("display", "none");
$("#hide2").bind("click", function(){
	$("#img2").css("display", "none");
	$("#show2").css("display", "block");
	$("#hide2").css("display", "none");
});

$("#show2").bind("click", function(){
	$("#img2").css("display", "block");
	$("#show2").css("display", "none");
	$("#hide2").css("display", "block");
});

$("#show3").css("display", "none");
$("#hide3").bind("click", function(){
	$("#img3").css("display", "none");
	$("#show3").css("display", "block");
	$("#hide3").css("display", "none");
});

$("#show3").bind("click", function(){
	$("#img3").css("display", "block");
	$("#show3").css("display", "none");
	$("#hide3").css("display", "block");
});

$("#fadeOut").bind("click", function(){
	$("#img1").css("display", "block");
	$("#img2").css("display", "block");
	$("#img3").css("display", "block");
	$("#imageApp img").fadeOut("slow");
	$("#hide1").css("display", "none");
	$("#hide2").css("display", "none");
	$("#hide3").css("display", "none");
	$("#show1").css("display", "block");
	$("#show2").css("display", "block");
	$("#show3").css("display", "block");

});

let xpositive = true
$("#animateBtn").bind("click", function(){
	let maxX = $(window). width() - 300;
	let cat = $("#cat");
	let p = cat.position();
	let pleft = p.left;
	let newLeft = pleft
	if(xpositive){
		newLeft = newLeft+200 + "px"
	}else{
		newLeft = newLeft-200 + "px"
	}
	cat.css({
		"left":newLeft,
	})
	if(pleft >= maxX){
		cat.css({
			"transform":"rotateY(180deg)",
		});
		xpositive = false;
	}
	if(pleft<=0){
		cat.css({
			"transform":"rotateY(0deg)",
		});
		xpositive = true;
	}
});

$(function(){
	$("input").focus(function(){
		$(this).css({
			"border":"2px solid blue",
			"box-shadow":"none"
		});
	});
	$("input").blur(function(){
		if($(this).val().length == 0){
			alert($(this).attr('name') + " is empty. please fill it out :)");
			$(this).css({
				"border":"2px solid red",
				"box-shadow":"8px 8px black"
			});
		}else{
			$(this).css({
				"border":"2px solid black",
				"box-shadow":"8px 8px black"	
			});
		}
		if(validateForm()){
			$("#demo").css("display", "block");
		}else{
			$("#demo").css("display", "none");
		}
	});
});

function validateForm() {
  var isValid = true;
  $('input').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  return isValid;
}