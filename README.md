# Documento de Requisitos - Caso de Uso: Avaliação de Candidato a Desenvolvedor React

## Introdução

O caso de uso consiste em desenvolver um componente que lista e filtra cobranças geradas por um vendedor, utilizando os componentes da lib Chakra UI.

---

- **O componente _random-word_ exemplifica um cenário básico de integração**
- Recomenda-se utilizar Node 18.
  
### Critérios de aceite:

- Os dados da listagem devem ser consultados do endpoint `/api/charges`.
- O estado da aplicação deve ser gerenciado utilizando Redux e Redux-Thunk, levando em consideração, visualmente, os seguintes cenários:
  - Carregando - estado em que a request está sendo executada;
  - Sucesso - lista é renderizada;
  - Erro - alerta de erro é exibido para o usuário ao ocorrer alguma falha na request;
- Como usuário, é necessário que seja possível filtrar os itens da lista através de um campo digitável.
  - A API aceita o Query Param `search` para retornar os itens filtrados.
- O caso de uso deve ser testável, principalmente o componente principal.

## Pontos a serem avaliados

- Qualidade do código
- Testes unitários
- Arquitetura
- Abstração
