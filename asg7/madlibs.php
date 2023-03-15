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
    <!-- <script src="script.js" defer></script> -->
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
        <h1>Mad Libs! Create your own story by giving us some words...</h1>
        <?php
        $location = $_POST['location'];
        $subject = $_POST['subject'];
        $adj1 = $_POST['adj1'];
        $animal = $_POST['animal'];
        $adj2 = $_POST['adj2'];
        $food = $_POST['food'];
        $adj3 = $_POST['adj3'];
        $noun = $_POST['noun'];


        print("It was another late night study session in the $location. I was studying for my $subject exam when a $adj1 $animal entered the room and told me to hand in $adj2 $food I was eating. I said that I am a hungry student and this is the only food I have left for the semester. But the $adj1 $animal did not want to take a no as an answer, so I had to call my $adj3 $noun for help. $adj3 $noun quickly came and saved me from the hangry  $animal.");

        ?>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>

        <div id="waveSpace">
        </div>
    </div>
    <footer>
        <p> &copy; 2022 Aigerim Zhusubalieva</p>
    </footer>
</body>
</html>

