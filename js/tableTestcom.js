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
    const res = await axios.get(Link.fotCrm+noPA)
    .then(res=>{
        console.log(res)
        $('#dokumentasiTracingFoc').text(res.data[0].dokumentasiProgressTracingFOC)
        $('#dokumentasiPenarikanFoc').text(res.data[0].dokumentasiProgressPenarikanFOC)
        $('#dokumentasiFoc').text(res.data[0].dokumentasiProgressFOC)
        $('#dokumentasiTestcom').text(res.data[0].dokumentasiProgressTestcom)
        // $table = $('#fotTable').find('tbody').empty();
        // $.each(res.data, function( index, value ) {
        //     $table = $('#daftarFot').append(
        //         $('<tr class="spacer">'),
        //         $('<tr class="tr-shadow">'),
        //         $('<td>').text(value.id),
        //         $('<td>').text(value.mitraByFot.namaMitra),
        //         $('<td>').text(value.dokumentasiProgressTracingFOC),
        //         $('<td>').text(value.dokumentasiProgressPenarikanFOC),
        //         $('<td>').text(value.dokumentasiProgressTestcom),
        //         $('<td>').text(value.dokumentasiProgressFOC),
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