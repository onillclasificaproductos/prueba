//function resultadototal(datoname, datonum1, datonum2) {
function resultadototal() {
    /*Mostramos el tipo de dato
    console.log(typeof(datonum2));*/

    //let Dname = datoname;
    // let Dnum1 = parseInt(datonum1);
    // let Dnum2 = parseInt(datonum2);
    //Pasamos los datos directamente a partir de los id del formulario.
    let Dname = document.getElementById('nombre').value;
    //Incorporamos parseInt para que deje de tomarlo como String.
    let Dnum1 = parseInt(document.getElementById('uno').value);
    let Dnum2 = parseInt(document.getElementById('dos').value);
    let tres = Dnum1 + Dnum2;

    /*Mostramos por consola
    console.log(Dnum1);*/

    //Mostramos en Input los datos cargados.
    document.getElementById('nombreee').value = Dname;
    document.getElementById('nomb').value = Dname;
    document.getElementById('nub1').value = Dnum1;
    document.getElementById('nub2').value = Dnum2;
    document.getElementById('sum').value = tres;

    /* //Mostramos por page los siguientes datos...    
     document.write(Dnum2 + '</br>');
     document.write(Dname);*/
}