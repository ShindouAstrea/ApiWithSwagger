const analize = (data)=>{
    let result = {};
    //Se guardan y procesan fechas de inicio y fin.
    let startDate = data["fechaCreacion"];
    let endDate= data["fechaFin"];
    let fechasCompletas = completar(startDate,endDate);
    
     if(Object.entries(result).length!=0) return result;
    else return "Algo salió mal";
};
function completar(startDate,endDate){
    let arreglo =[];
    // Separacion del año , mes y dia de la fecha de inicio.
    let startYear = data["fechaCreacion"].slice(0,4);
    let startMonth = data["fechaCreacion"].slice(5,7);
    let startDay = data["fechaCreacion"].slice(8,10);
    // Separacion del año , mes y dia de la fecha de fin.
    let endYear = data["fechaFin"].slice(0,4);
    let endMonth = data["fechaFin"].slice(5,7);
    let endDay = data["fechaFin"].slice(8,10);
    
    let diferenciaYears =  endYear - startYear;
    let difernciaMonths = endMonth - endMonth ;
    switch(diferenciaYears){
        case diferenciaYears > 0:
                
            default:
                

    };
    return arreglo;
}
module.exports={
    analize
}
