document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed:20,
    backSpeed: 20,
    backDelay: 3000,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });

  console.log(typed);


  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
         
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
     
    slides[slideIndex].addClass="wow fadeInUp";
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

  var acc = document.getElementsByClassName("accordion");
   var i;
   
   for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
         panel.style.display = "none";
         } else {
         panel.style.display = "block";
         }
      });
   }

  document.querySelector('.toggle').addEventListener('click', function() {
    typed.toggle();
  });
  document.querySelector('.stop').addEventListener('click', function() {
    typed.stop();
  });
  document.querySelector('.start').addEventListener('click', function() {
    typed.start();
  });
  document.querySelector('.reset').addEventListener('click', function() {
    typed.reset();
  });
  document.querySelector('.destroy').addEventListener('click', function() {
    typed.destroy();
  });
  document.querySelector('.loop').addEventListener('click', function() {
    toggleLoop(typed);
  });

  var typed2 = new Typed('#typed2', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  document.querySelector('.loop2').addEventListener('click', function() {
    toggleLoop(typed2);
  });

  new Typed('#typed3', {
    strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
  });

  new Typed('#typed4', {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 0,
    backSpeed: 0,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });

  new Typed('#typed5', {
    strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    shuffle: true,
    cursorChar: '_',
    smartBackspace: false,
    loop: true
  });

  new Typed('#typed6', {
    strings: ['npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}


var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});


