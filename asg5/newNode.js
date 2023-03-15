var btn = document.getElementById("btn")
btn.addEventListener("click", f);

function f(){
	var node = document.createElement("li");
    var textnode = document.createTextNode("A5");
    var a = document.createElement('a');
    a.appendChild(textnode); 
    a.title = "A5"; 
    a.href ="index.html";
    node.appendChild(a);
    document.getElementById("nav").appendChild(node);

    var node2 = document.createElement("li");
    var textnode2 = document.createTextNode("Postcards");
    var a2 = document.createElement('a');
    a2.appendChild(textnode2); 
    a2.title = "Postcards"; 
    a2.href ="products.html";
    node2.appendChild(a2);
    document.getElementById("nav").appendChild(node2);

    let listItems = document.querySelectorAll('li');
	for (let i = 0; i < listItems.length; i++) {            
  		listItems[i].className = 'newclass';
	}
}

