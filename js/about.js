function scroll() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById('about').style.animation = "left_right";
    document.getElementById('about').style.animationDuration = "1s";
    document.getElementById('about_intro').style.animation = "opacity";
    document.getElementById('about_intro').style.animationDuration = "1.5s";
  }
  if (window.scrollY > 550) {
    document.getElementById('teams').style.animation = "left_right";
    document.getElementById('teams').style.animationDuration = "1s";
    document.getElementById('teams').style.transform = "translateX(0px)"
    document.getElementById('mission').style.animation = "left_right";
    document.getElementById('mission').style.animationDuration = "1s";
    document.getElementById('mission').style.transform = "translateX(0px)"
    document.getElementById('vision').style.animation = "right_left";
    document.getElementById('vision').style.animationDuration = "1s";
    document.getElementById('vision').style.transform = "translateX(0px)"
    document.getElementById('facility').style.animation = "right_left";
    document.getElementById('facility').style.animationDuration = "1s";
    document.getElementById('facility').style.transform = "translateX(0px)"
  }
}

var mybutton = document.getElementById('myBtn');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
    mybutton.style.animation = "down_up 0.5s";
  } else {
    mybutton.style.animation = "up_down 0.5s";
    setTimeout(()=> {mybutton.style.display = "none";},500);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scroll();
  scrollFunction();
};