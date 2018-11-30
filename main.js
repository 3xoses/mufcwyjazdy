$('.carousel').carousel()

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.card'
})
.setClassToggle('.card', 'show')
.addTo(controller);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.col-sm'
})
.setClassToggle('.col-sm', 'show')
.addTo(controller);