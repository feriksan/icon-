$('form').submit(function (e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    login(username, password);
    
});
async function login(username, password){
    try{
        const res = await axios.post(Link.login, 
        {"username":username,"password":password}
    )
    .then(res=>{
        console.log(res)
        const user = res.data.token;
        const role = res.data.role;
        // Token Login
        users = user;
        roles = role;
        document.cookie = "username=" + username;
        document.cookie = "token=" + users;
        document.cookie = "role=" + roles;
        if(roles == "ROLE_MITRA"){
            getMitraData(username)
        }
        if(roles == "ROLE_USER")
        {
            getPersonData(username)
        }
        if(roles == "ROLE_ADMIN")
        {
            url = "index.html"
            window.location = url;
        }
        if(roles == "ROLE_ASSET")
        {
            getMitraData(username)
        }
        });
        return res;
    } catch(error) {
        if (error.response.data.message == "User is not active yet") {
            alert(error.response.data.message + " silahkan hubungi admin untuk aktivasi akun")
        }
    }
}

async function getMitraData(username){
    try{
        const res = await axios.get(Link.mitraByUsername+username)
        .then(res=>{
            document.cookie = "idMitra=" + res.data.id;
        })
        url = "index.html"
        window.location = url;
    }catch{
        url = "index.html"
        window.location = url;
    }
}

async function getPersonData(username){
    try{
        const res = await axios.get(Link.personUser+username)
        .then(res=>{
            document.cookie = "idPerson=" + res.data.id;
        })
        url = "index.html"
        window.location = url;
    }catch{
        url = "index.html"
        window.location = url;
    }
    
}