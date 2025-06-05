let login = document.getElementById('btn');
let usuario = document.getElementById('user');
let dropdown = document.getElementById('dropdown')
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuarioLogado = usuarios.find(usuario => usuario.isLogado === true);

document.addEventListener("DOMContentLoaded", () => {
  if (usuarioLogado) {
    login.style.display = 'none';
    let p = document.createElement('p');
    p.textContent = 'Olá, ' + usuarioLogado.nome;
    usuario.appendChild(p);
    dropdown.style.display = 'flex'
    usuario.style.display = 'block';
  } else {
    login.style.display = 'block';
    dropdown.style.display = 'none'
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

let botoesComprar = document.querySelectorAll('.comprar');

botoesComprar.forEach((botao) => {
  botao.addEventListener('click', () => {
    let card = botao.closest('.card')
    let nome = card.querySelector('.nome').innerHTML
    let valor = card.querySelector('.valor').innerHTML
    let image = '/images' + card.getElementsByTagName('img')[0].src.split('/images')[1]
    let valorUnico = Number(valor.replace('R$', '').replace('.', '').replace(',', '.').trim());

    let prancha = {
      nome: nome,
      valor: valorUnico,
      image: image
    }
    usuarioLogado.carrinho.push(prancha)

    usuarios = usuarios.map(usuario =>
      usuario.email === usuarioLogado.email ? usuarioLogado : usuario
    );
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  });
});
