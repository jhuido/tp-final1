test("Obtener primer proceso",()=>{
    var proceso=new Proceso();
    expect(proceso.proceso[0]).toBe("Cola de salida");
})