// Importa a biblioteca readline-sync.
// Essa biblioteca permite receber informações digitadas pelo usuário no terminal.
import entrada from "readline-sync";

// Array com todos os signos e seus respectivos períodos.
// Cada item do array é um objeto com:
// Nome: nome do signo
// DataInicio: data inicial do signo no formato MM-DD
// DataFim: data final do signo no formato MM-DD
const signos = [
  { Nome: "Aquário", DataInicio: "01-21", DataFim: "02-19" },
  { Nome: "Peixes", DataInicio: "02-20", DataFim: "03-20" },
  { Nome: "Áries", DataInicio: "03-21", DataFim: "04-20" },
  { Nome: "Touro", DataInicio: "04-21", DataFim: "05-20" },
  { Nome: "Gêmeos", DataInicio: "05-21", DataFim: "06-21" },
  { Nome: "Câncer", DataInicio: "06-22", DataFim: "07-23" },
  { Nome: "Leão", DataInicio: "07-24", DataFim: "08-23" },
  { Nome: "Virgem", DataInicio: "08-24", DataFim: "09-23" },
  { Nome: "Libra", DataInicio: "09-24", DataFim: "10-23" },
  { Nome: "Escorpião", DataInicio: "10-24", DataFim: "11-22" },
  { Nome: "Sagitário", DataInicio: "11-23", DataFim: "12-21" },
  { Nome: "Capricórnio", DataInicio: "12-22", DataFim: "01-20" },
];

// Função que verifica se uma data está dentro de um intervalo.
// Ela recebe:
// data: data que será verificada
// dataInicio: início do período do signo
// dataFim: fim do período do signo
// tipoComparacao: define se será usada comparação "and" ou "or"
const verificaDataNoIntervalo = (data, dataInicio, dataFim, tipoComparacao) => {
  // Comparação padrão.
  // A data precisa ser maior ou igual à data inicial
  // E menor ou igual à data final.
  // Exemplo: Aquário vai de 21/01 até 19/02.
  if (tipoComparacao === "and") {
    return data >= dataInicio && data <= dataFim;
  }

  // Comparação especial.
  // Usada para Capricórnio, porque ele começa em dezembro
  // e termina em janeiro do ano seguinte.
  // Exemplo: começa em 22/12 e termina em 20/01.
  if (tipoComparacao === "or") {
    return data >= dataInicio || data <= dataFim;
  }

  // Caso o tipo de comparação não seja reconhecido,
  // a função retorna false por segurança.
  return false;
};

// Função que retorna o signo correspondente a uma data.
// Ela recebe:
// signos: array com os signos
// data: data que será consultada
const retornaSigno = (signos, data) => {
  // Pega o ano da data informada.
  // Esse ano será usado para montar as datas completas de início e fim dos signos.
  const ano = data.getFullYear();

  // Percorre cada signo dentro do array de signos.
  for (const signo of signos) {
    // Monta a data inicial do signo usando o ano da data consultada.
    // Exemplo: se o ano for 2026 e o início for 01-21,
    // a data criada será 2026-01-21.
    const dataInicioSigno = new Date(`${ano}-${signo.DataInicio} 00:00:00`);

    // Monta a data final do signo usando o ano da data consultada.
    // Exemplo: se o ano for 2026 e o fim for 02-19,
    // a data criada será 2026-02-19.
    const dataFimSigno = new Date(`${ano}-${signo.DataFim} 23:59:59`);

    // Define o tipo de comparação que será usado.
    // Para Capricórnio, usamos "or", pois ele atravessa o ano.
    // Para todos os outros signos, usamos "and".
    const tipoComparacao = signo.Nome === "Capricórnio" ? "or" : "and";

    // Verifica se a data informada está dentro do período do signo atual.
    // Se estiver, retorna o nome do signo.
    if (
      verificaDataNoIntervalo(
        data,
        dataInicioSigno,
        dataFimSigno,
        tipoComparacao
      )
    ) {
      return signo.Nome;
    }
  }

  // Se nenhum signo for encontrado, retorna uma mensagem padrão.
  return "Signo não encontrado";
};

// Função responsável por converter a data digitada pelo usuário.
// O usuário digita no formato DD/MM/AAAA.
// A função transforma essa data em um objeto Date do JavaScript.
const converterDataDigitada = (dataInformada) => {
  // Divide a data usando a barra como separador.
  // Exemplo: "07/02/2026" vira ["07", "02", "2026"].
  const partesData = dataInformada.split("/");

  // Verifica se a data tem exatamente três partes:
  // dia, mês e ano.
  if (partesData.length !== 3) {
    return null;
  }

  // Separa cada parte da data informada.
  const dia = partesData[0];
  const mes = partesData[1];
  const ano = partesData[2];

  // Cria uma nova data no formato aceito pelo JavaScript.
  // O formato usado aqui é AAAA-MM-DD.
  const dataConvertida = new Date(`${ano}-${mes}-${dia} 00:00:00`);

  // Verifica se a data criada é inválida.
  // Se for inválida, retorna null.
  if (isNaN(dataConvertida.getTime())) {
    return null;
  }

  // Retorna a data convertida corretamente.
  return dataConvertida;
};

// Cria uma data com o dia atual do sistema.
const dataHoje = new Date();

// Chama a função retornaSigno para descobrir o signo do dia atual.
const signoHoje = retornaSigno(signos, dataHoje);

// Exibe o signo de hoje no terminal.
console.log("--------------------------------");
console.log("O signo de hoje é: " + signoHoje);
console.log("--------------------------------");

// Pergunta inicial para saber se o usuário quer consultar outra data.
// A resposta será armazenada na variável resposta.
let resposta = entrada.question(
  "Deseja verificar o signo de outra data? Digite S para sim ou N para não: "
);

// Enquanto a resposta for "s" ou "S", o programa continuará rodando.
// O método toLowerCase() transforma a resposta em letra minúscula.
// Assim, tanto "S" quanto "s" serão aceitos.
while (resposta.toLowerCase() === "s") {
  // Solicita que o usuário digite uma data no formato correto.
  const dataInformada = entrada.question(
    "Digite uma data no formato DD/MM/AAAA: "
  );

  // Converte a data digitada para um objeto Date.
  const dataApp = converterDataDigitada(dataInformada);

  // Se a função retornar null, significa que a data é inválida.
  if (dataApp === null) {
    console.log("Data inválida. Use o formato DD/MM/AAAA.");
  } else {
    // Se a data for válida, chama a função retornaSigno
    // para descobrir o signo da data informada.
    const nomeSigno = retornaSigno(signos, dataApp);

    // Exibe o resultado no terminal.
    console.log("O signo da data informada é: " + nomeSigno);
  }

  console.log("--------------------------------");

  // Pergunta novamente se o usuário deseja verificar outra data.
  // Se responder "S", o while continua.
  // Se responder qualquer outra coisa, o programa encerra.
  resposta = entrada.question(
    "Deseja verificar outra data? Digite S para sim ou N para não: "
  );
}

// Quando o usuário responde algo diferente de "S",
// o programa sai do while e exibe a mensagem de encerramento.
console.log("Programa encerrado.");