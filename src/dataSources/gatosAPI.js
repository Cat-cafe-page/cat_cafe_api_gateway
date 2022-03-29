//funciones que van a consumir los recursos del backend
const { RESTDataSource } = require("apollo-datasource-rest");//lee fuente de datos REST
const serverConfig = require("../server");//tiene las uri para conectarse a las APIs

class GatosAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.gatos_api_url;
    }

    //metodos asincronos 
    async getAllGatos(){//trae las info de todos los gatos en la db
        return await this.get("/gatos");
    } 

    async getGatoById(gatoId) {//necesita la llave primaria o id del gato
        return await this.get(`/gato/${gatoId}/`);
    }

    async getGatoByAdoptionYear(añoDeAdopcion) {//necesita el año de adopcion
        return await this.get(`/gatos/${añoDeAdopcion}`);
    }

    async createGato(gato) {//recibe una estructura de datos gato
        gato = new Object(JSON.parse(JSON.stringify(gato)));//convierte el gato a JSON y luego a objeto
        return await this.post("/createGato", gato);//invoca el servicio web para crear el gato
    }

    async deleteGato(gatoId) {//elimina el gato por el id
        return await this.delete(`/deleteGato/${gatoId}`);
    }

    async updateGato(gato) {
        gato = new Object(gato);
        let gatoId = gato.id;//obtiene el id del objeto gato como una variable
        return await this.put(`/updateGato/${gatoId}`, gato);
    }    
}
module.exports = GatosAPI;