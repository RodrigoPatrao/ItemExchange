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
    var ok = 0;
    $('input[type="text"]').each(function(){
      hasValue($(this)) ? ok += 1 : ok = ok
    })
    ok == 3 ? $(this)[0].submit() : $('input[value=""]').focus();
  })
})
var hasValue = function(obj){
  var val = obj.val()
  if( val == '' || val == 0){
    $(this).val('');
    return false;
  }else {
    return true;
  }
}
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
