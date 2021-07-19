import "bootstrap";
import "./custom.scss";
import "./owl-carosuel"
import "./js/custom.js"
import $ from 'jquery';

$('.owl-theme').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})