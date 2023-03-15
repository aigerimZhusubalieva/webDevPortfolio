function crap(){
    let img = new Array ("dice_1.gif", "dice_2.gif", "dice_3.gif", "dice_4.gif", "dice_5.gif", "dice_6.gif")
    
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    var total = die1 + die2;

    let result = " <h3 class=header>The result is:</h3> <p>";
    result += "<p> <img src=images/" + img[die1-1] + "> <p>";
    result += "<p> <img src=images/" + img[die2-1] + "> <p>";
    result += "<p>"+total + "<p>";

    if(total == 7){
        result += "CONGRATULATIONS! YOU WON 7 YEARS OF LUCK <p> Give an A to this assignment to claim your luck"
    }
    else if(total == 12){
        result += "CONGRATULATIONS! YOU WON THE GRAND PRIZE: 12 YEARS OF LUCK <p> Give an A as this student's final grade to claim your luck"
    }else{
        result += "Awwwww... Better luck next time :)"
    }

    let htmlhead = "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='../style.css'> <link rel='stylesheet' href='crap.css'> <script src='crap.js' defer></script> <link rel='icon' type='image/x-icon' href='../images/icons8-girl-32.png'> <title>Crap Game</title> </head> <body>";
    document.open();
    document.write(htmlhead);
    document.title = "Game of luck";
    document.write(result);
    document.write("<p><button id = 'crapR' onclick='crap()'> try your luck again</button>")
    document.write("<footer> <p> &copy; 2022 Aigerim Zhusubalieva</p> </footer>")
}