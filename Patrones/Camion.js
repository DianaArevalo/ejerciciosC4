class Camion{

    constructor(placa){
        this.placa = placa;
    }

    transportar(lugar){
        console.log("El camion ["+this.placa+"] esta transportando pedido a: "+lugar);
    }
    
}

export default Camion;