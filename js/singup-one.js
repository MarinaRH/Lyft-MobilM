$(document).ready(function(){  
  try {
    $("body select").msDropDown();
  } catch(e) {
    alert(e.message);
  }

  var $codigo=$('#codigo');
  var $btn = $('#btn-cod');
  var $random = $("#result_random");

// generar codigo de pais
  $('#webmenu').on('change', function() {
    switch (true) {
    case ($(this).val() === 'mexico'):
      $codigo.val('+51');
      break;
    case ($(this).val() === 'ecuador'):
      $codigo.val('+593');
      break;
    case ($(this).val() === 'eeuu'):
      $codigo.val('+59');
      break;
    default:
      $codigo.val('+1');
    }
  });
  
// funcion habilitar y desabilitar button
  $codigo.on('input',function(event){
    this.value =this.value.replace(/[^0-9]/g,'');
    if($(this).val().length ==10) {
      $btn.attr('disabled',false);
      $btn.addClass('btn-grad')
    }else{
      $btn.attr('disabled',true);
    }
  })

  // generar codigo aleatorio
  $('#btn-cod').on('click', function() {
    localStorage.labCode = 'LAB-' + parseInt(Math.random() * 1000);
    $random.html(localStorage.labCode);
    localStorage.telephone = $('#codigo').val();
  });
  
});