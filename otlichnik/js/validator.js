function checkForm(form1) {

  var $form = $(form1),
      checker = true,
      name = $("input[name='name']", $form).val(),
      phone = $("input[name='phone']", $form).val();

  if($form.find(".name").hasClass("required")) {
    if(!name) {
      $form.find(".name").addClass("red");
      checker = false;
    } else {
      $form.find(".name").removeClass('red');
    }
  }

  if($form.find(".phone").hasClass("required")) {
    if(!phone) {
      $form.find(".phone").children('input[name="phone"]').parent().addClass("red");
      checker = false;
    } else if(/[^0-9+]/.test(phone)) {
      $form.find(".phone").children('input[name="phone"]').parent().addClass("red");
      checker = false;
    } else {
      $form.find(".phone").children('input[name="phone"]').parent().removeClass("red");
    }}

  if(checker != true) { return false; }}
