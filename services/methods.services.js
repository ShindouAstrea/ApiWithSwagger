const analize = (data)=>{
    let result = {};
    //Se guardan y procesan fechas de inicio y fin.
    const startDate = data["fechaCreacion"];
    const endDate= data["fechaFin"];
    const fechasCompletas = completar(startDate,endDate);
    result["resultado"]= fechasCompletas;
        //Validacion del objeto

     if(Object.entries(result).length!=0) return result;
    else return "Algo salió mal";
};
function completar(startDate,endDate){
    let arreglo =[];
    const stDate = new Date(startDate);
    const finDate = new Date(endDate);
    // Separacion del año , mes y dia de la fecha de inicio.
    const startYear = stDate.getFullYear(startDate);
    const startMonth = stDate.getMonth(startDate) - 1;
    console.log("Mes capturado : "+startMonth);
    const startDay = stDate.getDay(startDate);

    // Separacion del año , mes y dia de la fecha de fin.
    const endYear = finDate.getFullYear(endDate);
    const endMonth = finDate.getMonth(endDate) - 1;
    const endDay = finDate.getDay(endDate);
    
    // Inicializacio de los contadores
    let leftYears =  endYear - startYear;
    let leftMonths = endMonth - startMonth ;
    let leftDays = endDay- startDay ;

    // Se inserta la fecha inicial
    arreglo.push(startDate);
    switch(leftYears){        
        default:
            let newMonth = startMonth+1 ;
            console.log(newMonth);
            while(leftMonths>0){
                const newDate = new Date(startYear,newMonth,startDay);
                leftMonths --;
                let year = newDate.getFullYear();
                let month = newDate.getMonth();
                // Para javascript el mes 1 es Febrero. Asi que se reduce el contador.
                month -- ;
                year = year.toString();
                month = month.toString();
                let cero = "0";
                month < 10 ? true : cero.concat(month);
                arreglo.push(year.concat("-",month,"-",startDay)) ;
                newMonth++;
            }
    };
    arreglo.push(endDate);
    return arreglo;
}
module.exports={
    analize
}
