primervalor;
result;

function changer (id, newValue) {
  var element = document.getElementById(id);
  element.innerHTML = newValue;
}
function Uno() {
  changer('Resultado', '1')
}
function Cero() {
  changer('Resultado', '0')
}
function Suma() {
  var element = document.getElementById('Resultado');
  primervalor = element.innerHTML;
  if(primervalor == '0' || primervalor == '1')
    changer('Resultado', ' ')
  else
    alert("Introduzca algun un numero, solo se pueden sumar binarios de una cifra");
}
function Borrar() {
  primervalor = null;
  changer('Resultado', ' ')
}
function Igual() {
  var element = document.getElementById('Resultado');
  if((element.innerHTML == '0' || element.innerHTML == '1') && primervalor != null)
  {
    result = parseInt(element.innerHTML) + parseInt(primervalor);
    valor = result.toString(2);
    changer('Resultado', valor)
  }
    
  else
    alert("Introduzca algun un numero, solo se pueden sumar binarios de una cifra");
}
function Ayuda(){
  alert("LA CALCULADORA SUMA DOS NUMEROS BINARIOS DE UNA UNICA CIFRA\nELEGIMOS LOS NUMEROS 0 O 1\nPULSANDO C BORRAMOS LOS REGISTROS");
  
  
  
}
