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
  scrollFunction();
  if (window.scrollY > 100) {
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
  if (window.scrollY > 300) {
    document.getElementById('1').style.animation = "left_right 1s";
    document.getElementById('1').style.transform = "translateX(0px)"
    document.getElementById('2').style.animation = "left_right 1s";
    document.getElementById('2').style.transform = "translateX(0px)"
    document.getElementById('3').style.animation = "opacity 1s";
    document.getElementById('3').style.transform = "translateX(0px)"
    document.getElementById('4').style.animation = "right_left 1s";
    document.getElementById('4').style.transform = "translateX(0px)"
    document.getElementById('5').style.animationDuration = "right_left 1s";
    document.getElementById('5').style.transform = "translateX(0px)"
  }
};

function clicked() {
  let a = document.getElementById('button');
  a.style.boxShadow = "none";
  setTimeout(() => {
    a.style.boxShadow = "10px 10px 10px black";
  }, 100);
}