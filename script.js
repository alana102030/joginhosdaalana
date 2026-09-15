const perguntas = [
    {
        pergunta: "Qual é uma característica comum dos cabelos cacheados?",
        alternativas: [
            "Possuem maior dificuldade de distribuir a oleosidade da raiz até as pontas",
            "Nunca precisam de hidratação",
            "Não podem usar condicionador",
            "Devem ser lavados apenas uma vez por mês"
        ],
        correta: 0
    },

    {
        pergunta: "Qual cuidado ajuda a manter os cachos hidratados?",
        alternativas: [
            "Evitar qualquer produto no cabelo",
            "Utilizar produtos adequados para hidratação",
            "Usar água muito quente sempre",
            "Escovar o cabelo seco todos os dias"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é uma boa forma de finalizar cabelos cacheados?",
        alternativas: [
            "Amassar os cachos com as mãos após aplicar o creme",
            "Pentear o cabelo seco várias vezes",
            "Não utilizar nenhum produto",
            "Prender o cabelo molhado com muita força"
        ],
        correta: 0
    },

    {
        pergunta: "Por que o cabelo cacheado pode apresentar frizz?",
        alternativas: [
            "Porque o cabelo nunca precisa de cuidados",
            "Por fatores como umidade, atrito e falta de hidratação",
            "Porque todo cabelo cacheado está danificado",
            "Porque o shampoo causa todos os tipos de frizz"
        ],
        correta: 1
    },

    {
        pergunta: "Qual produto pode ajudar na definição dos cachos?",
        alternativas: [
            "Creme para pentear ou gelatina adequada ao cabelo",
            "Sabonete corporal",
            "Detergente",
            "Álcool"
        ],
        correta: 0
    },

    {
        pergunta: "O que significa fazer fitagem?",
        alternativas: [
            "Uma técnica de finalização que separa o cabelo em mechas",
            "Cortar todo o cabelo",
            "Lavar o cabelo somente com água",
            "Pintar o cabelo de rosa"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarJogo() {

    perguntaAtual = 0;
    pontuacao = 0;

    document.getElementById("inicio").classList.add("escondido");

    document.getElementById("resultado").classList.add("escondido");

    document.getElementById("quiz").classList.remove("escondido");

    mostrarPergunta();
}

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("progresso").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.classList.add("alternativa");

        botao.onclick = () => verificarResposta(indice);

        alternativas.appendChild(botao);
    });
}

function verificarResposta(indice) {

    const pergunta = perguntas[perguntaAtual];

    if (indice === pergunta.correta) {
        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("quiz")
        .classList.add("escondido");

    document.getElementById("resultado")
        .classList.remove("escondido");

    document.getElementById("pontuacao").textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    let mensagem;

    if (pontuacao === perguntas.length) {

        mensagem =
            "🌟 Incrível! Você é uma verdadeira especialista em cachos!";

    } else if (pontuacao >= 4) {

        mensagem =
            "💗 Muito bem! Você entende bastante sobre cuidados com cabelos cacheados.";

    } else if (pontuacao >= 2) {

        mensagem =
            "💙 Você está no caminho certo! Que tal aprender ainda mais sobre seus cachos?";

    } else {

        mensagem =
            "✨ Continue aprendendo! Cada cabelo cacheado tem sua própria beleza e necessidades.";
    }

    document.getElementById("mensagemResultado")
        .textContent = mensagem;
}

function jogarNovamente() {

    document.getElementById("resultado")
        .classList.add("escondido");

    document.getElementById("inicio")
        .classList.remove("escondido");
}
