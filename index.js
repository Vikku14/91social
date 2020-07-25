$(document).ready(function() {
  // execute the compiled template and print the output to the console
  var template = Handlebars.compile($("#response").html());
  $("#form").submit(function() {
    var title = $("#title").val()
    var name = $("#name").val()
    var email = $("#email").val()
    var password = $("#password").val()
    var phone = $("#phone").val()
    var address = $("#address").val()

    context = template({
      title: title,
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address
    });
    $("#form").html(context);
    return false;
  });
});
