export const ConvertDate = (date) =>{
    const originalDate = new Date(date);

    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const day = String(originalDate.getDate() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
}