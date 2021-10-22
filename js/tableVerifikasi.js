$( document ).ready(function() {
    var token = getCookie("token")
    console.log("HH")
    cekPekerjaan(token)
});

$('#dataCoreBtn').click(function(){
    url = "detailDataCore.html"
    window.location = url;
});
var idVerif;

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    var noPA = getCookie("noPA")
    const res = await axios.get(Link.verifikasiCrm+noPA)
    .then(res=>{
        console.log(res)
        $('#idCatatan').text(res.data[0].id)
        $('#idGdb').text(res.data[0].id)
        $('#gdb').text(res.data[0].gdb)
        $('#catatan').text(res.data[0].catatan)
        idVerif = res.data[0].id;
        $('#downloadCatatan').click(function(){
            url = Link.downloadFile+res.data[0].catatan
            window.location = url;
        })

        $('#downloadGdb').click(function(){
            url = Link.downloadFile+res.data[0].gdb
            window.location = url;
        })
    });

    const dataCore = await axios.get(Link.datacoreVerif+idVerif)
    .then(dataCore=>{
        $table = $('#datacoreTable').find('tbody').empty();
        console.log(dataCore.data)
        $table = $('#daftarDatacore').append(
            $('<tr class="spacer">'),
            $('<tr class="tr-shadow">'),
            $('<td>').text(dataCore.data.serviceID),
            $('<td>').text(dataCore.data.jb),
            $('<td>').text(dataCore.data.koordinat),
            $('<td>').text(dataCore.data.coreA),
            $('<td>').text(dataCore.data.coreB),
            $('<td>').text(dataCore.data.kapasitasKabel),
            $('<td>').text(dataCore.data.dataCore),
        );
    });
    return res;
}

function detail(){
    url = "person.html"
    window.location = url;
}