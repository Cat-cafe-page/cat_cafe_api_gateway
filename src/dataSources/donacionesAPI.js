//funciones que van a consumir los recursos del backend
const { RESTDataSource } = require("apollo-datasource-rest");//lee fuente de datos REST
const serverConfig = require("../server");//tiene las uri para conectarse a las APIs

class DonacionAPI extends RESTDataSource {
    constructor(){
        super(), (this.baseURL = serverConfig.donaciones_api_url);
    }

    //metodos asincronos 
    async getAllDonations(){//trae las info de todas las donaciones en la db
        return await this.get("/donaciones/");
    } 

    async getDonationById(idDonacion) {//necesita la llave primaria o id de la donacion
        return await this.get(`/donacion/${idDonacion}/`);
    }

    async getDonationsByEmail(email) {//necesita el email del donante
        return await this.get(`/donaciones_por_email/${email}/`);
    }

    async getDonationsByCity(city) {//necesita una ciudad
        return await this.get(`/donaciones_por_ciudad/${city}/`);
    }

    async createDonation(donacion) {//recibe una estructura de datos donacion
        donacion = new Object(JSON.parse(JSON.stringify(donacion)));//convierte la donacion a JSON y luego a objeto
        return await this.post("/donacion_usuario/", donacion);//invoca el servicio web para crear la donacion
    }
}
module.exports = DonacionAPI;