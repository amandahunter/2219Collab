// Navbar - KS & BC - April 5 
function toggleResponsiveNavMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
//Scroll Back to Top Button - BC - April 5 
var topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Slider - KS April 14 

var slider_img = document.querySelector('.slider-img');
var images = [ 'S1_1.jpg', 'S2_2.jpg', 'S1_3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "Images/"+images[i]);
	
}

// ks april 17 slider 2 & 3 

var slider_img1 = document.querySelector('.static-img');
var images1 = [ 'static_elements.jpg', 'static_1.jpg'];
var k = 0;

function prev1(){
	if(k <= 0) k = images1.length;	
	k--;
	return setImg1();			 
}

function next1(){
	if(k >= images1.length-1) k = -1;
	k++;
	return setImg1();			 
}

function setImg1(){
	return slider_img1.setAttribute('src', "Images/"+images1[k]);
	
}



// 2 ks

var slider_image2 = document.querySelector('.dynamic-img');
var img2 = [ 'dynamic_elements.jpg', 'dynamic_1.jpg','dynamic_2.jpg'];
var l = 0;

function prev2(){
	if(l <= 0) l= img2.length;	
	l--;
	return setImg2();			 
}

function next2(){
	if(l >= img2.length-1) l = -1;
	l++;
	return setImg2();			 
}

function setImg2(){
	return slider_image2.setAttribute('src', "Images/"+img2[l]);
	
}
// 3 ks 

var slider_image4 = document.querySelector('.limit-img');
var img4 = [ 'Limit_1.jpg', 'Limit_4.jpg','Limit_3.jpg'];
var n= 0;

function prev4(){
	if(n <= 0) n= img2.length;	
	n--;
	return setImg4();			 
}

function next4(){
	if(n >= img2.length-1) n = -1;
	n++;
	return setImg4();			 
}

function setImg4(){
	return slider_image4.setAttribute('src', "Images/"+img4[n]);

}


// steph's slider 

var slider_image3 = document.querySelector('.storymap-img');
var img3 = [ 'WhoWater.png', 'HowWater.png', 'WhatWater.png', 'WhereWater.png', 'WhyWater.png'];
var m = 0;

function prev3(){
	if(m <= 0) m= img3.length;	
	l--;
	return setImg3();			 
}

function next3(){
	if(m >= img3.length-1) m = -1;
	m++;
	return setImg3();			 
}

function setImg3(){
	return slider_image3.setAttribute('src', "Images/"+img3[m]);
	
}