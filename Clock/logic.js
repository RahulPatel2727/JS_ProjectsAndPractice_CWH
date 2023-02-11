// document.getElementsByClassName('time');
console.log(new Date().getHours());
setInterval(async function(){
    time()
},1000)
time()
function time(){
    
    if(new Date().getHours() < 12 && new Date().getHours() >= 0){
        document.getElementById("ampm").innerText = "AM";
    }
    else{
        document.getElementById("ampm").innerText = "PM";
    }
    if(new Date().getHours() % 12 == 0){
        document.getElementById("hh").innerText = "12";
    }
    else{
        document.getElementById("hh").innerText = (new Date().getHours())%12;
    }
    document.getElementById("mm").innerText = new Date().getMinutes();
    document.getElementById("ss").innerText = new Date().getSeconds();  
}