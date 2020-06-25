import validator from './validator.js';


//DECLARACION DE ELEMENTOS DEL HTML DE LAS VISTAS
const vista1 =  document.getElementById('vista1');
const vista2 = document.getElementById('vista2');
const vista3 = document.getElementById('vista3');

// FUNCION VISTAS - GESTIONA CUAL VISTA SERA MOSTRADA SEGUN EL CASO//
 window.onload = vistas(vista1); 

function vistas(vista){
   switch(vista) {
    case vista1:
       vista1.style.display='block';
       vista2.style.display='none';
       vista3.style.display='none';
    break;
    case vista2:
        vista2.style.display='block';
        vista1.style.display='none';
        vista3.style.display='none'; 
    break;
    case vista3:
      
       vista1.style.display='none';
       vista2.style.display='none';
       vista3.style.display='block';
       break;
     }
   }  
// DECLARACION DE ELEMENTOS DEL <SELECT> <OPTION>
let opcionServicios =["Paquetes", "Minutos"]
let paquetes=new Array("Elige","Todo Incluido Voz y SMS ilimitados + wifi + 400MB 10 dias $7.000","Todo Incluido Voz y SMS ilimitados + wifi + 400MB 15 dias $10.000");
let minutos=new Array("Elige","100min $5.000","500min $20.000");
let todosServicios = [opcionServicios, paquetes, minutos]; 
const seleccion = document.getElementById('seleccion');

//FUNCION PARA CAMBIAR SERVICIOS(PAQUETES/MINUTOS) DEL SELECT 
   seleccion.addEventListener('change', cambia_servicios);
   function cambia_servicios(){ 
           var servicio; 
           var mis_servicios;
           var num_servicios;
           servicio = document.formServicios.servicios[document.formServicios.servicios.selectedIndex].value 
         
           if(servicio != 0) { 
                 mis_servicios = todosServicios[servicio]
                 num_servicios = mis_servicios.length
                 document.formServicios.detalle.length = num_servicios 
               for(let i=0;i<num_servicios;i++){ 
                 document.formServicios.detalle.options[i].text=mis_servicios[i]      
               }	
            }else{
              document.formServicios.detalle.length = 1;
              document.formServicios.detalle.options[0].text = "-"; 
            } 
              document.formServicios.detalle.options[0].selected = true 
          }
  //DECLARACION DE VARIABLES DEL FORMULARIO 1
  let continuar = document.getElementById('btnContinuar');
  let celular = document.formServicios.celular;
  let selServicios = document.formServicios.servicios;
  let inputCel = document.getElementById('inputCel');
  let detalle = document.formServicios.detalle;
 
 
// VALIDACION DE LOS CAMPOS DEL FORMULARIO DE LA VISTA 1
 continuar.addEventListener('click', valid_form1); 

 function valid_form1(){

  if(celular.value.length==0 || isNaN(celular.value)== true || celular.value.length < 10  ){
    document.formServicios.celular.focus(); 
    inputCel.classList.add('inputmsn'); 
    inputCel.value = "";
    return false;
  }

  if(selServicios.value == 0){ 
    selServicios.focus();
        return false;
 }

 if(detalle.value== ''){
  detalle.focus();
  return false;
 }
   
  vistas(vista2); 

 
 }

 //DECLARACION DE VARIABLES DEL FORMULARIO 2
   let aceptar = document.getElementById('btnAceptar');
   let regresar = document.getElementById('btnRegresar');
   let tipoTarjeta = document.form_2.tipoTarjeta;
   let numTarjeta = document.form_2.numTarjeta;
   let titular = document.form_2.titular;
   let mes = document.form_2.mes;
   let anio= document.form_2.anio; 
   let tipoIdent = document.form_2.tipoId;
   let identificacion = document.form_2.identificacion;
   let cod = document.form_2.cod;
   let cuotas = document.form_2.cuotas;
   let check = document.form_2.check;

  
  

 // VALIDACION DE LOS CAMPOS DEL FORMULARIO DE LA VISTA 
 regresar.addEventListener('click', function(){
  vistas(vista1);
})
 aceptar.addEventListener('click', valid_form2);
  function valid_form2(){

        if(tipoTarjeta.value == 0){
        tipoTarjeta.focus(); 
        return false;
      }

      if(numTarjeta.value.length==0  || numTarjeta.value.length < 10){
      document.getElementById('input1').classList.add('inputmsn'); 
      numTarjeta.value = "";
      return false;
      }else{
        document.getElementById('input1').classList.remove('inputmsn'); 
      }
    

      if(mes.value==0 ||anio.value == 0){
       mes.focus();
       document.getElementById('input5').classList.add('inputmsn'); 
       return false;
     }else{
      document.getElementById('input5').classList.remove('inputmsn'); 
     }
 

      if(titular.value.length == 0 || isNaN(titular.value)==false ){
      document.getElementById('input2').classList.add('inputmsn');  
      titular.value ="";
      return false; 
     }else{
      document.getElementById('input2').classList.remove('inputmsn'); 
     }
      if(tipoIdent.value == 0 ){
        tipoIdent.focus();
        return false;
      }
      if(identificacion.value.length==0 || isNaN(identificacion.value)==true){
      document.getElementById('input3').classList.add('inputmsn'); 
      identificacion.value ="";
      return false;
     }else{
      document.getElementById('input3').classList.remove('inputmsn'); 
     }
   


      if(cod.value.length == 0 || cod.value.length != 4 ||isNaN(cod.value)==true){
      document.getElementById('input4').classList.add('inputmsn'); 
      cod.value ="";
      return false;
     }else{
      document.getElementById('input4').classList.remove('inputmsn'); 
     }

      if(cuotas.value == 0){
      cuotas.focus();
      return false
     }   
          
      if(check.checked==false){
      alert('Acepta los terminos');
      return false;
      }

        vistas(vista3);
         let numeros = numTarjeta.value;     

        let msjTarjeta = document.getElementById('msjTarjeta'); 
        let msjTarjeta2 = document.getElementById('msjTarjeta2') 
        let digitos = document.getElementById('digitos');
        let divVolver = document.getElementById('divVolver');

        digitos.textContent = validator.maskify(numeros); 

        if(validator.isValid(numeros)== true){
          msjTarjeta.textContent = 'Tarjeta Valida';
          msjTarjeta2.textContent = 'Procesando pago...';
          divVolver.style.display='none';
        }else{
          msjTarjeta.textContent = 'Tarjeta Invalida';
          msjTarjeta2.textContent = 'Vuelve a intentar...';
          divVolver.addEventListener('click', function(){
            vistas(vista2);
          
          })
        } 

     
  }
   
 

