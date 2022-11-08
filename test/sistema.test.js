const Proceso=require('../src/Proceso.js');

test("Obtener primer proceso",()=>{
    var proceso=new Proceso(["Cola de salida"]);
    expect(proceso.proceso[0].nombre).toBe("Cola de salida");
})

test("Agregar ubicaciones del proceso",()=>{
    var proceso=new Proceso(["Cola de salida","Centro de facturación","centro de calidad","centro de distribución"]);
    expect(proceso.proceso[0].nombre).toBe("Cola de salida");
    expect(proceso.proceso[1].nombre).toBe("Centro de facturación");
})