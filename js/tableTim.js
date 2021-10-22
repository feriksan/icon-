$( document ).ready(function() {
    var token = getCookie("token")
    cekPekerjaan(token)
});

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.get(Link.tim)
    .then(res=>{
        console.log(res)
        $table = $('#timTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            console.log(index)
            $table = $('#daftartim').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(index + 1),
                $('<td>').text(value.mitraTimById.namaMitra),
                $('<td>').text(value.namaTim),
                $('<td>').text(value.jumlahTim),
                $('<td>').append(
                    $('<div class="table-data-feature">').append(
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail">').on('click', function(e){detail(value.id, value.namaTim); }).append(
                            $('<i class="zmdi zmdi-eye">'),
                        ),
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Delete">').append(
                            $('<i class="zmdi zmdi-delete">')
                        )
                    )
                )
            );
          });
    });
    return res;
}

function detail(id, namaTim){
    console.log(id)
    document.cookie = "idTim=" + id;
    document.cookie = "namaTim=" + namaTim;
    url = "person.html"
    window.location = url;
}