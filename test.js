saludar=function(){
    let recovername=document.getElementById("txtNombre");
    let name=recovername.value 
    
    let recoverlastname=document.getElementById("txtApellido");
    let lastname= recoverlastname.value

    let saludito=generarSaludo(name,lastname);

    console.log(saludito)


}