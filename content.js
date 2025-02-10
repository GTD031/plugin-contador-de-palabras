	//  Definida la expresión regular
	 // var ExpReg=new RegExp("[0-9a-zA-ZáéíóúüÁÉÍÓÚÜñÑ()€$£%/]");
	//var ExpReg=new RegExp("[0-9a-zA-ZáéíóúüÁÉÍÓÚÜñÑ()€$£%\/\.,;:¿?¡!•»«]+","g");
		var ExpReg=new RegExp("[^\\s]+","g");
/* 	//  Funcion contar las palabras
	
 	   function ContarPalabras(NodeArray){
		   var contp=0;		// contp es el contador local.
		   if (NodeArray.length!=0){
			   var longNod = NodeArray.length;	// Mido la longitud del arreglo de nodos
			   for(k=0;k<longNod;k++){
				   var texto=NodeArray[k].textContent;		// Hago referencia al texto ya con formato HTML.
				   texto = texto.replace(/<[^>]*>/g,'');  // Limpio el texto de etiquetas con el uso de una expresion regular que las detecta.
				   texto = texto.replace('&nbsp','');		//Quito los &nbsp.
				   var N=texto.length;			//	 ya limpio, miro el tamaño del string.
				   if(N>0){
					   if(ExpReg.test(texto[0])){
						   contp+=1;
					   }
					   for(i=1;i<N;i++){
						   if(ExpReg.test(texto[i]) && !(ExpReg.test(texto[i-1]))){
							   contp+=1;
						   }
					   }
				   }
			   }
		   }
		   return contp;
	   } */ 

	   function Inicio(){

		  var cont;
		 // Posible linea necesaria a continuacion(o usar getElementsByClassName en vez de querySelector)
		  try {
			  var uncontenedor = document.querySelector('.elementor-element.elementor-element-5d13cc9.elementor-widget.elementor-widget-theme-post-content');
			  var contenedor = uncontenedor.querySelector('.elementor-widget-container');
			  if(!contenedor) throw new Error("El contenedor no es válido");
			  var texto=contenedor.innerText;		// Hago referencia al texto ya con formato HTML.
			   //texto = texto.replace(/<[^>]*>/g,'');  //// Limpio el texto de todo tipo de etiquetas con el uso de una expresion regular que las detecta. NO ES NECESARIO, A MENOS QUE TENGAS QUE USAR innerHTML en la línea anterior.
			   texto = texto.replace(/&nbsp/g," ");		//Quito los &nbsp.
			   texto = texto.replace(/&shy;/g,"");	//Quito los &shy, que no se para que sirven.
			   texto = texto.replace(/::before/g,"");
			   texto = texto.replace(/::after/g,"");    //Quito los ::before y ::after
			   let palabras = texto.match(ExpReg);  //Devuelve un array con todas las coincidencias
			   console.log("Palabras separadas:"+palabras);
			   console.log("Texto limpio:"+texto);
			   cont = palabras ? palabras.length : 0;	//Con esto, se cuentan las palabras, si no hay, devuelve null.
			   // var N=texto.length;			//	 ya limpio, miro el tamaño del string.
			    // if(N>0){
				    // if(ExpReg.test(texto[0])){
					    // cont+=1;
				    // }
				    // for(i=1;i<N;i++){
					    // if(ExpReg.test(texto[i]) && !(ExpReg.test(texto[i-1]))){
						    // cont+=1;
					    // }
				    // }
			    // }
		
			  alert("Número de palabras: "+cont);		  
		  }catch(e){
			  alert("Error: No se pudo procesar el contenido.");
		  }
	   }
		  //const contenedor = Array.from(elementos).filter(elemento function() {  //// LUEGO VI QUE ESTO NO ERA NECESARIO
		 // const clases = elemento.classList;   Obtengo la lista de clases
		//	  return clases.length == 1 && clases.contains('elementor-element elementor-element-5d13cc9 elementor-widget elementor-widget-theme-post-content');
	
		 //// VALIDACION DEL SEPARADOR

		  // do {
			  // alert("El separador es lo que separa una palabra de la siguiente");
			  // var Va = prompt("Por favor, introduzca el separador.");
			  // if (Va.length!=1){
				  // alert("Error: Debe colocar un separador y este solo puede contener 1 solo caracter");
			  // }
		  // } while(Va.length!=1);	 //Por ahora no es necesario
		
		  // var P = contenedor.getElementsByTagName('p');
		  // var H1 = contenedor.getElementsByTagName('h1');
		  // var H2 = contenedor.getElementsByTagName('h2');
		  // var H3 = contenedor.getElementsByTagName('h3');
		  // var H4 = contenedor.getElementsByTagName('h4');
		  // var H5 = contenedor.getElementsByTagName('h5');
		  // var H6 = contenedor.getElementsByTagName('h6');
		  // var LI = contenedor.getElementsByTagName('li');
		  // var TABLE = contenedor.getElementsByTagName('table');

		  // cont= ContarPalabras(P)+ContarPalabras(H1)+ContarPalabras(H2)+ContarPalabras(H3)+ContarPalabras(H4)+ContarPalabras(H5)+ContarPalabras(H6)+ContarPalabras(LI)+ContarPalabras(TABLE);
		  // alert("Número de palabras: "+cont);
	   
	
