/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
$('#carouselExample').on('slide.bs.carousel', function (e) {

    /*

    CC 2.0 License Iatek LLC 2018
    Attribution required
    
    */


    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 7;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function get($){
    return document.querySelectorAll($);
}
function testimonialsChange(elem){
const prev = document.getElementById('prev')
const next = document.getElementById('next')
  if(elem.getAttribute('active') ===  'crousel1'){
      console.log(get('#crousel1'))
    get('#crousel1')[0].classList.remove('active')
    get('#crousel2')[0].classList.add('active')
    next.setAttribute('active','crousel2')
    prev.setAttribute('active','crousel2')
}else if (elem.getAttribute('active') ===  'crousel2'){
    get('#crousel2')[0].classList.remove('active')
    get('#crousel3')[0].classList.add('active')
    next.setAttribute('active','crousel3')
    prev.setAttribute('active','crousel3')
}else if (elem.getAttribute('active') ===  'crousel3'){
    get('#crousel3')[0].classList.remove('active')
    get('#crousel1')[0].classList.add('active')
    next.setAttribute('active','crousel1')
    prev.setAttribute('active','crousel1')
}
else{
    get('#crousel3')[0].classList.remove('active')
    get('#crousel1')[0].classList.add('active')
    next.setAttribute('active','crousel1')
    prev.setAttribute('active','crousel1')
  }

}