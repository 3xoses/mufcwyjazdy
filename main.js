$('.carousel').carousel()

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.card'
})
.setClassToggle('.card', 'show')
.addTo(controller);

CookieAlert.init();

function myFunction() {
    var x = document.getElementById("read-more");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

