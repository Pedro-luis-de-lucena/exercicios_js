verificarvelocidade(50)

function verificarvelocidade(velocidade) {
    const velocidadeMAX = 150;
    const KM = 5;
    if (velocidade <= velocidadeMAX)
        console.log('OK');
    else {
        const pontos = math.floor(((velocidade - velocidadeMAX) / KM));
        if (pontos >= 12)
            console.log('carteira suspensa');
        else
            console.log('pontos', pontos);
    }

}