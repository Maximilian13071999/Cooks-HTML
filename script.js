var slider1 = document.getElementById("cook1-input");
var image1 = document.getElementById("slider-image-1");
 
slider1.oninput = function() {
    var value = (slider1.value - slider1.min) / (slider1.max - slider1.min);
    image1.style.left = (value * (slider1.offsetWidth - image1.offsetWidth)) + "px";
};

var slider2 = document.getElementById("cook2-input");
var image2 = document.getElementById("slider-image-2");
 
slider2.oninput = function() {
    var value = (slider2.value - slider2.min) / (slider2.max - slider1.min);
    image2.style.left = (value * (slider2.offsetWidth - image2.offsetWidth)) + "px";
};

var slider3 = document.getElementById("cook3-input");
var image3 = document.getElementById("slider-image-3");
 
slider3.oninput = function() {
    var value = (slider3.value - slider3.min) / (slider3.max - slider3.min);
    image3.style.left = (value * (slider3.offsetWidth - image3.offsetWidth)) + "px";
};

var slider4 = document.getElementById("cook4-input");
var image4 = document.getElementById("slider-image-4");
 
slider4.oninput = function() {
    var value = (slider4.value - slider4.min) / (slider4.max - slider4.min);
    image4.style.left = (value * (slider4.offsetWidth - image4.offsetWidth)) + "px";
};

var slider5 = document.getElementById("cook5-input");
var image5 = document.getElementById("slider-image-5");
 
slider5.oninput = function() {
    var value = (slider5.value - slider5.min) / (slider5.max - slider5.min);
    image5.style.left = (value * (slider5.offsetWidth - image5.offsetWidth)) + "px";
};

var slider6 = document.getElementById("cook6-input");
var image6 = document.getElementById("slider-image-6");
 
slider6.oninput = function() {
    var value = (slider6.value - slider6.min) / (slider6.max - slider6.min);
    image6.style.left = (value * (slider6.offsetWidth - image6.offsetWidth)) + "px";
};

var slider7 = document.getElementById("cook7-input");
var image7 = document.getElementById("slider-image-7");
 
slider7.oninput = function() {
    var value = (slider7.value - slider7.min) / (slider7.max - slider7.min);
    image7.style.left = (value * (slider7.offsetWidth - image7.offsetWidth)) + "px";
};

var slider8 = document.getElementById("cook8-input");
var image8 = document.getElementById("slider-image-8");
 
slider8.oninput = function() {
    var value = (slider8.value - slider8.min) / (slider8.max - slider8.min);
    image8.style.left = (value * (slider8.offsetWidth - image8.offsetWidth)) + "px";
};