var attempt=3;
function validate(){
var usuar=document.getElementById("usuar").value;
var password=document.getElementById("password").value;
if(usuar=="Byron" && password=="User1"){
    alert("Bienvenido Byron");
    window.location="/Home/index.html";
    return false;
} if(usuar=="Enmanuel" && password=="User2"){
    alert("Bienvenido Enmanuel");
    window.location="/Home/index.html";
    return false;
} if(usuar=="Perla" && password=="User3"){
    alert("Bienvenido Perla");
    window.location="/Home/index.html";
    return false
} if(usuar=="Yara" && password=="User4"){
    alert("Bienvenida Yara");
    window.location="/Home/index.html";
    return false
} if(usuar=="Docente" && password=="User"){
    alert("Bienvenido Docente!!");
    window.location="/Home/index.html";
    return false
}

else{
attempt--;
}
alert("Te queda " +attempt+ "intentos mas")
if(attempt==0){
    document.getElementById("usuar").disable=true;
    document.getElementById("password").disable=true;
    document.getElementById("submit").disable=true;
    
}
}