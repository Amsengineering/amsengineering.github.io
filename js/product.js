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

        if (window.scrollY > 40) {
            document.getElementById('wrapper_right_1').style.animation = "right_left 1s";
            document.getElementById('wrapper_right_1').style.transform = "translateX(0px)";
        }
        if (window.scrollY > 480) {
            document.getElementById('wrapper_left_2').style.animation = "left_right 1s";
            document.getElementById('wrapper_left_2').style.transform = "translateX(0px)";
        }
        if (window.scrollY > 935) {
            document.getElementById('wrapper_right_2').style.animation = "right_left 1s";
            document.getElementById('wrapper_right_2').style.transform = "translateX(0px)";
        }
        if (window.scrollY > 1410) {
            document.getElementById('wrapper_left_3').style.animation = "left_right 1s";
            document.getElementById('wrapper_left_3').style.transform = "translateX(0px)";
        }
        if (window.scrollY > 1870) {
            document.getElementById('wrapper_right_3').style.animation = "right_left 1s";
            document.getElementById('wrapper_right_3').style.transform = "translateX(0px)";
        }
    
}