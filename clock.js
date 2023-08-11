let ad= prompt("Adınızı giriniz")
let isim=document.querySelector("#myName")
isim.innerHTML=ad



let icsaat=document.querySelector("#myClock")
const d =new Date();
icsaat.innerHTML=d.getMinutes()


function zaman(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let icsaat=document.querySelector("#myClock")
    const d =new Date();
    icsaat.innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+weekday[d.getDay()]

}
setInterval(function(){zaman();},100);

