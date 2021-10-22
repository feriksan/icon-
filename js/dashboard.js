$( document ).ready(function(){
    $('#durasiProsesVerifikasi').text("0 Jam")
    cekJumlahPA();
    cekJumlahVerifikasiOpen();
    cekJumlahVerifikasiClosed();
});

async function cekJumlahPA(){
    const res = await axios.get(Link.crm)
    .then(res=>{
        $('#jumlahPA').text(res.data.length)
    });
    return res;
}

async function cekJumlahVerifikasiOpen(){
    const res = await axios.get(Link.verifikasi)
    .then(res=>{
        $('#jumlahPaOnProgress').text(res.data.length)
    });
    return res;
}

async function cekJumlahVerifikasiClosed(){
    const res = await axios.get(Link.verifikasi)
    .then(res=>{
        $('#jumlahVerifikasiClosed').text(res.data.length)
    });
    return res;
}