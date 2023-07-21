export function DateConvert(date) {
    if(Object.prototype.toString.call(date) === '[object Date]'){
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getYear();
        return `${day}-${month}-${year}`;
    }
}