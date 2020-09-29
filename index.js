window.onload = function() { 
    let quien = ["Mi madre","Mi abuela", "La policía", "Un extraterreste", "Simbad el marino", "Un señor de Murcia", "La del quinto", "El perro", "Un ratón", "Un bombero"]
    let accion = ["se comió", "pisó" ,"tiró al WC", "tiró a la basura" ,"robó","quemó","manchó", "mojó", "trituró", "se hizo popó en"]
    let que = ["mis deberes","mis cuadernos","mi tarea","mi mochila","nuestra casa", "mi estuche"]
    let cuando =["justo cuando iba a ponerme a estudiar", "al llegar a casa", "al salir del colegio", "en las escaleras", "esta misma mañana", "cuando salía a la biblioteca"]
    let posicionQuien = [Math.floor(Math.random() * 10)];
    let posicionAccion = [Math.floor(Math.random() * 10)];
    let posicionQue = [Math.floor(Math.random() * 6)];
    let posicionCuando = [Math.floor(Math.random() * 6)];
    let myExcuse = "¡"+ quien[posicionQuien]+" "+accion[posicionAccion]+" "+que[posicionQue]+" "+cuando[posicionCuando]+"!";
        document.getElementById("generator").innerHTML = myExcuse;         
}    
