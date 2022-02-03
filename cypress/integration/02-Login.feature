Feature: Percurso Usuário Registrado

    Scenario Outline: Usuário realiza o percurso completo no site estando registrado
        Given que o usuario acessa o site
        And digita seu <email> e <senha> cadastrados
        And vai ate o produto e adiciona ao carrinho
        When realizar o checkout da compra
        Then ele então deve concluir a compra impecavelmente <seletorTipoCartaoVar> <caixaNomeDonoCartaoVar> <caixaNumeroCartaoVar> <seletorDataExpiraMesVar> <seletorDataExpiraAnoVar> <caixaCvcCartaoVar>
        And sair da plataforma

Examples:

| email | senha | pais | seletorEstadoVar | caixaCidadeVar | caixaEndereco1Var | caixaEndereco2Var | caixaCepVar | caixaTelefoneVar | seletorTipoCartaoVar | caixaNomeDonoCartaoVar | caixaNumeroCartaoVar | seletorDataExpiraMesVar | seletorDataExpiraAnoVar | caixaCvcCartaoVar | 
| abla@gmail.com | 123456 | Brazil | Other | Cachoeirinha | Getulio | 158 | 90000000 | 51987654321 | visa | dono_do_card | 0000000000000000 | 03 | 2028 | 000 | 
