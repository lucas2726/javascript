const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* A function vai pegar o valor 'Global' e nao o valor 'Local. porque ele chama a funcao minha minhaFuncao e ela que vai definir qual valor pegar.Neste caso por ela nao ter uma variavel dentro dela sera a variavel global a selecionada.*/