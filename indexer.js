let listaUsers = []
const nome = document.querySelector('.nome')
const btnLog = document.querySelector('.login')
// window.addEventListener("beforeunload", function(e){
//   e.preventDefault()
// })


//verifica quantidade de palavras
const palavra = document.getElementsByClassName('comentario-form')
if (palavra.value > 200) {
    alert("Apenas caraceters menores que 200")
} else {
    palavra
}
//foto vazia
let fotoAdd = ''

//
const botao = document.querySelector('.plus')
botao.addEventListener('click', funcao)
function funcao() {
    const captura = document.querySelector('aside')
    captura.style.display = 'flex';
}



const fechar = document.querySelector('.post-modal')
fechar.addEventListener('mouseup', fechandoForm)
function fechandoForm(e) {
    var container = document.querySelector('.form-post');
    if (!container.contains(e.target)) {
        fechar.style.display = 'none';
    }
};

let addfoto = document.querySelector('#campo-foto')
let teste = document.querySelector('.container-imagem')
let uploaded_image = ''
addfoto.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        fotoAdd = uploaded_image
        teste.style.backgroundImage = `url(${uploaded_image})`;
        teste.style.backgroundSize = 'cover';
        teste.style.backgroudRepeat = 'no-repeat';
        teste.style.backgroudRepeat = '';
    })
    reader.readAsDataURL(this.files[0]);
    teste.innerHTML = ''
})  

const muda = document.querySelector('.mudafoto')
muda.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        fotoAdd = uploaded_image
        teste.style.backgroundImage = `url(${uploaded_image})`;
        teste.style.backgroundSize = 'cover';
        teste.style.backgroudRepeat = 'no-repeat';
    })
    reader.readAsDataURL(this.files[0]);
    teste.innerHTML = ''
})  

