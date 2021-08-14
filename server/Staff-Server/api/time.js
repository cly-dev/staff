function fillzero(val){
    return val * 1<10?'0'+val:val;
}
module.exports=function date(timer){
    const time=new Date(timer);
    let year=time.getFullYear();
    let month=time.getMonth();
    let day=time.getDate();
    return `${year}年${fillzero(month + 1)}月${fillzero(day)}日`;
}
