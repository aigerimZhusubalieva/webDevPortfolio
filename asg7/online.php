<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A7</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="../images/icons8-girl-32.png">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js" defer></script>
    <script src="../script.js" defer></script>
</head>
<body id="backgroundImageBody">
    <header id="menu">
        <div onclick="changeMenuBar(this)" class="menuContainer">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div class="nav" id="nav">
        <nav>
            <ul >
                <li><a href="../index.html">Home</a></li>
                <li><a href="../contact.html">A1</a></li>
                <li><a href="../asg2/index.html">A2</a></li>
                <li><a href="../asg3/index.html">A3</a></li>
                <li><a href="../asg4/index.html">A4</a></li>
                <li><a href="../asg5/index.html">A5</a></li>
                <li><a href="../asg6/index.html">A6</a></li>
                <li><a href="index.html">A7</a></li>
                <li><a href="products.html">Postcards</a></li>
            </ul>
        </nav>
        <a href="../contact.html"> <button>Contact</button> </a>
        </div>
    </header>
    <div id="main">
        <h1>Thank you for letting us buy you some time!</h1>
        <h3>Here is your receipt</h3>
        <div id="receipt">
            <?php

            $name = $_POST['name'];
            $email = $_POST['email'];
            $time = $_POST['time'];
            $amount = floatval($_POST['days']);

            if($time == "future"){
                $unitPrice = 150;
            }else{
                $unitPrice = 100;
            }

            $total = $unitPrice * $amount;

            echo '<p class="center">Name: '. $name. ' </p>';
            echo '<p class="left">Email: '. $email. ' </p>';
            echo '<p class="left">Item Purchased: '. $time. ' </p> <p class="left price"> with unit price '. $unitPrice . '$</p>';
            echo '<p class="left price">Amount: ' . $amount. ' </p><br><br><br><br>';
            echo '<p class="right">Total = '. $total. '$</p>';


        ?>
            <!-- <p class="center">Name: 
            <p class="center">Email: </p> 
            <p class="left">Item purhased: </p> <p class="left price"> with unit price x$</p>
            <p class="left price">Amount: </p>
            <br><br><br><br>
            <p class="right">Total = x$</p> -->
        </div>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
    <footer>
        <p> &copy; 2022 Aigerim Zhusubalieva</p>
    </footer>
</body>
</html>