let botaoLogin = document.querySelector(".botão-login");

botaoLogin.addEventListener("click", (event) => {
  event.preventDefault();
  let email = document.getElementById("email-login").value.trim();
  let senha = document.getElementById("senha-login").value;
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  limparErros();

  let temErro = false;

  if (email === "") {
    mostrarErro("erro-email", "*Insira o e-mail");
    temErro = true;
  }

  if (senha === "") {
    mostrarErro("erro-senha", "*Insira a senha");
    temErro = true;
  }

  if (temErro) return;

  let usuarioEncontrado = usuarios.find(
    (usuario) =>
      usuario.email.toLowerCase().trim() === email.toLowerCase().trim() &&
      usuario.senha === senha
  );

  if (usuarioEncontrado) {
    alert("Login realizado com sucesso!");
    console.log(usuarioEncontrado);
  } else {
    mostrarErro("erro-geral", "*E-mail ou senha inválidos");
  }
});

function mostrarErro(idElemento, mensagem) {
  const erroElemento = document.getElementById(idElemento);
  if (erroElemento) {
    erroElemento.innerHTML = mensagem;
    setTimeout(() => {
      erroElemento.innerHTML = "";
    }, 3000);
  }
}

function limparErros() {
  ["erro-email", "erro-senha", "erro-geral"].forEach(id => {
    const erroElemento = document.getElementById(id);
    if (erroElemento) {
      erroElemento.innerHTML = "";
    }
  });
}

let olho = document.getElementById("olho");
let senha = document.getElementById("senha-login");

olho.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    olho.src = "/images/icones/olhos-cruzados.png";
  } else {
    senha.type = "password";
    olho.src = "/images/icones/olho.png";
  }
});
