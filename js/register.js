$('#submit').click(function (e) {
    var username = $('#username').val();
    var password = $('#password').val();
    var email = $('#email').val();
    var namaLengkap = $('#namaLengkap').val();
    var wilayahKerja = $('#wilayahKerja').val();
    var jabatan = $('#jabatan').val();
    var data_regis = 
        {
            "username": username,
            "password": password,
            "email": email,
            "namaLengkap": namaLengkap,
            "wilayahKerja": wilayahKerja,
            "jabatan": jabatan,
            "status": 1
    }
    register(data_regis);
    // search();
});
async function register(data){
    let config = 
    {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE",
            "Access-Control-Max-Age":"3600",
            "Access-Control-Allow-Headers":"append,delete,entries,foreach,get,has,keys,set,values,Authorization"
        }

    }
    const res = await axios.post("http://127.0.0.1:3200/pengguna/save",data, config)
    .then(res=>{
        url = "login.html"
        window.location = url;
        });
    return res;
}
async function search(){
    const res = await axios.post("http://127.0.0.1:3200/user/saveAdmin");
    console.log(res)
    return res;
}