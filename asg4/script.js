var form = document.getElementById("myForm");
function handleForm(event) { 
	event.preventDefault(); 
	checkHoliday();
} 
form.addEventListener('submit', handleForm);

class Holiday {
	constructor(name, imgsrcv, imgsrch){
		this.name = name;
		this.imgsrcv = imgsrcv;
		this.imgsrch = imgsrch;
	}

	getimg(){
		return this.imgsrc;
	}

	getname(){
		return this.name;
	}
};

const LaborDay = new Holiday('Labor Day', "labordayv.jpg", "labordayh.jpg");
const FallBreak = new Holiday("Fall Break", "fallbreakv.jpg", "fallbreakh.jpg");
const Thanksgiving = new Holiday("Thanksgiving", "thanksgivingv.jpg", "thanksgivingh.jpg");
const WinterBreak = new Holiday("Winter Break", "winterbreakv.jpg", "winterbreakh.jpg");
const Christmas = new Holiday("Christmas", "christmasv.jpg", "christmash.jpg");
const PresidentsDay = new Holiday("Presidents' Day", "presidentv.jpg", "presidenth.jpg");
const SpringBreak = new Holiday("Spring Break", "springbreakv.jpg", "springbreakh.jpg");
const MemorialDay = new Holiday("Meorial Day", "memorialdayv.jpg", "memorialdayh.jpg");
const Juneteenth = new Holiday("Juneteenth", "juneteenthv.jpg", "juneteenthh.jpg");
const IndependenceDay = new Holiday("Independence Day", "independecedayv.jpg", "independecedayh.jpg");

var holidays = {
	"582022":LaborDay,
	"1092022":FallBreak,
	"23102022":FallBreak,
	"24102022":Thanksgiving,
	"23112022":WinterBreak,
	"24112022":WinterBreak,
	"25112022":Christmas,
	"26112022":WinterBreak,
	"27112022":WinterBreak,
	"28112022":WinterBreak,
	"29112022":WinterBreak,
	"30112022":WinterBreak,
	"31112022":WinterBreak,
	"102023":WinterBreak,
	"202023":WinterBreak,
	"2012023":PresidentsDay,
	"1322023":SpringBreak,
	"1422023":SpringBreak,
	"1522023":SpringBreak,
	"1622023":SpringBreak,
	"1722023":SpringBreak,
	"1822023":SpringBreak,
	"1922023":SpringBreak,
	"2942023":MemorialDay,
	"1952023":Juneteenth,
	"462023":IndependenceDay
};

function checkHoliday(){
	let input = document.getElementById("myDate").value;
	let date = new Date(input);
	let day = date.getUTCDate();
	let month = date.getUTCMonth();
	let year = date.getUTCFullYear();
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let outputDate = months[month] + " " + day.toString() + ", " + year.toString();
	thisHoliday = holidays[day.toString()+month.toString()+year.toString()];
	if (thisHoliday == undefined) {
		document.getElementById("output").innerHTML = outputDate+" is not an NYU holiday :(";
		document.getElementById("outputImgv").innerHTML = '<img src="img/nov.jpg" alt="this is not a holiday" image!">';
		document.getElementById("outputImgh").innerHTML = '<img src="img/noh.jpg" alt="this is not a holiday" image!>';
	
	}else{
		document.getElementById("output").innerHTML = outputDate+" is a school holiday at NYU :)" +"<br>" + "It's " + thisHoliday.name + "!";
		document.getElementById("outputImgv").innerHTML = '<img src="img/'+thisHoliday.imgsrcv+'"alt="'+thisHoliday.name+ ' image!">';
		document.getElementById("outputImgh").innerHTML = '<img src="img/'+thisHoliday.imgsrch+'" alt="'+thisHoliday.name+ ' image!">';
	}
	document.getElementById("citation").innerHTML = "(All images are taken from unsplash.com)"
};






