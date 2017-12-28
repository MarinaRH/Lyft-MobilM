$(document).ready(function(){
  var $resend=$('#resend');
  var $input=$('#input-lab');

  $resend.on('click',function(){
    $input.val('');
  })
});