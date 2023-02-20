//Validación de Formulario
(function(){
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

        var validarNombre = function(e){
            if (formulario.nombre.value == 0){
                alert("complete el campo nombre");
                e.preventDefault();
            }
        };
        var validarasunto = function(e){
            if (formulario.asunto.value < 4){
                alert("Asunto incompleto");
                e.preventDefault();
            }
        };
        var validararea = function(e){
            if(formulario.area.value == 0){
                alert("Escribe tu mensaje");
                e.preventDefault();
            }
        };
        var validar = function(e){
            validarNombre(e);
            validarasunto(e);
            validararea(e);
        };
    formulario.addEventListener("submit", validar);

}())