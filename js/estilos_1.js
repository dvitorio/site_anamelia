const btnModalLogin = document.getElementById('btnModalLogin');
const login = document.getElementById('login');
const geral = document.getElementById('geral');
const btnLoginSair = document.getElementById('btnLoginSair');


//Abrir modal login
btnModalLogin.onclick = ()=>{
    geral.classList.add('d-none');
    login.classList.remove('d-none');
    
}

//Fechar modal login
btnLoginSair.onclick = ()=>{
    geral.classList.remove('d-none');
    login.classList.add('d-none');
}


