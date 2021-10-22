$( document ).ready(function() {
    var username = getCookie("username")
    var role = getCookie("role")
    if(role != "ROLE_ADMIN" && role != "ROLE_MITRA"){
        cekPerson(username)
    }else if(role == "ROLE_ADMIN"){
        cekIconPerson(username)
    }
});

async function cekPerson(user){
    const res = await axios.get(Link.personUser+user)
    .then(res=>{
        const user = res.data;
        if(user == null || user.length == 0){
            alert("Mohon Lengkapi Data Diri Anda di Pengaturan Akun")
            var status = 1
        }else{
            var status = 0
        }
        });
        return res;
}

async function cekIconPerson(user){
    const res = await axios.get(Link.icon+user)
    .then(res=>{
        const user = res.data;
        if(user == null || user.length == 0){
            alert("Mohon Lengkapi Data Diri Anda di Pengaturan Akun")
            var status = 1
        }else{
            var status = 0
        }
        });
        return res;
}