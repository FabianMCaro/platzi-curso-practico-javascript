// funciones Helpers
function esPar(numerito){

    //if(numerito % 2 == 0){
    //    return true;
    //}else{
    //    return false;
    //}
    
    return (numerito % 2 == 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );//este metodo suma los elementos dentro del array

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}

// Calculadora de medianas
function medianaSalarios(Lista){
    const mitad = parseInt(Lista.length / 2);

    if(esPar(Lista.length)){
        const personitaMitad1 = Lista[mitad - 1];
        const personitaMitad2 = Lista[mitad];
        
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = Lista[mitad];
        return personitaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount); // splice recibe dos parametros (posicion inicial, cuantos posiciones se va a mover para obtener ese pedaso de array) del array

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

