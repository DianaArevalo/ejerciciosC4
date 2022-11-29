class Avion{

    constructor(id){
        this.placa = id;
    }

    transportar(lugar){
        console.log("El avion ["+this.placa+"] esta transportando pedido a: "+lugar);
    }
}