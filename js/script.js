let navbar = document.querySelector('.header .navbar');
let contactInfo= document.querySelector('.contact-info');
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');

   
};

document.querySelector("#info-btn").onclick  = () =>{
    contactInfo.classList.add('active');
}
document.querySelector("#close-contact-info").onclick  = () =>{
    contactInfo.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 var swiper = new  Swiper(".reviews-slider", {
     loop:true,
     grabCursor:true,
     spaceBetween:20,
     breakpoints: {
      640: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
      },
    },
 });