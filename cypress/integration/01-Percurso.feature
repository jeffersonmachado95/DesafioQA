Feature: Percurso Usuário Não Registrado

    Scenario Outline: Usuário realiza o percurso completo no site
        Given que o usuario acessa o site
        And realiza o registro <username> <lastname> <dia> <mes> <ano> <email> <companhia> <senha>
        And vai ate o produto desejado e adiciona ao carrinho
        When realizar o checkout das compras
        Then ele então deve concluir a compra com sucesso <pais> <seletorEstadoVar> <caixaCidadeVar> <caixaEndereco1Var> <caixaEndereco2Var> <caixaCepVar> <caixaTelefoneVar> <seletorTipoCartaoVar> <caixaNomeDonoCartaoVar> <caixaNumeroCartaoVar> <seletorDataExpiraMesVar> <seletorDataExpiraAnoVar> <caixaCvcCartaoVar>
        And deslogar da plataforma
Examples:

| email | username | lastname | dia | mes | ano | companhia | senha | pais | seletorEstadoVar | caixaCidadeVar | caixaEndereco1Var | caixaEndereco2Var | caixaCepVar | caixaTelefoneVar | seletorTipoCartaoVar | caixaNomeDonoCartaoVar | caixaNumeroCartaoVar | seletorDataExpiraMesVar | seletorDataExpiraAnoVar | caixaCvcCartaoVar | 
| abla@gmail.com | Aline | Rosa | 8 | 2 | 1999 | Anima | 123456 | Brazil | Other | Cachoeirinha | Getulio | 158 | 90000000 | 51987654321 | visa | dono_do_card | 0000000000000000 | 03 | 2028 | 000 | 
