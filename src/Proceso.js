function Proceso(ubicaciones){
    this.proceso=new Array();
    for(i=0;i<ubicaciones.length;i++){
        this.proceso[i]=ubicaciones[i];
    }
}

module.exports=Proceso;