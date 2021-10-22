$( document ).ready(function() {
    var token = getCookie("token")
    cekPekerjaan(token)
});

$('#bomBtn').click(function(){
    console.log("hey")
    url = "detailBom.html"
    window.location = url;
});
var idSurvei;

async function cekPekerjaan(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    var noPA = getCookie("noPA")
    const res = await axios.get(Link.surveiCrm+noPA)
    .then(res=>{
        console.log(res.data)
        $('#dokumentasiSurvei').text(res.data[0].dokumentasiSurvei)
        $('#formulirIjinKerja').text(res.data[0].formulirIjinKerja)
        $('#gdb').text(res.data[0].gdb)
        $('#bomSurvei').text("BomSurvei.xlxs")
        idSurvei = res.data[0].id;
        $('#downloadDokumentasi').click(function(){
            url = Link.downloadFile+res.data[0].dokumentasiSurvei
            window.location = url;
        })

        $('#downloadFormulir').click(function(){
            url = Link.downloadFile+res.data[0].formulirIjinKerja
            window.location = url;
        })

        $('#downloadGDB').click(function(){
            url = Link.downloadFile+res.data[0].gdb
            window.location = url;
        })
    });

    const bom = await axios.get(Link.bomSurvei+idSurvei)
    .then(bom=>{
        $table = $('#bomTable').find('tbody').empty();
        $.each(bom.data, function( index, value ) {
            $table = $('#daftarBom').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(value.namaJalan),
                $('<td>').text(value.kodeTiang),
                $('<td>').text(value.jarakAntarTiang),
                $('<td>').text(value.panjangKabel),
                $('<td>').text(value.koordinatGps),
                $('<td>').text(value.statusTiang), 
                $('<td>').text(value.srPln), 
                $('<td>').text(value.srIcon), 
                $('<td>').text(value.srNonicon), 
                $('<td>').text(value.tipeTiang), 
                $('<td>').text(value.fittingSuspension), 
                $('<td>').text(value.fittingDeadend), 
                $('<td>').text(value.label), 
                $('<td>').text(value.galian), 
                $('<td>').text(value.odf), 
                $('<td>').text(value.otb), 
                $('<td>').text(value.existingJb), 
                $('<td>').text(value.newJb), 
                $('<td>').text(value.patchCore), 
                $('<td>').text(value.opticalTermination), 
                $('<td>').text(value.opticalJointing), 
                $('<td>').text(value.otdrTest), 
                $('<td>').text(value.keterangan), 
                $('<td>').text(value.pemilikTiang), 
                $('<td>').text(value.tipe), 
                $('<td>').text(value.tipeSite), 
                $('<td>').text(value.tipeJb), 
            );
          });
    });

    return res;
}
