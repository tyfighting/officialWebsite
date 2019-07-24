export function timeFormat(str){
    let date=new Date(str);
    let dateArr=[];
    let timeArr=[];
    dateArr[0]=date.getFullYear();
    dateArr[1]=check(date.getMonth()+1);
    dateArr[2]=check(date.getDate());
    timeArr[0]=check(date.getHours());
    timeArr[1]=check(date.getMinutes());
    return dateArr.join('-')+' '+timeArr.join(':')
}
const check=(str)=>{
    return str<10?'0'+str:str
}