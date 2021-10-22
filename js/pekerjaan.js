$( document ).ready(function() {
    var role = getCookie("role");
    if(role == "ROLE_MITRA" || role == "ROLE_USER"){
        if(role == "ROLE_MITRA"){
            var userMitra = getCookie("username")
        }
        getPekerjaanMitra(userMitra);
    }
    if(role == "ROLE_ADMIN" || role == "ROLE_PTL"){
        getPekerjaanPTL();
    }if(role == "ROLE_ASSET"){
        var userAsset = getCookie("username")
        getPekerjaanAsset(userAsset)
    }
});

async function getPekerjaanMitra(user){
    const res = await axios.get(Link.mitraUsername+user)
    .then(res=>{
        if(res.data == ""){
            $table = $('#pekerjaanAsetTable').empty();
            $table = $('#pekerjaanAsetTable').append(
                $('h4').text("Tidak ada pekerjaan aktif"),
            )
        }else{
            $table = $('#pekerjaanAsetTable').find('tbody').empty();
            $tableHead = $('#pekerjaanAsetTable').find('thead').empty();
            $tableHead = $('#daftarPekerjaanHead').append(
                $('<tr>').append(
                    $('<th>').text("PA Node"),
                    $('<th>').text("Customer Name"),
                    $('<th>').text("Service"),
                    $('<th>').text("Address"),
                    $('<th>').text("Mitra"),
                    $('<th>').text("PTL"),
                    $('<th>').text("View"),
                )
            )
            
console.log('tarjon coc')

            $.each(res.data, function( index, value ) {
                $table = $('#daftarPekerjaanAset').append(
                    $('<tr class="spacer">'),
                    $('<tr class="tr-shadow">'),
                    $('<td>').text(value.crmById.activationID),
                    $('<td>').text(value.crmById.customerName),
                    $('<td>').text(value.crmById.address),
                    $('<td>').text(value.crmById.address),
                    $('<td>').text("Selesai"),
                    $('<td>').append(
                        $('<a href="uploadDokumen.html">View</a>').on('click', function(e){savePA(value.crmById.id); })
                    )
                );
              });
        }
    })
    
    return res;
}

async function getPekerjaanPTL(){
    const res = await axios.get(Link.disposisiMitra)
    .then(res=>{
        $table = $('#pekerjaanAsetTable').find('tbody').empty();
        $.each(res.data, function( index, value ) {
            $table = $('#daftarPekerjaanAset').append(
                $('<tr class="spacer">'),
                $('<tr class="tr-shadow">'),
                $('<td>').text(value.crmById.activationID),
                $('<td>').text(value.crmById.customerName),
                $('<td>').text(value.crmById.address),
                $('<td>').text(value.mitraById.namaMitra),
                $('<td>').text("Selesai"),
                $('<td>').append(
                    $('<a href="verifikasiDokumen.html">View</a>').on('click', function(e){savePA(value.crmById.id); })
                )
            );
          });
    })
    
    return res;
}

async function getPekerjaanAsset(user){
    const res = await axios.get(Link.assetUsername+user)
    .then(res=>{
        if(res.data == ""){
            $table = $('#pekerjaanAsetTable').empty();
            $table = $('#pekerjaanAsetTable').append(
                $('h4').text("Tidak ada pekerjaan aktif"),
            )
        }else{
            $table = $('#pekerjaanAsetTable').find('tbody').empty();
            $tableHead = $('#pekerjaanAsetTable').find('thead').empty();
            $tableHead = $('#daftarPekerjaanAssetHead').append(
                $('<tr>').append(
                    $('<th>').text("Project Activation Node"),
                    $('<th>').text("Customer Name"),
                    $('<th>').text("Address"),
                    $('<th>').text("PIC Verifikasi"),
                    $('<th>').text("Status"),
                    $('<th>').text("Tanggal Disposisi"),
                    $('<th>').text("Action"),
                )
            )
            $.each(res.data, function( index, value ) {
                $table = $('#daftarPekerjaanAset').append(
                    $('<tr class="spacer">'),
                    $('<tr class="tr-shadow">'),
                    $('<td>').text(value.crmById.activationID),
                    $('<td>').text(value.crmById.customerName),
                    $('<td>').text(value.crmById.address),
                    $('<td>').text(value.crmById.pic),
                    $('<td>').text("Done"),
                    $('<td>').text("12/05/2000"),
                    $('<td>').append(
                        $('<a href="uploadDokumen.html">View</a>').on('click', function(e){savePA(value.crmById.id); })
                    )
                );
              });
        }
    })
    
    return res;
}

function savePA(pa){
    document.cookie = "noPA=" + pa;
}