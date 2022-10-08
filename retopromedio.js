const notas = [
    {
        note: 10,
        credit: 2,
    },
    {
        note: 8,
        credit: 5,
    },
    {
        note: 7,
        credit: 5,
    },
];


function calcularPromedioPonderado(notas){

    // multiplicamos las notas por los creditos
    const notasyCreditos = notas.map(function(notaF){
        return notaF.note * notaF.credit;
    });

    // sumamos las multiplicaciones realizadas
    const sumaNotasyCreditos = notasyCreditos.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );//este metodo suma los elementos dentro del array

    const creditos = notas.map(function(screditos){
        return screditos.credit
    });

    //sumamos todos los creditos
    const sumaCreditos = creditos.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );//este metodo suma los elementos dentro del array

    const promedioPonderado = sumaNotasyCreditos / sumaCreditos;
    return promedioPonderado;
}



