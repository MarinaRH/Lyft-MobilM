$(document).ready(function(){
  var $resend=$('#resend');
  var $input=$('#cod-lab');
  var $btnCod=$('#btn-codAle');
  var $random = $("#result_random");
  var $number =$('#number-country');
  
  $number.html(localStorage.telephone);
  $input.on('input',function(){
    // validando que coincida el codigo
    if(('LAB-' + $(this).val()) === localStorage.labCode){
      $btnCod.attr('disabled', false);
      $btnCod.addClass('btn-grad');
    }else {
      $btnCod.attr('disabled', true);
    }
  });

  $resend.on('click',function(){
    localStorage.labCode = 'LAB-' + parseInt(Math.random() * 1000);
    $random.html(localStorage.labCode);
  })

  $btnCod.on('click', function(event) {
    $(location).attr('href', 'singup-tree.html');
  });
  
});