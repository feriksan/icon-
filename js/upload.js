(function ($) {
    $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
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
    var username = $('#username').val();
    var key = getCookie("token");
    console.log(data)
    try{
        var filename = $('#nameOnly').val().replace(/C:\\fakepath\\/i, '')
        var name = $('#nameOnly').attr('name')
        var check = "ada";
    }
    catch(err){
        var check = "tidak";
    }
    var form_name = $("#form").val();
    console.log(filename);
    $.ajax({
      url: 'API/send.php',
      data: {
                'data':data,
                'form':form_name,
                'exist': check,
                'file':filename,
                'name':name,
                'token':key
            },
      type: 'POST',
      success: function(response){
          console.log("Respon", response)
          if (form_name == "user/mitra") {
            alert("Akun Berhasil dibuat, Silahkan Hubungi Admin Untuk Verifikasi");
            url = "login.html"
            window.location = url;
          }
          if (form_name.indexOf("user") >= 0) {
            url = "login.html"
            window.location = url;
          }
      },
      error: function(error){
          console.log(error);
          alert("Terjadi Kesalahan");
      }
  });
});

var file;

function changeExcel(e){
    file = (e.target.files[0]);
    console.log("file",file);
}

async function uploadExcel(data){
    const formData = new FormData();
    formData.append('excel',file);
    formData.append('data',data);
    console.log(formData)

    const res = await axios.post(Link.surveiSave,data)
    console.log("upload image",res);
    return res;
}