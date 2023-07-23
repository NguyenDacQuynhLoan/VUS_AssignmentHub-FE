export function DateConvert(date) {
    console.log(date.M);
    if(Object.prototype.toString.call(date) === '[object Date]'){
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getYear();
        return `${day}-${month}-${year}`;
    }
}