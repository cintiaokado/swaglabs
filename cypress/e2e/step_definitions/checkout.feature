Feature: Processo de Checkout

Scenario: Verificar os itens do checkout correspondem aos adicionados ao carrinho
  Given faz o login com uma credencial válida
  And adiciona produtos ao carrinho  
  When realiza o checkout
  Then os itens do checkout devem corresponder aos produtos adicionados ao carrinho
 