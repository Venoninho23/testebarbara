## Nomes do Grupo
- Lucas Maurício
- Gustavo Mendes
- Chrystian Alerrandro
- Leonardo José Monteiro

# Plano de Testes para Projeto de Agenda de Compromissos

## Introdução
O projeto "Agenda de Compromissos" tem como objetivo gerenciar compromissos de usuários, permitindo adicionar, remover e listar compromissos. Este plano de testes visa garantir que todas as funcionalidades funcionem conforme o esperado.

## Funcionalidades a Serem Testadas
- Funcionalidade 1: Adicionar Compromisso
- Funcionalidade 2: Remover Compromisso
- Funcionalidade 3: Listar Compromissos

## Casos de Teste

### Funcionalidade 1: Adicionar Compromisso
- **Caso de Teste 1.1**: Adicionar um compromisso com dados válidos
  - **Entrada**: Data: '2024-05-27', Hora: '14:00', Descrição: 'Reunião de trabalho'
  - **Saída Esperada**: Compromisso adicionado à lista de compromissos

### Funcionalidade 2: Remover Compromisso
- **Caso de Teste 2.1**: Remover um compromisso existente
  - **Entrada**: Data: '2024-05-27', Hora: '14:00'
  - **Saída Esperada**: Compromisso removido da lista de compromissos

### Funcionalidade 3: Listar Compromissos
- **Caso de Teste 3.1**: Listar compromissos quando há compromissos na lista
  - **Entrada**: Nenhuma
  - **Saída Esperada**: Lista contendo todos os compromissos adicionados
- **Caso de Teste 3.2**: Listar compromissos quando não há compromissos na lista
  - **Entrada**: Nenhuma
  - **Saída Esperada**: Lista vazia

## Ferramentas Utilizadas
- **Jest** para testes unitários.
- **TypeScript** para desenvolvimento.

## Processo de Execução

### Passos para Executar os Testes
1. **Instalar Dependências:** Certifique-se de que as dependências do projeto estão instaladas. Execute:
   ```bash
   npm install
   ```

2. **Executar Testes:** Para executar os testes, use o comando:
   ```bash
   npm test
   ```

### Estrutura de Diretórios
- `src/agenda.ts`: Implementação da classe `Agenda`.
- `tests/agenda.test.ts`: Arquivo contendo os testes unitários.

### Visualização dos Resultados
Após executar os testes com `npm test`, o Jest exibirá os resultados dos testes no terminal, indicando quais testes passaram e quais falharam.

## Conclusão
Este plano de testes garante que as funcionalidades principais da Agenda de Compromissos estão funcionando conforme o esperado. Os próximos passos incluem a implementação de mais casos de teste para cobrir cenários adicionais e a integração de testes automatizados no fluxo de desenvolvimento contínuo.
```