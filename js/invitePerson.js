$('form').submit(function (e) {
    e.preventDefault();
    var username = $('#username').val()
    var data;
    var tim = getCookie("idTim");
    data = {
        "timById": {"id":tim},
    }
    searchPerson(username, data)
    // invitePerson(data, username)
});

async function searchPerson(username, data){
    const res = await axios.get(Link.personUser+username)
    .then(res=>{
        if(res.data != null){
            $field = $('#personField').empty()
            $field = $('#personField').append(
                $('<p>').text("Nama: "+res.data.namaPerson),
                $('<p>').text("Mitra: "+res.data.mitrapersonById.namaMitra),
                $('<p>').text("Nomor HP: "+res.data.noHp),
                $('<p>').text("Sertifikat Pendukung: "+res.data.sertifPendukung),
                $('<button class="btn btn-primary">').on('click', function(e){invitePerson(data, username);}).text("Invite"),
            )
        }else{
            $field = $('#personField').empty()
            $field = $('#personField').append(
                $('<h4>').text("Tidak ditemukan data"),
            )
        }
    })
    return res
}

function invitePerson(data, username){
    var token = getCookie("token");
    $.ajax({
        url: 'API/invitePerson.php',
        data: {
                  'data':data,
                  'token':token,
                  'username':username
              },
        type: 'POST',
        success: function(response){
            console.log("User " + " " + username + " " + response)
            alert("User" + " " + username + " " + response)
            url = "person.html"
            window.location = url;
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}