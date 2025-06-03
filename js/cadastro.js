let botaoCadastro = document.getElementById("botão-cadastrar");

botaoCadastro.addEventListener("click", () => {

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email-cadastro").value.trim();
    let senha = document.getElementById("senha-cadastro").value;
    let confirmarSenha = document.getElementById("confirmar-senha").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    document.getElementById("erro-nome").innerHTML = "";
    document.getElementById("erro-email").innerHTML = "";
    document.getElementById("erro-senha").innerHTML = "";
    document.getElementById("erro-confirmarSenha").innerHTML = "";

    let temErro = false;

    if (nome == "") {
        document.getElementById("erro-nome").innerHTML = "*Insira o nome";
        temErro = true;
    }

    if (email == "") {
        document.getElementById("erro-email").innerHTML = "*Insira o e-mail";
        temErro = true;
    } else if (
        !email.includes("@") || !email.includes(".")
        || email.indexOf("@") == 0 || email.indexOf(".") < email.indexOf("@") + 3) {
        document.getElementById("erro-email").innerHTML = "*E-mail inválido";
        temErro = true;
    } else {
        let emailExiste = false;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email.toLowerCase().trim() === email.toLowerCase().trim()) {
                emailExiste = true;
                break;
            }
        }
        if (emailExiste) {
            document.getElementById("erro-email").innerHTML = "*E-mail já cadastrado";
            temErro = true;
        }
    }

    if (senha == "") {
        document.getElementById("erro-senha").innerHTML = "*Insira a senha";
        temErro = true;
    } else if (confirmarSenha == "") {
        document.getElementById("erro-confirmarSenha").innerHTML = "*Confirme a senha";
        temErro = true;
    } else if (senha !== confirmarSenha) {
        document.getElementById("erro-confirmarSenha").innerHTML = "*As senhas não coincidem";
        temErro = true;
    }

    if (temErro) return;

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";


});

let senhaCadastro = document.getElementById("senha-cadastro");
let olho1 = document.getElementById("olho1");

olho1.addEventListener("click", () => {
    if (senhaCadastro.type === "password") {
        senhaCadastro.type = "text";
        olho1.src = "/images/icones/olhos-cruzados.png";
    } else {
        senhaCadastro.type = "password";
        olho1.src = "/images/icones/olho.png";
    }
});

let confirmarSenha = document.getElementById("confirmar-senha");
let olho2 = document.getElementById("olho2");

olho2.addEventListener("click", () => {
    if (confirmarSenha.type === "password") {
        confirmarSenha.type = "text";
        olho2.src = "/images/icones/olhos-cruzados.png";
    } else {
        confirmarSenha.type = "password";
        olho2.src = "/images/icones/olho.png";
    }
});