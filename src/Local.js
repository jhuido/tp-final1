const Paquete=require("../src/Paquete.js");

function Local(){

    this.generarPaquete=function(){
        var paquete=new Paquete();
        return "Paquete creado";
    }
}

module.exports=Local;