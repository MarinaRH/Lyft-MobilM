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
  // codigo aleatorio
  $(":input").change(function(){
    $("#n_range").html($("#rr").val());
    });
    
    $btn.click(function(){
    rand = Math.floor((Math.random()*$("#rr").val())+1);
    $("#result_random").html(rand);
    });

});