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
        <?php

            $n1 = floatval($_POST['n1']);
            $n2 = floatval($_POST['n2']);
            $o = $_POST['operator'];

            if($o == "+"){
                $res = $n1 + $n2;
                echo "<h1>" . "$n1 + $n2 = $res" . "</h1>";
            }elseif($o == "-"){
                $res = $n1 - $n2;
                echo "<h1>" . "$n1 - $n2 = $res" . "</h1>";
            }elseif($o == "*"){
                $res = $n1 * $n2;
                echo "<h1>" . "$n1 * $n2 = $res" . "</h1>";
            }elseif($o == "/"){
                $res = $n1 / $n2;
                echo "<h1>" . "$n1 / $n2 = $res" . "</h1>";
            }

        ?>
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