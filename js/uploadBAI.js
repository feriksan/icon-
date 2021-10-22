$('form').submit(function (e) {
    e.preventDefault();
    var noPA = getCookie("noPA");
    var idMitra = getCookie("idMitra");
    var wilayahKerja = $('#wilayahkerja').val()
    var tanggalDispose = $('#tanggaldispose').val()
    var tanggalUploadBAI = $('#tanggaluploadbai').val()
    var data;
    data = {
        "noPA": noPA,
        "mitraByBai": {"id":idMitra},
        "wilayahKerja": wilayahKerja,
        "tanggalDispose": tanggalDispose,
        "tanggalUploadBAI": tanggalUploadBAI,
    }
    uploadBAI(data)
});

function uploadBAI(data){
    console.log(data)
    var token = getCookie("token");
    $.ajax({
        url: 'API/uploadBAI.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            alert("Data Berhasil Ditambahkan")
            url = "uploadDokumen.html"
            window.location = url;
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}