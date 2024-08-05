Feature: Gerenciamento de produtos no carrinho

Scenario: Adicionar e remover produtos do carrinho
  Given faz o login com uma credencial válida
  When adiciona produtos ao carrinho
  And remove um produto do carrinho
  Then deve exibir a lista atualizada de produtos no carrinho
