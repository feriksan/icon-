$('#image-sort').on("click", function(){
    if($('.dropdown-content').is(":visible")){
      $('.dropdown-content').hide() 
    }
    else
    $('.dropdown-content').show()
  })

  $('#myDropdown').click(function(){
    var cocks=$(this).children()
    console.log(cocks)
    $('.dropdown-content').hide()
  })

  $('#nama-kita').click(function(){
    console.log('tarjon')
  })