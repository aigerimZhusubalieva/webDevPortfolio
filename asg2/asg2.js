let btnHover = true;

function change(){
    if(btnHover){
        btnHover = false
        let myMenu = document.getElementById("menu");
        myMenu.style.backgroundColor = "black";
        myMenu.style.borderRadius = "0";
        myMenu.style.fontFamily = "monospace";
        myMenu.style.color = "white";

        //get element by id
        let myLinks = document.getElementsByClassName("link");
        for (let i = 0; i<myLinks.length; i++){
            myLinks[i].style.color = "white"
        }

            let myMenuUl = document.getElementById("menuUl");
        myMenuUl.style.backgroundColor = "black";
        myMenuUl.style.color = "grey";
        myMenuUl.style.textShadow = "1px 0px 10px white";
    
        let myHome = document.getElementById("home");
        myHome.style.backgroundColor ="white";

        document.body.style.backgroundColor ="white";

        document.backgroundColor = "white";
        document.getElementById("footer").style.backgroundColor = "white"

        swapImgToSrc("images/img11.PNG", "images/img22.PNG");
    }
    else{
        btnHover=true
        let myMenu = document.getElementById("menu");
        myMenu.style.backgroundColor = "#E4C1F9";
        myMenu.style.borderRadius = "10px";
        myMenu.style.fontFamily = "'Marcellus'";
        myMenu.style.color = "black";

        //get element by id
        let myLinks = document.getElementsByClassName("link");
        for (let i = 0; i<myLinks.length; i++){
            myLinks[i].style.color = "black"
        }

        let myMenuUl = document.getElementById("menuUl");
        myMenuUl.style.backgroundColor = "#E4C1F9";
        myMenuUl.style.textShadow = "1px 0px 1px #dca6fc";
    
        let myHome = document.getElementById("home");
        myHome.style.backgroundColor ="#FCF6BD";

        document.body.style.backgroundColor ="#FCF6BD";

        document.backgroundColor = "#FCF6BD";
        document.getElementById("footer").style.backgroundColor = "#FCF6BD"
    
        swapImgToSrc("images/img1.PNG", "images/img2.PNG")
    }
    swapT()
}

// const prizes = ["potato", "trip to Bali", "a year of free Spotify", "SNL ticket", "water bottle", "GYM membership", "romantic dinner for 2", "lipgloss", "$5k sephora giftcard", "$2 target giftcard"]

// function randPrize(){
//     document.getElementById("congrats").style.visibility = "visible"
//     let randInt = Math.floor(Math.random() * prizes.length);
//     let prize = document.getElementById("prizeDisplay")

//     prize.innerHTML = prizes[randInt];
//     console.log(prize)
// }

function swapT(){
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let temp = p1.innerHTML;

    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = temp;
}

function swapImg(){
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img1src = img1.src;
    let img2src = img2.src;

    img1.src = img2src;
    img2.src = img1src;

    let group1 = document.getElementsByClassName("group2")
    let group2 = document.getElementsByClassName("group1")

    for(var pic in group1){
        group1[pic].src=img1src
    }
    for(var pic2 in group2){
        group2[pic2].src=img2src
    }
}

function swapImgToSrc(src1, src2){
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");

    img1.src = src2;
    img2.src = src1;

    let group1 = document.getElementsByClassName("group2")
    let group2 = document.getElementsByClassName("group1")

    for(var pic in group1){
        group1[pic].src=src1;
    }
    for(var pic2 in group2){
        group2[pic2].src=src2;
    }
}

