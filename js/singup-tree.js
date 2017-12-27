$(document).ready(function(){
  
  var $name = $('#name');
  var $last = $('#last');
  var $email = $('#email');
  var $checked = $('input[type="checkbox"]');
  var $btn = $('#btn-next');
  var validateName = false;
  var validateLast = false; 
  var validateEmail = false;
  var validateChecked = false; 


  $name.on('input',function(){
    if($(this).val()){
      validateName = true;
      activeButton();
    }
  });

  $last.on('input',function(){
    if($(this).val()){
      validateLast = true;
      activeButton();
    }
  });

  $email.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    }
  });

  $checked.on('click', function(event) {
    if(event.target.checked) {
      validateChecked = true;
      activeButton();
    } 
  });

  function activeButton() {
    if (validateName && validateLast && validateEmail && validateChecked) {
      $btn.attr('disabled', false);
      $btn.addClass('btn-grad');
    }else {
      $btn.attr('disabled', true);
    }
  }

  $btn.on('click', function(event) {
    event.preventDefault();
    window.location.href = 'check.html';
  });

});