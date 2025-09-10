function par(){
    let esnumeropar = document.getElementById("esPar");
   
    esnumeropar = parseInt(esnumeropar.value);

    if(esnumeropar % 2 == 0){
        alert("es un numero par");
        console.log(esnumeropar, "comprobado");
    } else {
      alert("es un numero impar");
    
    }
}