document.getElementById("ship").addEventListener("change", selectShipping);
document.getElementById("pickup").addEventListener("change", selectShipping);
formElements = document.getElementById("myForm").elements;
var ship = false

function selectShipping(){
	if(document.getElementById('ship').checked){
		ship = true
		document.getElementById('shipping').style.display="block";
		document.getElementById("totalwship").innerHTML = stotal + 50; 
	}else if(document.getElementById('pickup').checked){
		document.getElementById('shipping').style.display="none";
		document.getElementById("totalwship").innerHTML = stotal; 
		ship = false
	}
}

var stotal = 0;
var prices = document.getElementsByClassName("price");
var qt = document.getElementsByClassName("qt");
var subtotal = document.getElementsByClassName("subtotal");
var items = ["Sri Lanka", "Albania", "Saadiyat Beach", "In the Aier", "Coney Island"]

for (let i = 0; i < qt.length; i++){
	qt[i].addEventListener("change", total);
}

function total(){
	stotal = 0
	for (let i = 0; i < qt.length; i++){
		subtotal[i].value = prices[i].value * qt[i].value;
  		stotal += prices[i].value * qt[i].value;
	}
	document.getElementById("grandtotal").value=stotal;
}

document.getElementById('submit-btn').addEventListener("click", function(e){
  e.preventDefault();
  receipt();
});

function receipt(){
	
	if(formElements[0].value.length == 0){
		formElements[0].style.backgroundColor = "red";
		alert("Full name is missing!")
		return false;
	}
	if(!validateEmail(formElements[1].value)){
		formElements[1].style.backgroundColor = "red";
		alert("Email is missing or of incorrect form!")
		return false;
	}
	if(!validateRadio()){
		alert("Please select a shipping method")
		return false;
	}
	if(ship){
		if(formElements[4].value.length == 0){
			formElements[4].style.backgroundColor = "red";
			alert("Address is missing!")
			return false;
		}
		if(formElements[5].value.length == 0){
			formElements[5].style.backgroundColor = "red";
			alert("City is missing!")
			return false;
		}
		if(formElements[6].value == "selectState"){
			alert("Select a state")
			return false;
		}
		if(formElements[7].value.length != 5 || isNaN(formElements[7].value)){
			formElements[7].style.backgroundColor = "red";
			alert("Invalid zip code")
			return false;
		}
	}
	if(formElements[8].value.length == 0){
		formElements[8].style.backgroundColor = "red";
		alert("Card name is missing!")
		return false;
	}
	if(formElements[9].value.length != 16 || isNaN(formElements[9].value)){
		formElements[9].style.backgroundColor = "red";
		alert("Incorrect card number")
		return false;
	}
	if(isNaN(formElements[10].value) || parseInt(formElements[10].value)>12 || parseInt(formElements[10].value)<1){
		formElements[10].style.backgroundColor = "red";
		alert("Incorrect exp month")
	 	return false;
	}
	if(isNaN(formElements[11].value) || parseInt(formElements[11].value)<2022){
		formElements[11].style.backgroundColor = "red";
		alert("Incorrect exp year")
	 	return false;
	}
	if(isNaN(formElements[12].value) || formElements[12].value.length != 3){
		formElements[12].style.backgroundColor = "red";
		alert("Incorrect CVV")
	 	return false;
	} 

	printReceipt();
}

function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(re)){
  	return true;
  }else{
  	return false;
  }
}

function validateRadio(){
	var radios = document.getElementsByName("ship");
    var radiovalid = false;

    var i = 0;
    while (!radiovalid && i < radios.length) {
        if (radios[i].checked) radiovalid = true;
        i++;        
    }
    return radiovalid;
}

function printReceipt(){
	document.getElementById("receipt").style.display = "block";

	document.getElementById("rname").innerHTML += formElements[0].value;
	var rdate = new Date()
	document.getElementById("rdate").innerHTML += rdate;
	var rsubtotal = document.getElementById("grandtotal").value;
	document.getElementById("rsubtotal").innerHTML += rsubtotal;
	if(ship){var rshipping = 50}
	else{var rshipping = 0}
	document.getElementById("rshipping").innerHTML += rshipping;
	var rtotal = stotal+rshipping;
	document.getElementById("rtotal").innerHTML += rtotal;
	var rcard = formElements[9].value.slice(-4);
	document.getElementById("rcard").innerHTML += rcard;

	var ritems = ""

	for (let i = 0; i < qt.length; i++){
		if (qt[i].value != 0){
			ritems+= "<li>" + items[i] + " " + prices[i].value + " x "+ qt[i].value + "</li>";
		}
	}

	document.getElementById("ritems").innerHTML += ritems;
	document.getElementById('submit-btn').disabled = true;
	document.getElementById("receipt").scrollIntoView({behavior: 'smooth'});


}