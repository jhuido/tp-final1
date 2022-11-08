const Ubicacion=require("../src/Ubicacion.js");

function Proceso(ubicaciones){
    this.proceso=new Array();
    for(i=0;i<ubicaciones.length;i++){
        this.proceso[i]=new Ubicacion(ubicaciones[i]);
    }
}

module.exports=Proceso;