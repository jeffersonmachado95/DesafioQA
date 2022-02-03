//Classe que contém todos os elementos do formulário de registro.

class RegistroElements{

    //Formulário
    botaoRegistro = () => { return '.ico-register' }
    botaoGeneroF = () => {return '#gender-female'}
    botaoGeneroM = () => {return '#gender-male'}
    caixaNome = () => {return '#FirstName'}
    caixaUltimoNome = () => {return '#LastName'}
    caixaDia = () => {return '[name="DateOfBirthDay"]'}
    caixaMes = () => {return '[name="DateOfBirthMonth"]'}
    caixaAno = () => {return '[name="DateOfBirthYear"]'}
    caixaEmail = () => {return '#Email'}
    caixaCompanhia = () => {return '#Company'}
    caixaSenha = ()=> {return '#Password'}
    caixaConfirmSenha = () => {return '#ConfirmPassword'}

    //Validação
    validacaoRegistro = () => {return 'h1'}
}
export default RegistroElements;