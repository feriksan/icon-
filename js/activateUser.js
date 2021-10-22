(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        console.log(a)
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeFormJSON();
    var form_name = $("#form").val();
    var userr = $("#username").val();
    var token = getCookie("token");
    $.ajax({
      url: 'API/send.php',
      data: {
                'data':data,
                'form':form_name,
                'username':userr,
                'token':token
            },
      type: 'POST',
      success: function(response){
          console.log("Respon", response)
          alert("User Sudah Aktif");
          url = "index.html"
          window.location = url;
      },
      error: function(error){
          console.log(error);
          alert("Terjadi Kesalahan");
      }
  });
});

$( document ).ready(function() {
    var user = getCookie("username");
    $("#username").val(user);
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }