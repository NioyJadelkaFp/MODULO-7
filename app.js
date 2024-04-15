function retencion() {
    let casilla161 = document.getElementById("casilla-161").value;
    let casilla162 = document.getElementById("casilla-162").value;
    let casilla163 = document.getElementById("casilla-163").value;
    let casilla164 = document.getElementById("casilla-164").value;
    let casilla165 = document.getElementById("casilla-165").value;
    let resultado = document.getElementById("casilla-166");

    let suma = parseInt(casilla161) + parseInt(casilla162) + parseInt(casilla163) + parseInt(casilla164) + parseInt(casilla165);

    resultado.innerHTML = suma;
}

function retenciondos() {
    let casilla187 = document.getElementById("casilla-187").value;
    let casilla188 = document.getElementById("casilla-188").value;
    let casilla190 = document.getElementById("casilla-190").value;
    let casilla189 = document.getElementById("casilla-189");
    let casilla523 = document.getElementById("casilla-523");
    let casilla524 = document.getElementById("casilla-524");

    let suma = parseInt(casilla187) + parseInt(casilla188) -  parseInt(casilla523);

    resultado.innerHTML = suma;
}
