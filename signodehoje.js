let signos = [
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

const retorna_signo = (signos, data) => {
    
    let ano = data.getFullYear();
    
    for (const signo of signos){

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00",);
        let data_fim_signo = new Date(ano + "-" + signo.DataFim + " 23:59:59"); //Aqui posso colocar signos[0]["DataFim"] ou .DataFim
        
        let tipo_comparacao = signo.DataInicio == "12-22" ? "or" : "and";


        if (tipo_comparacao == "and"){
            if (data >= data_inicio_signo && data <= data_fim_signo) {
                return signo["Nome"];
            }
        }else if (tipo_comparacao == "or"){
            if (data >= data_inicio_signo || data <= data_fim_signo){
                return signo.Nome;
            }
        }
    }
};


let data_app = new Date("2026-12-30 00:00:00");//ano-mes-dia
const nome_signo = retorna_signo(signos, data_app);

console.log("O signo de hoje é: " + nome_signo);
