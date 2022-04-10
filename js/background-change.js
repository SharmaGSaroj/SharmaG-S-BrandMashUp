var image = [
"/images/our-brew-background.jpg","/videos/animated.gif"]

var imageHead = document.getElementById("header");

var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + image[i] + ")";
      i = i + 1;
      if (i == image.length) {
        i =  0;
      }
}, 7000);