$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

function sendContact(){
  // const submitButton = document.getElementById('submit-btn');
  // submitButton.disabled = true;

  const contactForm = document.getElementById('contact-form');
  const data = new URLSearchParams();
  for(const pair of new FormData(contactForm)){
    data.append(pair[0], pair[1]);
  }
  console.log(data)
const url =`https://formsubmit.co/mdalaminn8733@gmail.com`;

fetch(url, {
  method: `post`, 
  body: data
})
.then(res => {
  Swal.fire({
    icon: 'success',
    title: 'Thank You',
    showConfirmButton: true,
    
  })
  // submitButton.disabled = false;
  contactForm.reset();
  
})

}
// error pop 
/*Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})*/