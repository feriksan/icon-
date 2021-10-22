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
    var username = $('#username').val();
    var key = getCookie("token");
    console.log(data)
    try{
        var filename = $('#nameOnly').val().replace(/C:\\fakepath\\/i, '')
        var name = $('#nameOnly').attr('name')
        var check = "ada";
        uploadExcel();
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
          }else{
              alert("Data Berhasil Ditambahkan")
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

async function uploadExcel(){
    const formData = new FormData();
    formData.append('excel',file);
    formData.append('projectId',11);

    const res = await axios.post(Link.uploadBom,formData)
    console.log("upload image",res);
    return res;
}

async function uploadCrm(){
    const formData = new FormData();
    formData.append('excel',file);

    const res = await axios.post(Link.uploadCrm,formData)
    console.log("upload image",res);
    location.reload();
    return res;
}

$('#detail').click(function(){
    url = "person.html"
    window.location = url;
});

$('#detailPekerjaan').click(function(){
    url = "detailPekerjaan.html"
    window.location = url;
});

$('#logout').click(function(){
    $.removeCookie('token', { path: '/icon+' });
    url = "login.html"
    window.location = url;
});

// $('#uploadBom').click(function(){
//     url = "attachmentsurvei.html"
//     window.location = url;
// });

// $('#uploadVerifikasi').click(function(){
//     url = "attachverifikasi.html"
//     window.location = url;
// });

// $('#uploadLaporanAktivasi').click(function(){
//     url = "attachlaporan.html"
//     window.location = url;
// });

// $('#uploadBai').click(function(){
//     url = "uploadbai.html"
//     window.location = url;
// });

// $('#uploadHasilTestcom').click(function(){
//     url = "uploadprogressfot.html"
//     window.location = url;
// });

$( document ).ready(function() {
    var username = getCookie("username")
    $('#usernameField').val(username);
});

$('#uploadCrm').click(function(){
    uploadCrm();
});

$('#tambahTim').click(function(){
    $('#tambahMitra').show()
})

$("#modalcancel").click(function(){
    $('#tambahMitra').hide()
})

$("#addRow").click(function(){
    $('#FormTim').append(
        $('<div class="inputteks-1">').append(
            $('<label for="namatim" style="margin-bottom: 0;"> Nama Tim</label>'),
            $('<input id="namatim" class="namatim" type="text" placeholder="Nama Tim">')
        )
    )
})

$("#cekDetailHistory").click(function(){
    url = "detailHistory.html"
    window.location = url;
})