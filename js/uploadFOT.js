$('form').submit(function (e) {
    e.preventDefault();
    var noPA = getCookie("noPA");
    var idMitra = getCookie("idMitra");
    var dokumentasiTracing = $('#dokumentasiprogresstracingfoc').val()
    var dokumentasiPenarikan = $('#dokumentasiprogresspenarikanfoc').val()
    var dokumentasiTestcom = $('#dokumentasiprogresstestcom').val()
    var dokumentasiProgress = $('#dokumentasiprogressfoc').val()
    var data;
    data = {
        "noPA": noPA,
        "mitraByFot": {"id":idMitra},
        "dokumentasiProgressTracingFOC": dokumentasiTracing,
        "dokumentasiProgressPenarikanFOC": dokumentasiPenarikan,
        "dokumentasiProgressFOC": dokumentasiProgress,
        "dokumentasiProgressTestcom": dokumentasiTestcom,
    }
    uploadFOT(data)
});

function uploadFOT(data){
    console.log(data)
    var token = getCookie("token");
    $.ajax({
        url: 'API/uploadFOT.php',
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