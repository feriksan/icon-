$( document ).ready(function() {
    var role = getCookie("role");
    var noPA = getCookie("noPA");
    cekPekerjaan(noPA, role)
});

async function cekPekerjaan(noPA, role){
    const survei = await axios.get(Link.surveiCrm+noPA)
    .then(survei =>{
        if(role == "ROLE_ASSET"){
            if(survei.data != ""){
                $('#uploadBom').text("View")
                $('#statusBom').text("Sudah Diupload")
            }else if(survei.data == ""){
                $('#uploadBom').text("View")
                $('#statusBom').text("Belum Diupload")
            }
                $('#uploadBom').click(function(){
                url = "detailSurvei.html"
                window.location = url;
            });
        }else{
            if(survei.data != ""){
                $('#uploadBom').text("View")
                $('#statusBom').text("Sudah Diupload")
                $('#uploadBom').click(function(){
                    url = "detailSurvei.html"
                    window.location = url;
                });
            }else if(survei.data == ""){
                $('#uploadBom').text("Upload")
                $('#statusBom').text("Belum Diupload")
                $('#uploadBom').click(function(){
                    url = "attachmentsurvei.html"
                    window.location = url;
                });
            }
        }
    })

    const verif = await axios.get(Link.verifikasiCrm+noPA)
    .then(verif =>{
        if(role == "ROLE_ASSET"){
            if(verif.data != ""){
                $('#uploadVerifikasi').text("View")
                $('#statusVerif').text("Sudah Diupload")
                $('#uploadVerifikasi').click(function(){
                    url = "detailVerifikasi.html"
                    window.location = url;
                });
            }else if(verif.data == ""){
                $('#uploadVerifikasi').text("Upload")
                $('#statusVerif').text("Belum Diupload")
                $('#uploadVerifikasi').click(function(){
                    url = "attachverifikasi.html"
                    window.location = url;
                });
            }
        }else{
            if(verif.data != ""){
                $('#uploadVerifikasi').text("View")
                $('#statusVerif').text("Sudah Diupload")
            }else if(verif.data == ""){
                $('#uploadVerifikasi').text("View")
                $('#statusVerif').text("Belum Diupload")
            }
                $('#uploadVerifikasi').click(function(){
                url = "detailVerifikasi.html"
                window.location = url;
            });
    }
    })

    const bai = await axios.get(Link.baiCrm+noPA)
    .then(bai =>{
        if(role == "ROLE_ASSET"){
            if(bai.data != ""){
                $('#uploadBai').text("View")
                $('#statusBai').text("Sudah Diupload")
            }else if(bai.data == ""){
                $('#uploadBai').text("View")
                $('#statusBai').text("Belum Diupload")
            }
            $('#uploadBai').click(function(){
            url = "detailBai.html"
            window.location = url;
            });
        }else{
            if(bai.data != ""){
                $('#uploadBai').text("View")
                $('#statusBai').text("Sudah Diupload")
                $('#uploadBai').click(function(){
                    url = "detailBai.html"
                    window.location = url;
                });
            }else if(bai.data == ""){
                $('#uploadBai').text("Upload")
                $('#statusBai').text("Belum Diupload")
                $('#uploadBai').click(function(){
                    url = "uploadbai.html"
                    window.location = url;
                });
            }
    }
    })

    const fot = await axios.get(Link.fotCrm+noPA)
    .then(fot =>{
        if(role == "ROLE_ASSET"){
            if(fot.data != ""){
                $('#uploadHasilTestcom').text("View")
                $('#statusTestcom').text("Sudah Diupload")
            }else if(fot.data == ""){
                $('#uploadHasilTestcom').text("View")
                $('#statusTestcom').text("Belum Diupload")
            }
            $('#uploadHasilTestcom').click(function(){
                url = "detailTestcom.html"
                window.location = url;
            });
        }else{
            if(fot.data != ""){
                $('#uploadHasilTestcom').text("View")
                $('#statusTestcom').text("Sudah Diupload")
                $('#uploadHasilTestcom').click(function(){
                    url = "detailTestcom.html"
                    window.location = url;
                });
            }else if(fot.data == ""){
                $('#uploadHasilTestcom').text("Upload")
                $('#statusTestcom').text("Belum Diupload")
                $('#uploadHasilTestcom').click(function(){
                    url = "uploadprogressfot.html"
                    window.location = url;
                });
            }
        }
    })

    const laporan = await axios.get(Link.laporanCrm+noPA)
    .then(laporan =>{
        if(role == "ROLE_ASSET"){
            if(laporan.data != ""){
                $('#uploadLaporanAktivasi').text("View")
                $('#statusLA').text("Sudah Diupload")
            }else if(laporan.data == ""){
                $('#uploadLaporanAktivasi').text("View")
                $('#statusLA').text("Belum Diupload")
            }
            $('#uploadLaporanAktivasi').click(function(){
                url = "detailLaporan.html"
                window.location = url;
            });
        }else{
            if(laporan.data != ""){
                $('#uploadLaporanAktivasi').text("View")
                $('#statusLA').text("Sudah Diupload")
                $('#uploadLaporanAktivasi').click(function(){
                    url = "detailLaporan.html"
                    window.location = url;
                });
            }else if(laporan.data == ""){
                $('#uploadLaporanAktivasi').text("Upload")
                $('#statusLA').text("Belum Diupload")
                $('#uploadLaporanAktivasi').click(function(){
                    url = "attachlaporan.html"
                    window.location = url;
                });
            }
    }
    })
}