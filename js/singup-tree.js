$(document).ready(function(){
  
  var $name = $('#name');
  var $last = $('#last');
  var $email = $('#email');
  var $checkbox = $('input'[type="checkbox"]);
  var $btn = $('#btn-next');

  $name.on('input',function(){
    if($(this).val()){
       activeButton();
    }
  });

  $last.on('input',function(){
    if($(this).val()){
       activeButton();
    }
  });
   

  function activeButton(){
    if($name===true || $last===true ){
        $btn.attr('disabled',false);
    }
  }

});