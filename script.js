// calculo:  peso (kg) ÷ (altura x altura) (m).
// taabela de imc
/*
    IMC (kg/m²)	        Classificação
    Menor que 18,5	    Magreza
    18,5 a 24,9	        Peso normal
    25 a 29,9	        Sobrepeso
    30 a 34,9	        Obesidade grau I
    35 a 40	            Obesidade grau II
    Maior que 40	    Obesidade grau III
*/

function imc() {
    const resultado = document.querySelector('.resultado');
    const classificacao = document.querySelector('.classificacao');
    const digito = document.querySelector('.digito');
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const imc = Number((peso / ((altura/100) * (altura/100))).toFixed(2));

    // verificar se os inputs estão vazios 
    if(peso === '' || altura === ''){

        resultado.innerHTML = ''
        classificacao.innerHTML = ''
        digito.innerHTML = 'Os campos acima devem ser preenchidos.';

    // verifica se o input tem no máximo 3 digitos
    }else if(peso.length <= 3 && altura.length <= 3){

        if(imc < 18.5){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Magreza`;

        }else if(imc >= 18.5 && imc <= 24.99){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Peso normal`;

        }else if(imc >= 25 && imc <= 29.99){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Sobrepeso`;

        }else if(imc >= 30 && imc <= 34.99){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Obesidade grau I`;

        }else if(imc >= 35 && imc <= 40){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Obesidade grau II`;

        }else if(imc > 40){

            resultado.innerHTML = `Seu imc: ${imc}`;
            classificacao.innerHTML = `Classificação: Obesidade grau III`;
            
        }else{

            resultado.innerHTML = `Insira valores nos campos acima`;

        }
        digito.innerHTML = '';

    // Se os digitos forem maior que 3 caracteres irá executar o bloco abaixo
    }else{
        digito.innerHTML = 'Só pode ser inserido 3 digitos em cada campo.';
        document.querySelector('.resultado'). innerHTML = '';
        document.querySelector('.classificacao').innerHTML = '';
    }
}