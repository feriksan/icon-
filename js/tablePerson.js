$( document ).ready(function() {
    var token = getCookie("token")
    var namaTim = getCookie("namaTim");
    $('#namaTim').text(namaTim);
    cekPekerjaan(token)
});

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.get(Link.person)
    .then(res=>{
        var timId = getCookie("idTim");
        $table = $('#personTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            if(value.timById != null && value.timById.id == timId){
            $table = $('#daftarPerson').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(index+1),
                $('<td>').text(value.namaPerson),
                $('<td>').text(value.sertifPendukung),
                $('<td>').text(value.noHp),
                $('<td>').append(
                    $('<div class="table-data-feature">').append(
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail" onclick="detail()">').append(
                            $('<i class="zmdi zmdi-eye">'),
                        ),
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Delete">').append(
                            $('<i class="zmdi zmdi-delete">')
                        )
                    )
                )
            );
            }
          });
    });
    return res;
}

function detail(){
    url = "person.html"
    window.location = url;
}