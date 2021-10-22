$('form').submit(function (e) {
    e.preventDefault();
    var namaTim = $('#namatim').val()
    var jumlahTim = $('#jumlahtim').val()
    var data;

    data = {
        "mitraTimById": {"id":7},
        "namaTim": namaTim,
        "jumlahTim": jumlahTim
    }
    addTim(data)
});

function addTim(data){
    var token = getCookie("token");
    $.ajax({
        url: 'API/addTim.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
                alert("Data Berhasil Ditambahkan")
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}