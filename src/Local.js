const Paquete=require("../src/Paquete.js");

function Local(){

    this.generarPaquete=function(){
        var paquete=new Paquete();
        return paquete
    }
}

module.exports=Local;