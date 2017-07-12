
$(function(){
  $('#itemType').on('blur', function(){
    alpha_validate($(this));
  });
  $('#itemName').on('blur', function(){
    alpha_validate($(this));
  });
  $('#price').on('blur', function(){
    number_validate($(this));
  });
  $('#itemForm').on('submit', function(e){
    e.preventDefault();
    var input = $('input:first');
    var ok = false;
    $('input[type="text"]').each(function(){
      $(this).val() == '' ? ok=false : ok=true
    })
    ok ? $(this)[0].submit() : $('input[value=""]').focus();
  })
})
var alpha_validate = function(obj){
  var alpha_test = /[0-9]+/;
  if (obj.val() == "" || alpha_test.test(obj.val())){
    obj.closest('.form-group').removeClass('has-success').addClass('has-error');
    obj.focus().val('');
  }
  else
    obj.closest('.form-group').removeClass('has-error').addClass('has-success');
}
var number_validate = function(obj){
  var number_test = /[A-Za-z]+/;
  if (obj.val() == "" || number_test.test(obj.val())){
    obj.closest('.form-group').removeClass('has-success').addClass('has-error');
    obj.focus().val('');
  }
  else
    obj.closest('.form-group').removeClass('has-error').addClass('has-success');
}
