
const operacionFlechita=()=>{
    
    valor1=document.getElementById('val1').value;
    valor2=document.getElementById('val2').value;
    operacion=document.getElementById('operacion').value;

    if(operacion==1){
       var resul=parseInt(valor1)+parseInt(valor2);
    }
    if(operacion==2){
        var resul=parseInt(valor1)-parseInt(valor2);
     }
     if(operacion==3){
        var resul=parseInt(valor1)*parseInt(valor2);
     }
     if(operacion==4){
        var resul=parseInt(valor1)/parseInt(valor2);
     }
    document.getElementById('resultado').innerHTML=resul;
}
