$(document).ready(function(){
  var $resend=$('#resend');
  var $input=$('#cod-lab');
  var $btnCod=$('#btn-codAle');
  
  $resend.on('click',function(){
    if($input.val('')){
      $btnCod.attr('disabled', true);
    }
  })
  
  $input.on('input',function(){
    if($(this).val().length<=3){
      $btnCod.attr('disabled', false);
      $btnCod.addClass('btn-grad');
    }else {
      $btnCod.attr('disabled', true);
    }
  });

  $btnCod.on('click', function(event) {
    event.preventDefault();
    window.location.href ='singup-tree.html';
  });
  
});