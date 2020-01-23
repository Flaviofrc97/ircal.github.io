const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputBase = e.target.querySelector('#base')
    const base = Number(inputBase.value);

    if (!base) {

        setResult('Valor Invalido', false);
        return;
    }


    const calcfinal = calc(base);
    const msg = `IRRF a Pagar: ${calcfinal}`;

    setResult(msg, true);

})

function calc(base) {
    let result;

    if(base < 1903.98) {
    result = 0.00; 
    return `${result} (Base isenta!)`;
    } 
    
    if(base >= 1903.99 && base <= 2826.65){
        result = (base * 0.075) - 142.80;
        return result.toFixed(2).replace(".", ",");
    } 
    
    if(base >= 2826.66 && base <= 3751.05){
        result = (base * 0.15) - 354.80;
        return result.toFixed(2).replace(".", ",");
    } 
    
    if(base >= 3751.06 && base <= 4664.68){
        result = (base * 0.225) - 636.13;
        return result.toFixed(2).replace(".", ",");
    }

    if(base > 4664.68){
        result = (base * (27.5 / 100)) - 869.36;
        return result.toFixed(2).replace(".", ",");
    }
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = criarP();

    if (isValid) {
        p.classList.add('paragrafo-result');
    } else {
        p.classList.add('bad-result');
    }
    p.innerHTML = msg;
    result.appendChild(p);

}
