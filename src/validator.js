const validator = {
   

  isValid:(creditCardNumber)=>{ 
    let array = Array.from(creditCardNumber);
    array.reverse();
    let acumulador=0;
   
    for (let i = 0; i < array.length; i++) {
  
        if(i % 2 != 0){ 
          array[i] = Math.trunc(array[i]*2/10) + array[i]*2%10;    
          acumulador = acumulador + Math.trunc(array[i]); 
      }else{
        acumulador = acumulador + Math.trunc(array[i]); 
      }  
    }
    if(acumulador%10==0){
      return true;  
  }
  return false;         
  },
     maskify:(creditCardNumber) =>{ 
      let array = Array.from(creditCardNumber);
      let longitud = array.length;
      let colocarMask = array.slice(0, longitud-4) 
      let mostrarSinMask = array.splice(longitud-4).join('')
      let mask = '';
       for(let i=0; i<colocarMask.length; i++){ 
            mask = mask + '#';
          }
          let resultado = mask + mostrarSinMask;
          return resultado; 
        } 
  }
 

 export default validator;  
