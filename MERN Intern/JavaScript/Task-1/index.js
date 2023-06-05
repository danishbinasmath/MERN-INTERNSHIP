function showDate(){
    let date = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    document.getElementById("sdate").innerHTML= date.getDate()+'/'+months[date.getMonth()]+'/'+date.getFullYear();
}

function showTime(){
    let date = new Date();
    document.getElementById('stime').innerHTML=date;
}