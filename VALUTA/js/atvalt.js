function eurovalto(){
    let arfolyam = 378
    let valuta = document.getElementById("euro").value;
    let Ft = valuta * arfolyam;
    document.getElementById("atvaltott").innerHTML = Ft;
}