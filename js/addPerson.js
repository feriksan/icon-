$( document ).ready(function() {
    getMitra();
})

$('form').submit(function (e) {
    e.preventDefault();
    var namaPerson = $('#namaperson').val()
    var noHp = $('#nohp').val()
    var sertifPendukung = $('#sertifikatpendukung').val()
    var data;
    // var mitra = getCookie("idMitra");
    var username = getCookie("username");
    data = {
        "username": username,
        "sertifPendukung": sertifPendukung,
        "noHp": noHp,
        "namaPerson": namaPerson
        // "mitrapersonById":{"id":mitra}
    }
    addPerson(data)
});

function addPerson(data){
    var token = getCookie("token");
    $.ajax({
        url: 'API/addPerson.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            if(response == '"OK"'){
                alert("Data " + data.username + " Berhasil Ditambahkan")
                url = "index.html"
                window.location = url;
            }else{
                alert("Data " + data.username + " Berhasil Ditambahkan")
            }
            
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}

async function getMitra(){
    const res = await axios.get(Link.mitra)
    .then(res=>{
        console.log(res)
    })
}