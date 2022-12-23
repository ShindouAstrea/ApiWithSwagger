const analize = (data)=>{
    let result = {};
    //Se guardan y procesan fechas de inicio y fin.
    const startDate = data["fechaCreacion"];
    const endDate= data["fechaFin"];
    const fechasCompletas = completar(startDate,endDate);
    result["allDates"]= fechasCompletas;
    console.log(result["allDates"]);
    data["fechasFaltantes"] =removeDates(data["fechas"],result["allDates"]);
    result = data ;
    //result["fechasFaltantes"]= removeDates(data["fechas"],result["allDates"]); 
    //Se remueven las fechas que ya se generearon
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
    const startMonth = stDate.getMonth(startDate)+1;

    const day = "01";

    // Separacion del año , mes y dia de la fecha de fin.
    const endYear = finDate.getFullYear(endDate);
    const endMonth = finDate.getMonth(endDate) + 1;
    
    // Inicializacio de los contadores
    let leftYears =  endYear - startYear;
    let leftMonths = endMonth - startMonth ;

    // Se inserta la fecha inicial
    switch(leftYears){        
        default:
            arreglo.push(startDate);
                for(let i = startMonth+1; i<=endMonth-1; i++){
              
                    const newDate = new Date(startYear,i,day);
                    let actualMonth = newDate.getMonth()+1;
                    if(newDate.getMonth()<10){
                        let monthsBeforeSeptember = "0";
                        actualMonth = monthsBeforeSeptember.concat(newDate.getMonth()+1);

                    }
                    arreglo.push(`${newDate.getFullYear()}-${actualMonth}-${day}`);
                  
                }      
    };
    arreglo.push(endDate);
    return arreglo;
}
function removeDates(arrayOfDatesGenerated, arrayOfFullDates){
    let finalArray = [];
    for(let actualDate of arrayOfDatesGenerated){
         finalArray = arrayOfFullDates.filter(fullDate=>{
            return fullDate != actualDate ;
        });
    }
    console.log(finalArray);
    return finalArray;

}
module.exports={
    analize
}