const postar = document.querySelector(".postar")
postar.addEventListener('click', fazerPost)
 function fazerPost(){
// postar.setAttribute("type", "button")
const textinho = document.querySelector('.comentario-form')
// const fotinho = document.querySelector('#campo-foto')
const criando = document.createElement("div")
criando.innerHTML = `
      <div class="usuario-info">
        <div class="avatar"></div>
        <div class="nome-hora">
          <p class="nome">Joana da Silva Peixoto</p>
          <p class="hora">00 horas atrás</p>
        </div>
      </div>
      <p class="comentario">
       ${textinho.value}
      </p>
    </div>
    <img class="post-imagem" src="${fotoAdd}" alt="" />
    <div class="post-interacoes">
      <div class="container-like">
        <img class="like-btn" src="like.svg" alt="like" />
        <p class="descricao-like">Curtir</p>
      </div>
      <div class="container-coment">
        <img class="coment-btn" src="comentario.svg" alt="like" />
        <p class="descricao-comentario">Comentários</p>
      </div>
    </div>
`  
textinho.value = '';
criando.style = `
width: 100%;
background-color: white;
height: fit-content;
border-radius: 5px;
box-shadow: 0px 0px 5px black;
margin-bottom:40px;
padding:20px;
`
document.querySelector(".secao-posts").appendChild(criando);
 

const foto = criando.querySelector('.like-btn')
const like = criando.querySelector('.descricao-like')
like.addEventListener('click', Ftcurtir)
function Ftcurtir(e) {
    if (like.innerHTML == 'Curtir') {
        like.innerHTML = 'Descurtir'
        foto.setAttribute("src", "like-solid.svg")

    } else {
        like.innerHTML = 'Curtir'
        foto.setAttribute("src", "like.svg")
    }
}

const comentario = criando.querySelector('.descricao-comentario')
comentario.addEventListener('click', adicionarComentario)
function adicionarComentario() {
 const telaComentario = document.createElement('aside');
 telaComentario.className = "asideForm";
telaComentario.innerHTML = `
<form class = "fazercoment">
<button type="buttom" id="botaozao">SAIR</button>
 <h1>COMENTÁRIOS AQUI:</h1>
 <div class = "comentarios">
  <div class = "comentariosFeitos" style = "overflow: auto; height: 50vh; border: solid 1px #999; border-radius: 3px">
 <div class="post-info">
 <div class="usuario-info">
 <div class="avatar"></div>
 <div class="nome-hora">
  <p class="nome">Joana da Silva Peixoto</p>
  <p class="hora">00 horas atrás</p>
 </div>
 </div>
 <p class="comentario">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
  veritatis ratione sit eveniet magni, velit omnis quo quis
 temporibus eaque architecto quos ex aliquam iure, adipisci
  praesentium quidem, quia voluptate.
  </p>
 </div>
<div>
 <div class="post-info">
 <div class="usuario-info">
 <div class="avatar"></div>
 <div class="nome-hora">
 <p class="nome">Joana da Silva Peixoto</p>
 <p class="hora">00 horas atrás</p>
 </div>
 </div>
 <p class="comentario">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
 veritatis ratione sit eveniet magni, velit omnis quo quis
 temporibus eaque architecto quos ex aliquam iure, adipisci
 praesentium quidem, quia voluptate.
 </p>
 </div>
</div>
<br>
<br>
<br>
</div>
<br>
<br>
<div style="display:flex">
<textarea placeholder= "Deseja fazer algum comentário? Faça aqui!" style="resize: none; width: 90%" id="escreva"></textarea>
 <button type="button"; style="margin-left: 3px; width: 12%" id="botaozinho">
<img style="width:25px; height:5px ;padding-top:15px;margin-bottom:10px;" src="send-message-2-1-256.png" alt="envia"/>enviar
</button>
 </div>
  </form>
`
telaComentario.style.cssText = `
position:fixed;
display:flex;
justify-content:space-evenly;
align-items:flex-start;
padding:100px 0;
left:0%;
top:0%;
width:100%;
height:100%;
overflow:auto;
background-color:rgba(0, 0, 0, 0.4);
z-index:1;
`


document.querySelector("body").appendChild(telaComentario); 

const fazComentario = telaComentario.querySelector('#botaozinho')
fazComentario.addEventListener('click', comentando)
function comentando (){
    const novoComentario = document.createElement("div");
    const blu = telaComentario.querySelector('#escreva')
    novoComentario.innerHTML = `
    <div class="usuario-info">
    <div class="avatar"></div>
    <div class="nome-hora">
      <p class="nome">Joana da Silva Peixoto</p>
      <p class="hora">00 horas atrás</p>
    </div>
  </div>
  <p class="comentario">
   ${blu.value}
  </p>  
</div>
    ` 
    blu.value = '';
telaComentario.querySelector(".post-info").appendChild(novoComentario); 
};

const fecharComent = document.querySelector('.botaozao')
fecharComent.addEventListener('click', fechaComentario)
function fechaComentario() {
    const fechamento = telaComentario.querySelector('.asideForm');
        fechamento.style.display = 'none';
}


}
const hora = criando.querySelector('.hora')
   const date = new Date()
   hora.innerHTML = 'Postado às ' + date.getHours() + ":"  + date.getMinutes()
 }



 //abrir pag de login
