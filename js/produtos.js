const produtos = [
    {
        id: 1,
        nome: 'Prancha Pyzel SkyRider',
        preco: 'R$ 3.800,00',
        imagem: '/images/pranchas/pyzel1.png',
        marca: 'marca1'
    },
    {
        id: 2,
        nome: 'Prancha Pyzel WaveFang',
        preco: 'R$ 3.490,00',
        imagem: '/images/pranchas/pyzel2.png',
        marca: 'marca1'
    },
    {
        id: 3,
        nome: 'Prancha Pyzel NovaTide',
        preco: 'R$ 4.100,00',
        imagem: '/images/pranchas/pyzel3.png',
        marca: 'marca1'
    },
    {
        id: 4,
        nome: 'Prancha Pyzel SeaCraft',
        preco: 'R$ 3.750,00',
        imagem: '/images/pranchas/pyzel4.png',
        marca: 'marca1'
    },
    {
        id: 5,
        nome: 'Prancha Pyzel AquaBlade',
        preco: 'R$ 3.950,00',
        imagem: '/images/pranchas/pyzel5.png',
        marca: 'marca1'
    },
    {
        id: 6,
        nome: 'Prancha Merrick Jetcurl',
        preco: 'R$ 3.200,00',
        imagem: '/images/pranchas/al merrick1.png',
        marca: 'marca2'
    },
    {
        id: 7,
        nome: 'Prancha Merrick DriftCore',
        preco: 'R$ 3.490,00',
        imagem: '/images/pranchas/al merrick2.png',
        marca: 'marca2'
    },
    {
        id: 8,
        nome: 'Prancha Merrick Swellborn',
        preco: 'R$ 3.780,00',
        imagem: '/images/pranchas/al merrick3.png',
        marca: 'marca2'
    },
    {
        id: 9,
        nome: 'Prancha Merrick TideDrifter',
        preco: 'R$ 4.050,00',
        imagem: '/images/pranchas/al merrick4.png',
        marca: 'marca2'
    },
    {
        id: 10,
        nome: 'Prancha Merrick ReefChaser',
        preco: 'R$ 3.890,00',
        imagem: '/images/pranchas/al merrick5.png',
        marca: 'marca2'
    },
    {
        id: 11,
        nome: 'Prancha Sharpeye OceanRush',
        preco: 'R$ 3.950,00',
        imagem: '/images/pranchas/sharpeye1.png',
        marca: 'marca3'
    },
    {
        id: 12,
        nome: 'Prancha Sharpeye DeepWhirl',
        preco: 'R$ 4.200,00',
        imagem: '/images/pranchas/sharpeye2.png',
        marca: 'marca3'
    },
    {
        id: 13,
        nome: 'Prancha Sharpeye CurlStrike',
        preco: 'R$ 4.050,00',
        imagem: '/images/pranchas/sharpeye3.png',
        marca: 'marca3'
    },
    {
        id: 14,
        nome: 'Prancha Sharpeye StormFin',
        preco: 'R$ 3.790,00',
        imagem: '/images/pranchas/sharpeye4.png',
        marca: 'marca3'
    },
    {
        id: 15,
        nome: 'Prancha Lost TideRogue',
        preco: 'R$ 2.990,00',
        imagem: '/images/pranchas/lost1.png',
        marca: 'marca4'
    },
    {
        id: 16,
        nome: 'Prancha Lost SaltFlash',
        preco: 'R$ 3.100,00',
        imagem: '/images/pranchas/lost2.png',
        marca: 'marca4'
    },
    {
        id: 17,
        nome: 'Prancha Lost EchoWave',
        preco: 'R$ 3.350,00',
        imagem: '/images/pranchas/lost3.png',
        marca: 'marca4'
    },
    {
        id: 18,
        nome: 'Prancha Lost ReefPhantom',
        preco: 'R$ 3.250,00',
        imagem: '/images/pranchas/lost4.png',
        marca: 'marca4'
    },
    {
        id: 19,
        nome: 'Prancha Lost HollowRush',
        preco: 'R$ 3.680,00',
        imagem: '/images/pranchas/lost5.png',
        marca: 'marca4'
    }
];


const container = document.getElementById('produtos-container');
const checkboxes = document.querySelectorAll('input[name="marca"]');


function exibirProdutos(lista) {
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    lista.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <button class="comprar">Comprar</button>
    `;
        container.appendChild(div);
    });
}


function filtrarProdutos() {
    const marcasSelecionadas = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    if (marcasSelecionadas.length === 0) {
        exibirProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p =>
            marcasSelecionadas.includes(p.marca)
        );
        exibirProdutos(filtrados);
    }
}


checkboxes.forEach(cb => {
    cb.addEventListener('change', filtrarProdutos);
});


exibirProdutos(produtos);

let btn = document.querySelectorAll('.comprar');
btn.forEach((botao) => {
    botao.addEventListener('click', () => {
        let card = botao.closest('.produto')
        let nome = card.querySelector('h3').innerHTML
        let valor = card.querySelectorAll('p')[0].innerHTML
        let image = '/images' + card.querySelector('img').src.split('/images')[1]
        let valorUnico = Number(valor.replace('R$', '').replace('.', '').replace(',', '.').trim());

        let prancha = {
            nome: nome,
            valor: valorUnico,
            image: image
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuarioLogado = usuarios.find(usuario => usuario.isLogado === true);

        usuarioLogado.carrinho.push(prancha)

        usuarios = usuarios.map(usuario =>
            usuario.email === usuarioLogado.email ? usuarioLogado : usuario
        );
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    })
})

