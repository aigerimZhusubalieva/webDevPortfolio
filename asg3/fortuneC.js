let back = document.getElementById("imageC")
let randInt = Math.floor(Math.random() * 5);
const imgSrc = ["url('images/1.jpg')", "url('images/2.jpg')", "url('images/3.jpg')", "url('images/4.jpg')", "url('images/5.jpg')"]
back.style.backgroundImage = imgSrc[randInt]
back.style.backgroundSize = "cover"

const fortune = [
    "&#10024;Soon you will be sitting on top of the world&#10024;",
    "&#10024;No snowflake in an avalanche ever feels responsible&#10024;",
    "&#10024;I cannot help you, for I am just a [web] cookie :)&#10024;",
    "&#10024;Like the river flow into the sea. Some things are just meant to be&#10024;",
    "&#10024;You don't have to be faster than the bear, you just have to be faster than the slowest person running from it&#10024;"]

let afortune = document.getElementById("fortuneC")
afortune.innerHTML = fortune[randInt]