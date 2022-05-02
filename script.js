




function zar(){
    
    var sayi = Math.floor(Math.random() * 7);
    var sayi2 = Math.floor(Math.random() * 7);
     if (sayi != 0 && sayi2 != 0) {
        document.getElementById("zar").innerHTML = sayi;
        document.getElementById("zar2").innerHTML = sayi2;
     }
        else{
             sayi = Math.floor(Math.random() * 6);
             sayi2 = Math.floor(Math.random() * 6);
        }
        
    
    
}

function refresh(){
    location.reload();
}
