$(document).ready(function() {
popup = {
    init: function(){
      $('figure').click(function(){
        popup.open($(this));
      });
      
      $(document).on('click', '.popup img', function(){
        return false;
      }).on('click', '.popup', function(){
        popup.close();
      })
    },
    open: function($figure) {
      $('.gridGallery').addClass('pop');
      $popup = $('<div class="popup" />').appendTo($('body'));
      $fig = $figure.clone().appendTo($('.popup'));
      $bg = $('<div class="bg" />').appendTo($('.popup'));
      $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
     
      $shadow = $('<div class="shadow" />').appendTo($fig);
     // $shadow = $('<div class="shadow" />')
      src = $('img', $fig).attr('src');
      $shadow.css({backgroundImage: 'url(' + src + ')'});
      console.log('fig :' +$fig);
      $bg.css({backgroundImage: 'url(' + src + ')'});
      setTimeout(function(){
        $('.popup').addClass('pop');
      }, 10);
    },
    close: function(){
      $('.gallery, .popup').removeClass('pop');
      setTimeout(function(){
        $('.popup').remove()
      }, 100);
    }
  }
  
popup.init();

//------------isotop-----------------//
var $grid = $('.gridGallery').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
             document.getElementById('navbar_top').classList.remove('fixed-top');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
});
});
