let login = document.getElementById('btn');
let usuario = document.getElementById('user');
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuarioLogado = usuarios.find(usuario => usuario.isLogado === true);

document.addEventListener("DOMContentLoaded", () => {
  if (usuarioLogado) {
    login.style.display = 'none';
    let p = document.createElement('p');
    p.textContent = 'Olá, ' + usuarioLogado.nome;
    usuario.appendChild(p);
    usuario.style.display = 'block';
  } else {
    login.style.display = 'block';
    usuario.style.display = 'none';
  }
});

let btn = document.getElementById('sair');
btn.addEventListener("click", () => {
  if (usuarioLogado) {
    usuarioLogado.isLogado = false;

    usuarios = usuarios.map(usuario =>
      usuario.email === usuarioLogado.email ? usuarioLogado : usuario
    );

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    location.reload();
  }
});