const login = document.querySelector('.login')
login.addEventListener('click', fazerLogin)
function fazerLogin() {
const pagLogin = document.createElement('form')
pagLogin.setAttribute('id', 'formLog')
pagLogin.innerHTML= `
<h1>Faça seu Login</h1>
<form action="" id="formulario" autocomplete="off">

    <div class="c-form">
        <label for="name" id="lname">Nome Completo ou E-mail: </label>
        <input type="text" id="namel" style="display: flex;
        margin: 10px 0;
        width: 100%;
        height: 30px;">
    </div>
    <div class="c-form">
        <label for="password" id="lpassword">Senha: </label>
        <input type="password" id="passwordl"style="display: block;
        margin: 10px 0;
        width: 100%;
        height: 30px;">
    </div>
    <div class="c-form">
        <label for="passwordConf" id="lpasswordConf">Confirmar Senha: </label>
        <input type="password" id="passwordConfl" style="display: block;
        margin: 10px 0;
        width: 100%;
        height: 30px;">
    </div>
    <button id="enviarl" type="lsubmit" style=" 
    cursor: pointer;
    background-color: blue;
    border: 1px solid black;
    margin: 10px auto 0;
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.5rem;">Cadastrar</button>
</form>
`
pagLogin.style = `
position:fixed;
display:flex;
padding:50px;
left:20%;
top:3%;
width:30%;
height: 90%;
background-color:'white';
z-index:1;
margin-left:16%;
`
document.querySelector("body").appendChild(pagLogin);

let getNome = document.querySelector('#namel')
let getPwd = document.querySelector('#passwordl')
let getConfPwd = document.querySelector('#passwordConfl')
let btnEnviar = document.querySelector('#enviarl')
let logPage = document.querySelector('#formLog')

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    for(i = 0; listaUsers[i]; i++){
        
        if(listaUsers[i].email == getNome.value){
            const nome = document.querySelector('.nome')
            console.log('achou');
            nome.innerHTML =listaUsers[i].user;
            btnLog.innerText = 'Log out'
            btnLog.addEventListener('click', () => {
                logPage.style.display = 'none'
                location.reload()
            })
        } else {
            console.log('nao achou');
        }
    }
})
const fechandoLogin = document.querySelector('main')
fechandoLogin.addEventListener('click', fecharLogin)
function fecharLogin(e){
        console.log(e.target);
        var contain = pagLogin.querySelector('#enviarl');
        if (!contain.contains(e.target)) {
            pagLogin.style.display = 'none';
        }
      };
}
   //abrir pag de signup
const signup = document.querySelector('.signup')
signup.addEventListener('click', fazersignUp)
function fazersignUp() {
const pagsignup = document.createElement('form')
pagsignup.innerHTML= `
<h1>Inscreva-se</h1>
<form action="" id="formulario" autocomplete="off">

    <div class="c-form">
        <label for="name" id="lname">Nome: </label>
        <input type="text" id="name" style="display: flex;
        margin: 10px 0;
        width: 100%;
        height: 30px;">
    </div>
    <div class="c-form">
    <label for="nomeUsuario" id="lnmUsuario">Nome de Usuário</label>
    <input type="text" id="user" style="display: block;
    margin: 5px 0;
    width: 100%;
    height: 30px;">
</div>
    <div class="c-form">
        <label for="email" id="lemail">E-mail: </label>
        <input type="email" id="email" style="display: block;
        margin: 5px 0;
        width: 100%;
        height: 30px;">
    </div>
    <div class="c-form">
        <label for="password" id="lpassword">Senha: </label>
        <input type="password" id="password"style="display: block;
        margin: 5px 0;
        width: 100%;
        height: 30px;">
    </div>
    <div class="c-form">
        <label for="passwordConf" id="lpasswordConf">Confirmar Senha: </label>
        <input type="password" id="passwordConf" style="display: block;
        margin: 5px 0;
        width: 100%;
        height: 30px;">
    </div>
    <button id="enviar" type="submit" style=" 
    cursor: pointer;
    background-color: blue;
    border: 1px solid black;
    margin: 10px auto 0;
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.5rem;">Cadastrar</button>
</form>
`
pagsignup.style = `
position:fixed;
display:flex;
padding:50px;
left:20%;
top:0%;
width:30%;
height: 100%;
background-color:'white';
z-index:1;
margin-left:16%;
`

document.querySelector("body").appendChild(pagsignup);

const fechando = document.querySelector('main')
fechando.addEventListener('click', fecharSignUp)
function fecharSignUp(e){
        console.log(e.target);
        var container = pagsignup.querySelector('#enviar');
        if (!container.contains(e.target)) {
            pagsignup.style.display = 'none';
        }
      };

let createName = document.querySelector('#name')
let createUser = document.querySelector('#user')
let createEmail = document.querySelector('#email')
let createPwd = document.querySelector('#password')
let confPwd = document.querySelector('#passwordConf')
let btnEnviar = document.querySelector('#enviar')

console.log(btnEnviar);

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    let objUser = {
        nome: createName.value,
        user: createUser.value,
        email: createEmail.value,
        senha: createPwd.value,
        confPwd: confPwd.value
    }

    listaUsers.push(objUser)
    console.log(listaUsers);
})
}