AOS.init({
    duration: 800,
    mirror: true
});

$(document).ready(function() {

    $('.menuCtrl').on('click', function() {

        if($('.menu').hasClass('closed')){
            $('.menu').removeClass('closed');
        } else {
            $('.menu').addClass('closed');
        };
    })

    $('.mobile-only').on('click', function() {
        // Expand text and reverse it.
        var newText = $(this).attr('data-altText');
        var oldText = $(this).text();
        $(this).text(newText);
        $(this).attr('data-altText', oldText);

        if($(this).hasClass('expand')) {
            $(this).removeClass('expand');
            $(this).parent('.container').children('.program-content').removeClass('expanded');
        } else {
            $(this).addClass('expand');
            $(this).parent('.container').children('.program-content').addClass('expanded');
        }
    });

    $('.ms-input').blur(function() {

        // check if the input has any value (if we've typed into it)
        if ($(this).val())
          $(this).addClass('used');
        else
          $(this).removeClass('used');
      });

      $('input[type="email"').on('blur', function() {
          console.log($(this).parent());
          $(this).parent().children('label').removeClass('ms-label-invalid');
          $(this).parent().children('.ms-input').removeClass('ms-bar-invalid');
            var email = $(this).val();

          if (validateEmail(email)) {
            // All good
          } else {
            $(this).parent().children('label').addClass('ms-label-invalid');
            $(this).parent().children('.ms-input').addClass('ms-bar-invalid');
          }

      })
      

      $('.submit-contact-form').on('click', function() {
        //   return false;

          $('.form-success').addClass('show');
          $('.ui.form').hide();
      })
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }