$( document ).ready(function(){
    var keg1 = ['noPA', 'tanggal', 'keg', 'https://i.imgur.com/ZXPzO6S.png'];
    var keg2 = ['noPA', 'tanggal', 'keg', 'https://i.imgur.com/65sHE3w.png'];
    var keg3 = ['noPA', 'tanggal', 'keg', 'https://i.imgur.com/65sHE3w.png'];
    var Kegiatan=[keg1,keg2,keg3];
    Kegiatan.forEach(function(cocks){
        $('#Kegiatan').append(
            $('<div class="row">').append(
                $('<div class="col-2">').append(
                    $('<img style="width: 80px;margin-left: 28px;" alt="">').attr("src", cocks[3])    
                ),
                $('<div class="col-10">').append(
                    $('<div class="kotak" style="padding-top: 15px;">').append(
                        $('<div class="isiHistori">').append(
                            $('<p>').text(cocks[0]),
                            $('<p>').text(cocks[1]),
                            $('<br>'),
                            $('<p>').text(cocks[2])
                        )
                    )
                )
            )
        )
    })
})