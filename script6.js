const anyoActual = new Date().getFullYear();
if (((anyoActual % 4 == 0) && (anyoActual % 100 != 0 )) || (anyoActual % 400 == 0)){
    console.log(anyoActual +  " es bisiesto.")
  }
  else {
    console.log(anyoActual +  " no es bisiesto.")
  }