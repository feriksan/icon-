$('form').submit(function (e) {
    e.preventDefault();
    var namaLengkap = $('#namaLengkap').val()
    var noHp = $('#nohp').val()
    var email = $('#email').val()
    var jabatan = $('#jabatan').val()
    var wilayahKerja = $('#wilayahKerja').val()
    var data;
    var username = getCookie("username");
    data = {
        "usersByUsername": {"username":username},
        "email": email,
        "noHP": noHp,
        "namaLengkap": namaLengkap,
        "wilayahKerja": wilayahKerja,
        "jabatan":jabatan
    }
    addIconPerson(data)
});

function addIconPerson(data){
    var token = getCookie("token");
    console.log(data)
    $.ajax({
        url: 'API/addIconPerson.php',
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