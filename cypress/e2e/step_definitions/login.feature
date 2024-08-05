Feature: Login

Scenario: Logar com usuário válido
  Given que o usuário acessa a página de login
  When faz o login com uma credencial válida
  Then deve conseguir logar com sucesso

Scenario: Logar com usuário bloqueado
  Given que o usuário acessa a página de login
  When faz o login com uma credencial bloqueada
  Then deve exibir mensagem de alerta de usuário bloqueado

Scenario: Logar com usuário ou senha inválidos
  Given que o usuário acessa a página de login
  When faz o login com um usuário ou senha inválido
  Then deve exibir mensagem de alerta informando que o usuário ou senha estão inválidos