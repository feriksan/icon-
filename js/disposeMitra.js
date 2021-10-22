$( document ).ready(function() {
    var token = getCookie("token")
    var role = getCookie("role");
    cekPekerjaan(token, role)

});

async function cekPekerjaan(token, role){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    if(role == "ROLE_ADMIN"){
    var crmId = getCookie("idCrm");
    const dataRes = await axios.get(Link.crm + "/" + crmId)
    .then(dataRes=>{
        $('h1').text(dataRes.data.noPA)
        $('#pan').text("Project Activation Node: " + dataRes.data.activationID)
        $('#cn').text("Costumer Name: " + dataRes.data.customerName)
        $('#sid').text("Service: " + dataRes.data.serviceID)
        $('#b').text("Bandwidth: "+dataRes.data.bandwidth)
        $('#ion').text("IO Number: " + dataRes.data.ionumber)
        $('#addr').text("Address: " + dataRes.data.address)
        $('#ptl').text("Project Team Leader: " + dataRes.data.projectTeamLeader)
    });

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
                        $('<button class="item" data-toggle="tooltip" data-placement="top" title="Dispose Mitra" id="detail">').on('click', function(e){dispose(value.id); }).append(
                            $('<i class="fas fa-check"></i>'),
                        ),
                    )
                )
            );
          });
    });
    $('#cancel').click(function(){
        url = "pekerjaan.html"
        window.location = url;
    })
    }else if(role == "ROLE_ASSET"){
        var crmId = getCookie("idCrm");
        const dataRes = await axios.get(Link.disposisiMitra + crmId)
        .then(dataRes=>{
            console.log(dataRes)
            $('h1').text(dataRes.data.crmById.noPA)
            $('#pan').text("Project Activation Node: " + dataRes.data.crmById.activationID)
            $('#cn').text("Costumer Name: " + dataRes.data.crmById.customerName)
            $('#ptl').text("Project Team Leader: " + dataRes.data.crmById.projectTeamLeader)
            $('#addr').text("Address: " + dataRes.data.crmById.address)
            $('#mitra').text("Mitra: " + dataRes.data.mitraById.namaMitra)
            $('#tglUploadSurvei').text("Tanggal Upload Dokumen Survei: 12/05/2000")
            
        });
        
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
                    $('<td>').text(value.noHP),
                    $('<td>').text(value.email),
                    $('<td>').append(
                        $('<div class="table-data-feature">').append(
                            $('<button class="item" data-toggle="tooltip" data-placement="top" title="Dispose Mitra" id="detail">').on('click', function(e){disposeAsset(value.id); }).append(
                                $('<i class="fas fa-check"></i>'),
                            ),
                        )
                    )
                );
              });
        });
        $('#cancel').click(function(){
            url = "pekerjaanTeamAsset.html"
            window.location = url;
        })
    }
}

function dispose(id){
    var crmId = getCookie("idCrm");
    var token = getCookie("token");
    let data = 
    {
        "crmById":{"id":crmId},
        "mitraById":{"id":id},
    }
    $.ajax({
        url: 'API/dispose.php',
        data: {
                  'data':data,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            if(response = "OK"){
                alert("Data Berhasil Ditambahkan")
            }
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}

function disposeAsset(id){
    var token = getCookie("token");
    var idDispose = getCookie("idCrm");
    let data = 
    {
        "assetById":{"id":id},
    }
    $.ajax({
        url: 'API/disposeAsset.php',
        data: {
                  'data':data,
                  'idDispose':idDispose,
                  'token':token
              },
        type: 'POST',
        success: function(response){
            console.log(response)
            if(response = "OK"){
                alert("Data Berhasil Ditambahkan")
            }
        },
        error: function(error){
            console.log(error);
            alert("Terjadi Kesalahan");
        }
    });
}
