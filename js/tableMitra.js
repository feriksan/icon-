$( document ).ready(function() {
    var token = getCookie("token")
    cekPekerjaan(token)
});

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.get(Link.mitra)
    .then(res=>{
        console.log(res)
        $table = $('#mitraTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            $table = $('#daftarMitra').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(value.id),
                $('<td>').text(value.namaMitra),
                $('<td>').text(value.alamat),
                $('<td>').text(value.pic),
                $('<td>').text(value.noHP),
                $('<td>').text(value.email),
                $('<td>').append(
                    $('<div class="table-data-feature">').append(
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail" onclick="detail()">').append(
                            $('<i>').text("Detail"),
                        ),
                    )
                )
            );
          });
    });
    return res;
}

function detail(){
    url = "person.html"
    window.location = url;
}