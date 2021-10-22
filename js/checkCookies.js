// $( document ).ready(function() {
//     checkCookie("username", "token");
// });

// function checkCookie(check, token) {
//     var user = getCookie(check);
//     var key = getCookie(token);
//     if(key != ""){
//         $("#user").text(user);
//     }else{
//         alert("Harap Login Terlebih Dahulu");
//         window.location.href = "login.html";
//     }
//   }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }