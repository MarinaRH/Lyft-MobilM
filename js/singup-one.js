$(document).ready(function(){  
  var $codigo=$('#codigo');
  var $btn = $('#btn-cod')

// funcion habilitar y desabilitar button
  $codigo.on('input',function(){
    if ($(this).val().length ==10){
      $('#text').hide();
      $btn.attr('disabled',false);
      $btn.addClass('btn-grad')

    }else{
      $('#text').show();
      $btn.attr('disabled',true);
    }

  })
});