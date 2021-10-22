$('form').submit(function (e) {
    e.preventDefault();
    var noPA = getCookie("noPA");
    var idMitra = getCookie("idMitra");
    var boq = $('#boq').val().replace(/C:\\fakepath\\/i, '')
    var bom = $('#bom').val().replace(/C:\\fakepath\\/i, '')
    var testcom = $('#tanggaluploadtestcom').val()
    var laporan = $('#tanggaluploadlaporan').val().replace(/C:\\fakepath\\/i, '')
    var data;
    var laporanAktivasi;
    laporanAktivasi = {
        "tanggalUploadTestcom": testcom,
        "tanggalUploadLaporan": laporan
    }

    data = {
        "noPA": noPA,
        "mitraByLaporan": {"id":idMitra},
        "boq":boq,
        "bom":bom,
        "laporanAktivasi": [laporanAktivasi]
    }
    attachLaporan(data)
});

var fileBoq;
var fileBom;
var fileLaporan;

function getBoq(e){
    fileBoq = (e.target.files[0]);
    console.log("file",fileBoq);
}

function getBom(e){
    fileBom = (e.target.files[0]);
    console.log("file",fileBom);
}

function getLaporan(e){
    fileLaporan = (e.target.files[0]);
    console.log("file",fileLaporan);
}

async function saveFile(){
    const formData = new FormData();
    formData.append('files',fileBoq);
    formData.append('files',fileBom);
    formData.append('files',fileLaporan);
    const res = await axios.post(Link.uploadFile,formData)
    console.log("upload image",res);
    url = "uploadDokumen.html"
    window.location = url;
    return res;
}

function attachLaporan(data){
    var token = getCookie("token");
    $.ajax({
        url: 'API/attachLaporan.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            saveFile()
            alert("Data Berhasil Ditambahkan")
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}