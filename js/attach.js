$('form').submit(function (e) {
    e.preventDefault();
    var token = getCookie('token')
    var noPA = getCookie("noPA");
    var idMitra = getCookie("idMitra");
    var dokumentasi = $('#dokumentasisurvei').val().replace(/C:\\fakepath\\/i, '')
    var formulir = $('#formulir').val().replace(/C:\\fakepath\\/i, '')
    var gdb = $('#gdb').val().replace(/C:\\fakepath\\/i, '')
    var data
    data = {
        "noPA": noPA,
        "mitraBySurvei": {"id":idMitra},
        "dokumentasiSurvei": dokumentasi,
        "formulirIjinKerja": formulir,
        "gdb": gdb
    }
    console.log(data)
    uploadExcel(data, token)
});

var file;
var fileFormulir;
var dokumentasiSurvei;
var fileGDB;

function getGdb(e){
    fileGDB = (e.target.files[0]);
    console.log("file",fileGDB);
}

function getFormulir(e){
    fileFormulir = (e.target.files[0]);
    console.log("file",fileFormulir);
}

function getDokumentasi(e){
    dokumentasiSurvei = (e.target.files[0]);
    console.log("file",dokumentasiSurvei);
}

async function saveFile(){
    const formData = new FormData();
    formData.append('files',fileGDB);
    formData.append('files',fileFormulir);
    formData.append('files',dokumentasiSurvei);
    const res = await axios.post(Link.uploadFile,formData)
    console.log("upload image",res);
    url = "uploadDokumen.html"
    window.location = url;
    return res;
}

function changeExcel(e){
    file = (e.target.files[0]);
    console.log("file",file);
}

async function uploadExcel(data, token){
    const formData = new FormData();
    formData.append('survei', JSON.stringify(data));
    formData.append('excel',file);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const res = await axios.post(Link.surveiBatch,formData)
    console.log("upload image",res);
    saveFile()
    alert("Data Berhasil Diinput")
    return res;
}