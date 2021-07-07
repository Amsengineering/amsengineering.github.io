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
}