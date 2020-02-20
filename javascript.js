var numero1
var numero2
var operacion

function init(){
    var pantalla = document.getElementById('pantalla');
	var reset = document.getElementById('reset');
	var sumar = document.getElementById('sumar');
	var restar = document.getElementById('restar');
	var multiplica = document.getElementById('multiplica');
	var divide = document.getElementById('divide');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    
	uno.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "1";
	}
	dos.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "2";
	}
	tres.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "3";
	}
	cuatro.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "4";
	}
	cinco.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "5";
	}
	seis.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "6";
	}
	siete.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "7";
	}
	ocho.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "8";
	}
	nueve.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "9";
	}
	cero.onclick = function(e){
			pantalla.textContent = pantalla.textContent  + "0";
	}
	reset.onclick = function(e){
			resetear();
	}
	sumar.onclick = function(e){
			numero1 = pantalla.textContent;
			operacion = "+";
			limpiar();
	}
	restar.onclick = function(e){
			numero1 = pantalla.textContent;
			operacion = "-";
			limpiar();
	}
	multiplica.onclick = function(e){
			numero1 = pantalla.textContent;
			operacion = "*";
			limpiar();
	}
	divide.onclick = function(e){
			numero1 = pantalla.textContent;
			operacion = "/";
			limpiar();
	}
	igual.onclick = function(e){
			numero2 = pantalla.textContent;
			resolver();
	}
	}


	function limpiar(){
		pantalla.textContent = "";
	}

	function resetear(){
	pantalla.textContent = "";
	numero1 = 0;
	numero2 = 0;
	operacion = "";
	}

	function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(numero1) + parseFloat(numero2);
			break;

		case "-":
			res = parseFloat(numero1) - parseFloat(numero2);
			break;

		case "*":
			res = parseFloat(numero1) * parseFloat(numero2);
			break;

		case "/":
			res = parseFloat(numero1) / parseFloat(numero2);
			break;
	}
	resetear();
	pantalla.textContent = res;


}