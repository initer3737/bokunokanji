function getData(){
    let t=document.getElementById('login-user');
    let username=localStorage.getItem('user');
    t.innerHTML=username;
}

function logout(){
    let t=document.getElementById('login-user');
    let home=document.getElementById('home');
    t.className="d-none"; 
    home.className="nav-link";
    alert('anda sudah logout silahkan ke halaman home'); 
}


function register(){
    let username=document.querySelector("input[name=user-register]").value;
    let password=document.querySelector("input[name=pass-register]").value;
        // jika kosong?
        if(username && password){
            alert(`user dengan nama ${username} dan password=${password} telah dibuat`);
            // username cache
            localStorage.setItem('user',username);
            // password cache
            localStorage.setItem('pass',password);
            // message
            alert(`berhasil membuat akun dengan username=${username} dan password=${password}`);
        }else{
            alert('data tidak boleh kosong');
        }
}

function info(){
    let username=localStorage.getItem('user');
    let password=localStorage.getItem('pass');
    if(username && password){
        alert(`username=${username} dan password= ${password}`);  
    }else{
        alert(`username password belum dibuat silahkan registrasi akun`);    
    }
}

function login(){
    let navbarhide=document.getElementById('navbar-link');
    let user=localStorage.getItem('user');
    let pass=localStorage.getItem('pass');
        let inputUser=document.querySelector('input[name=user-login]').value;
        let inputPass=document.querySelector('input[name=pass-login]').value;
            if(user == inputUser && pass == inputPass){
                // alert(`user login=${inputUser} password user=${inputPass}`);
                alert("login berhasil silahkan ke halaman learn's");
                navbarhide.className="nav-link";
            }else if(inputPass == '' && inputUser == ''){
                alert('username  dan password wajib di isi!!');
            }else{
                alert('username atau password salah coba lagi');
            }
            
}

function auth(){
    let user=localStorage.getItem('user');
    let pass=localStorage.getItem('pass');
    let navbarhide=document.getElementById('navbar-link');
    if(user && pass){

    }else{
        alert('maaf anda belum registrasi akun silahkan registrasi dahulu!!');
    }
}

// call the function
getData();