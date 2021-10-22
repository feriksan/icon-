$( document ).ready(function() {
    var role = getCookie("role")
    if(role != "ROLE_ADMIN" && role != "ROLE_ASSET"){
        $('#crm').hide();
        $('#ambilPekerjaan').hide();
    }
    if(role == "ROLE_MITRA")
    {
        $('#verifikasiDokumen').hide();
        $('#manageMitra').hide();
        $('#uploadDokumen a').text("Daftar PA")
        $('#uploadVerifikasi').text("View")
    }
    if(role == "ROLE_USER")
    {
        $('#verifikasiDokumen').hide();
        $('#manageMitra').hide();
        $('#manageTim').hide();
    }
    if(role == "ROLE_ASSET")
    {
        $('#manageMitra').hide();
        $('#manageTim').hide();
        $('#uploadDokumen').hide();
        var old = $('#ambilPekerjaan a').attr("href")
        var newUrl = old.replace("pekerjaan.html", "pekerjaanTeamAsset.html");
        $('#ambilPekerjaan a').attr("href", newUrl);
        $('#ambilPekerjaan a ').text("Disposisi Asset").append('<i>')
        $('#verifikasiDokumen a ').text("Daftar Verifikasi").append('<i>')
        
    }
});