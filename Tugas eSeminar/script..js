$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Formulir berhasil dikirim!');
    });
  });