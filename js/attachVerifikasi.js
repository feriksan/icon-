$('form').submit(function (e) {
    e.preventDefault();
    var token = getCookie('token')
    var noPA = getCookie("noPA");
    var idMitra = getCookie("idMitra");
    var catatan = $('#catatan').val().replace(/C:\\fakepath\\/i, '')
    var gdb = $('#gdb').val().replace(/C:\\fakepath\\/i, '')
    var datacore = $('#datacore').val().replace(/C:\\fakepath\\/i, '')
    var serviceID = $('#serviceid').val()
    var jb = $('#jb').val()
    var koordinat = $('#koordinat').val()
    var coreA = $('#corea').val()
    var coreB = $('#coreb').val()
    var kapasitasKabel = $('#kapasitaskabel').val()
    var data;
    var verifikasiDatacore;
    verifikasiDatacore = {
        "serviceID": serviceID,
        "koordinat": koordinat,
        "coreA": coreA,
        "coreB": coreB,
        "kapasitasKabel": kapasitasKabel,
        "dataCore": datacore,
        "jb": jb
    }

    data = {
        "noPA": noPA,
        "mitraByVerifikasi": {"id":idMitra},
        "catatan": catatan,
        "gdb": gdb,
        "verifikasiDatacore": [verifikasiDatacore]
    }
    attachVerifikasi(data)
    console.log(data)
});

var fileGdb;
var fileCatatan;
var fileDataCore;

function getGdb(e){
    fileGdb = (e.target.files[0]);
    console.log("file",fileGdb);
}

function getCatatan(e){
    fileCatatan = (e.target.files[0]);
    console.log("file",fileCatatan);
}

function getDataCore(e){
    fileDataCore = (e.target.files[0]);
    console.log("file",fileDataCore);
}

async function saveFile(){
    const formData = new FormData();
    formData.append('files',fileGdb);
    formData.append('files',fileCatatan);
    formData.append('files',fileDataCore);
    const res = await axios.post(Link.uploadFile,formData)
    console.log("upload image",res);
    url = "uploadDokumen.html"
    window.location = url;
    return res;
}

function attachVerifikasi(data){
    var token = getCookie("token");
    $.ajax({
        url: 'API/attachVerifikasi.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            saveFile();
            alert("Data Berhasil Ditambahkan")
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}
