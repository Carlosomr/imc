function calcularImc(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

         // Verifica se os campos estão vazios ou não são números
         if (!peso.value ||!altura.value || isNaN(peso.value) || isNaN(altura.value)) {
            alert("Por favor, preencha os campos de peso e altura com valores numéricos.");
            return; // Sai da função sem prosseguir para o cálculo do IMC
        }

        pessoas.push({
            peso: peso.value,
            altura: altura.value
        });
        const imc = (peso.value / (altura.value * altura.value));
        const abaixoPeso = 18.5;
        const pesoNormal = 24.9;
        const sobrePeso = 29.9;
        const ob1 = 34.9;
        const ob2 = 39.9;
        const ob3 = 40;

        // Corrigindo a condição if para verificar se o IMC está entre 18.5 e pesoNormal
        if (imc <= abaixoPeso){
            resultado.textContent = `"Abaixo do peso" IMC: ${Math.round(imc)})`;
        } else if (imc >= 18.5 && imc <= pesoNormal){
            resultado.textContent = `"Peso normal" IMC: (${Math.round(imc)})`;
        } else if (imc > pesoNormal && imc <= sobrePeso){
            resultado.textContent = `"Sobrepeso" IMC: (${Math.round(imc)})`;
        }else if (imc > sobrePeso && imc <= ob1){
            resultado.textContent = `"Obesidade 1" IMC: (${Math.round(imc)})`;
        } else if (imc > ob1 && imc <= ob2){
            resultado.textContent = `"Obesidade 2" IMC: (${Math.round(imc)})`;
        } else if (imc > ob2 && imc <= ob3){
            resultado.textContent = `"Obesidade 3" IMC: (${Math.round(imc)})`;
        } 

        }
        // Removendo o console.log desnecessário e a linha que tentava atualizar o resultado novamente
    

    form.addEventListener('submit', recebeEventoForm);
    }

calcularImc();