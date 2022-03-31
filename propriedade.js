const objeto = {
    nome: "pedro",
    ano: 1996,
    mae: 'ana p',
    profissao: 'estudante',
}
exibirpropriedade(objeto)

function exibirpropriedade(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])

}