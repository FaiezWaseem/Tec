/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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
  if(elem.getAttribute('active-testimonial') ===  'crousel1'){
    get('#crousel1')[0].classList.remove('active-testimonial')
    get('#crousel2')[0].classList.add('active-testimonial')
    next.setAttribute('active-testimonial','crousel2')
    prev.setAttribute('active-testimonial','crousel2')
}else if (elem.getAttribute('active-testimonial') ===  'crousel2'){
    get('#crousel2')[0].classList.remove('active-testimonial')
    get('#crousel3')[0].classList.add('active-testimonial')
    next.setAttribute('active-testimonial','crousel3')
    prev.setAttribute('active-testimonial','crousel3')
}else if (elem.getAttribute('active-testimonial') ===  'crousel3'){
    get('#crousel3')[0].classList.remove('active-testimonial')
    get('#crousel1')[0].classList.add('active-testimonial')
    next.setAttribute('active-testimonial','crousel1')
    prev.setAttribute('active-testimonial','crousel1')
}
else{
    get('#crousel3')[0].classList.remove('active-testimonial')
    get('#crousel1')[0].classList.add('active-testimonial')
    next.setAttribute('active-testimonial','crousel1')
    prev.setAttribute('active-testimonial','crousel1')
  }

}