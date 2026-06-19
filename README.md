# Consulta de Signos com JavaScript

Projeto desenvolvido em JavaScript com execução via Node.js.

A aplicação identifica automaticamente o signo do dia atual e permite que o usuário consulte o signo correspondente a qualquer outra data informada pelo terminal.

---

## Objetivo do Projeto

O objetivo deste projeto é praticar conceitos fundamentais de JavaScript por meio de uma aplicação simples, interativa e executada no terminal.

O projeto trabalha com:

- Manipulação de datas
- Arrays de objetos
- Funções
- Estruturas condicionais
- Laços de repetição
- Entrada de dados pelo terminal
- Validação simples de informações

---

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Exibe o signo correspondente ao dia atual.
- Pergunta se o usuário deseja consultar outra data.
- Permite consultar várias datas sem precisar reiniciar o programa.
- Recebe uma data no formato `DD/MM/AAAA`.
- Valida se a data informada está em um formato aceitável.
- Retorna o signo correspondente à data digitada.
- Encerra o programa quando o usuário não quiser fazer novas consultas.
- Trata o caso especial de Capricórnio, que começa em dezembro e termina em janeiro.

---

## Tecnologias Utilizadas

- JavaScript
- Node.js
- readline-sync

---

## Como Funciona

Ao iniciar o programa, o sistema identifica a data atual usando:

```javascript
const dataHoje = new Date();