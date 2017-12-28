$(document).ready(function(){  
  var $codigo=$('#codigo');
  var $btn = $('#btn-cod');
  var $random = $("#result_random");

// funcion habilitar y desabilitar button
  $codigo.on('input',function(event){
    this.value =this.value.replace(/[^0-9]/g,'');
    if($(this).val().length ==10) {
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
    $random.html(rand);
  });

});