window.addEventListener('load', initCanvas);
function initCanvas(){

	const texto = document.getElementById('texto_lineas');
	const boton = document.getElementById('boton');
	const star = document.getElementById('star');
	const diamond = document.getElementById('diamond');
	const fusion = document.getElementById('fusion');
	const clean = document.getElementById('clean')


	const d = document.getElementById('dibujito');
	const lienzo = d.getContext('2d');
	const ancho = d.width;
	

	function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){		
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.lineWidth = .5;
		lienzo.moveTo(xinicial, yinicial);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

	dibujarLinea('black', 1, 1, 1, 299);
	dibujarLinea('black', 1, 299, 299, 299);
	dibujarLinea('black', 1, 1, 299, 1);
	dibujarLinea('black', 299, 1, 299, 299);

	star.addEventListener('click',dibujoStar);
	diamond.addEventListener('click',dibujoDiamond);
	fusion.addEventListener('click', dibujoFusion);
	clean.addEventListener('click', borrar);

	function borrar(){
		window.location.reload(false); 
	}

	function dibujoStar(){
		boton.addEventListener('click', dibujoPorClick);
		function dibujoPorClick(){
			document.getElementById('container').style.display = ('block');
			document.getElementById('result').style.display = ('block');
			const lineas = texto.value;
			const espacio = ancho / lineas
			let l = 0;
			let yi, xf, xi, yf;

			/*while(l < lineas)*/
			/*InIzq*/for (l=0; l < lineas; l++){ /*3 parametros: variable que itera, condición y el ciclo*/
				yi = espacio * l;
				xf = espacio * (l + 1);
				dibujarLinea('#50abec', 0, yi, xf, 300);
			}
			/*supDer*/for (l=0; l < lineas; l++){ 
				xi = espacio * l;
				yf = espacio * (l + 1);
				dibujarLinea('#50abec', xi, 0, 300, yf);
			}
			/*supIzq*/for (l=0; l < lineas; l++){ 
				yi = 300 - (l * espacio);
				xf = espacio * l;
				dibujarLinea('#50abec', 0, yi, xf, 0);
			}
			/*infDer*/for (l=0; l < lineas; l++){ 
				xi = espacio * l;
				yf = 300 - (l * espacio);
				dibujarLinea('#50abec', xi, 299, 299, yf);
			}
		}
	}

	function dibujoDiamond(){

		boton.addEventListener('click', dibujoPorClick);
		function dibujoPorClick(){
			document.getElementById('container').style.display = ('block');
			document.getElementById('result').style.display = ('block');
			const lineas = texto.value;
			const espacio = ancho / lineas
			let l = 0;
			let yi, xf, xi, yf;

			for (l=0; l <= lineas; l++){ 
				xf = 300 - (l * espacio);
				dibujarLinea('#001dff', 150, 0, xf, 150);
			}
			for (l=0; l <= lineas; l++){ 
				xf = 300 - (l * espacio);
				dibujarLinea('#001dff', 150, 300, xf, 150);
			}
			for (l=0; l <= lineas; l++){ 
				yf = 300 - (l * espacio);
				dibujarLinea('#001dff', 0, 150, 150, yf);
			}
			for (l=0; l <= lineas; l++){ 
				yf = 300 - (l * espacio);
				dibujarLinea('#001dff', 300, 150, 150, yf);
			}
		}
	}

	function dibujoFusion(){

		boton.addEventListener('click', dibujoPorClick);
		function dibujoPorClick(){
			document.getElementById('container').style.display = ('block');
			document.getElementById('result').style.display = ('block');
			const lineas = texto.value;
			const espacio = ancho / lineas
			let l = 0;
			let yi, xf, xi, yf;

			/*while(l < lineas)*/
			/*InIzq*/for (l=0; l < lineas; l++){ /*3 parametros: variable que itera, condición y el ciclo*/
				yi = espacio * l;
				xf = espacio * (l + 1);
				dibujarLinea('#50abec', 0, yi, xf, 300);
			}
			/*supDer*/for (l=0; l < lineas; l++){ 
				xi = espacio * l;
				yf = espacio * (l + 1);
				dibujarLinea('#50abec', xi, 0, 300, yf);
			}
			/*supIzq*/for (l=0; l < lineas; l++){ 
				yi = 300 - (l * espacio);
				xf = espacio * l;
				dibujarLinea('#50abec', 0, yi, xf, 0);
			}
			/*infDer*/for (l=0; l < lineas; l++){ 
				xi = espacio * l;
				yf = 300 - (l * espacio);
				dibujarLinea('#50abec', xi, 299, 299, yf);
			}
			

			for (l=0; l <= lineas; l++){ 
				xf = 300 - (l * espacio);
				dibujarLinea('#001dff', 150, 30, xf, 150);
			}
			for (l=0; l <= lineas; l++){ 
				xf = 300 - (l * espacio);
				dibujarLinea('#001dff', 150, 270, xf, 150);
			}
			for (l=0; l <= lineas; l++){ 
				yf = 300 - (l * espacio);
				dibujarLinea('#001dff', 30, 150, 150, yf);
			}
			for (l=0; l <= lineas; l++){ 
				yf = 300 - (l * espacio);
				dibujarLinea('#001dff', 270, 150, 150, yf);
			}
		}
	}
}
	