function fraseAleatoria(){
    let num = (Math.trunc(Math.random()*3)+1);
    let frase;

    if (num == 1){
        frase = '<h2 id= "frase1"> Quizás el éxito en mi puerta haya golpeado pero se ve que yo justo había salido. </h2>';
    }
    else if (num == 2){
        frase = '<h2 id= "frase2"> El que ríe último piensa más lento. </h2>';
    }
    else {
        frase = '<h2 id= "frase3"> Siempre pensé que trabajar no era moderno. Si el trabajo es salud, que trabajen los enfermos. </h2>';
    }

   return frase;
}

let aux;
fraseAleatoria();

aux = document.getElementById('mostrarFrase');
aux.innerHTML = fraseAleatoria();




