$( document ).ready(function() {
    var token = getCookie("token")
    cekPekerjaan(token)
});

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    var noPA = getCookie("noPA")
    const res = await axios.get(Link.laporanCrm+noPA)
    .then(res=>{
        console.log(res)
        $('#boq').text(res.data[0].boq)
        $('#bom').text(res.data[0].bom)
        $('#formLaporan').text("Nama Form")
        $('#downloadBoq').click(function(){
            url = Link.downloadFile+res.data[0].boq
            window.location = url;
        })
        $('#downloadBom').click(function(){
            url = Link.downloadFile+res.data[0].bom
            window.location = url;
        })
        // $table = $('#laporanTable').find('tbody').empty();
        // $.each(res.data, function( index, value ) {
        //     $table = $('#daftarLaporan').append(
        //         $('<tr class="spacer">'),
        //         $('<tr class="tr-shadow">'),
        //         $('<td>').text(value.id),
        //         $('<td>').text(value.mitraByLaporan.namaMitra),
        //         $('<td>').text(value.boq),
        //         $('<td>').text(value.bom),
        //         $('<td>').append(
        //             $('<button class="btn btn-primary">').text("View")
        //         ),
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