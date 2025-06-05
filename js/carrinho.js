let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuarioLogado = usuarios.find(usuario => usuario.isLogado === true);
const carrinho = usuarioLogado.carrinholet
login = document.getElementById('btn');
let usuario = document.getElementById('user');

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
        window.location.href = "/index.html";
    }
});

let container = document.getElementById('container')
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    container.innerHTML = '';

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioLogado = usuarios.find(usuario => usuario.isLogado === true);

    let carrinho = usuarioLogado?.carrinho || [];

    if (carrinho.length === 0) {
        container.style.alignItems = 'center'
        container.innerHTML = '<p id="alerta">Sem pranchas no carrinho</p>';
        return;
    }

    carrinho.forEach((prancha, index) => {
        const item = document.createElement('div');
        item.className = 'prancha';
        item.innerHTML = `
            <img src="${prancha.image}" alt="${prancha.nome}">
            <span>
                <span>
                    <p>${prancha.nome}</p>
                    <p>${prancha.marca}</p>
                    <p>R$ ${prancha.valor}</p>
                </span>
                <button class="excluir" data-index="${index}">Remover do carrinho</button>
            </span>
        `;
        container.appendChild(item);
    });

    const botoesExcluir = document.querySelectorAll('.excluir');
    botoesExcluir.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            carrinho.splice(index, 1);

            usuarioLogado.carrinho = carrinho;

            usuarios = usuarios.map(usuario =>
                usuario.email === usuarioLogado.email ? usuarioLogado : usuario
            );

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            location.reload();
        });
    });
});
