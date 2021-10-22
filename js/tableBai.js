$( document ).ready(function() {
    var token = getCookie("token")
    cekPekerjaan(token)
});

async function cekPekerjaan(token){
    const config = {
        withCredentials: true,
        crossorigin: true,
        headers: { Authorization: `Bearer ${token}` },
    };
    var noPA = getCookie("noPA")
    const res = await axios.get(Link.baiCrm+noPA)
    .then(res=>{
        $('#tglUploadBai').text(res.data[0].tanggalUploadBAI)
        // $table = $('#baiTable').find('tbody').empty();
        // $.each(res.data, function( index, value ) {
        //     $table = $('#daftarBai').append(
        //         $('<tr class="spacer">'),
        //         $('<tr class="tr-shadow">'),
        //         $('<td>').text(value.id),
        //         $('<td>').text(value.mitraByBai.namaMitra),
        //         $('<td>').text(value.wilayahKerja),
        //         $('<td>').text(value.tanggalDispose),
        //         $('<td>').text(value.tanggalUploadBAI),
        //         $('<td>').append(
        //             $('<div class="table-data-feature">').append(
        //                 $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail" onclick="detail()">').append(
        //                     $('<i class="zmdi zmdi-eye">'),
        //                 ),
        //                 $('<button class="item" data-toggle="tooltip" data-placement="top" title="Delete">').append(
        //                     $('<i class="zmdi zmdi-delete">')
        //                 )
        //             )
        //         )
        //     );
        //   });
    });
    return res;
}

function detail(){
    url = "person.html"
    window.location = url;
}