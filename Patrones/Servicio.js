class Servicio{
    idServicio = 0;

    generarId(){
        this.idServicio = Math.random().toString(36).slice(2);
    }

    obtenerTransporte(){
        return new Camion(this.Servicio)
    }
}

export default Servicio;