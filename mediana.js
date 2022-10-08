function calcularMediaAritmetica(lista){
    //let sumaLista = 0;

    //for(let i=0; i<lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );//este metodo suma los elementos dentro del array

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}

//const lista1 = [
//    100,
//    200,
//    500,
//    400000000,
//];

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calcularMediana(lista){

    lista.sort(function(a,b){return a - b;});// metodo sort y funcion para ordenar la lista 

    let mediana;
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    }else{
        mediana = lista[mitadLista];
        return mediana;
    }
}


