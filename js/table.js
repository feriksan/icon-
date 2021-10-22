$( document ).ready(function() {
    var role = getCookie("role");
    cekPekerjaan()
    if(role == "ROLE_ASSET"){
        cekPekerjaanAsset();
    }
});

async function cekPekerjaan(){
    const res = await axios.get(Link.crm)
    .then(res=>{
        console.log(res.data)
        $table = $('#pekerjaanTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            $table = $('#daftarPekerjaan').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(value.activationID),
                $('<td>').text(value.customerName),
                $('<td>').text(value.serviceID),
                $('<td>').text(value.address),
                $('<td>').text('wiener'),
                $('<td>').text(value.projectTeamLeader),
                $('<td>').append(
                    $('<div class="table-data-feature">').append(
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail">').on('click', function(e){detail(value.id); }).append(
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

async function cekPekerjaanAsset(){
    const res = await axios.get(Link.disposisiMitra)
    .then(res=>{
        $table = $('#pekerjaanTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            $table = $('#daftarPekerjaan').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(value.crmById.activationID),
                $('<td>').text(value.crmById.projectTeamLeader),
                $('<td>').text(value.mitraById.namaMitra),
                $('<td>').text("12/05/2000"),
                $('<td>').append(
                    $('<div class="table-data-feature">').append(
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Detail" id="detail">').on('click', function(e){detailPaAset(value.id); }).append(
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

function detail(id){
    document.cookie = "idCrm=" + id;
    url = "disposeMitra.html";
    window.location = url;
}

function detailPaAset(id){
    document.cookie = "idCrm=" + id;
    url = "disposeAsset.html";
    window.location = url;
}