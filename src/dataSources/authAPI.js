//funciones que van a consumir los recursos del backend
const { RESTDataSource } = require("apollo-datasource-rest");//lee fuente de datos REST
const serverConfig = require("../server");//tiene las uri para conectarse a las APIs

class AuthAPI extends RESTDataSource {//hereda de REST
    constructor(){
        super(), (this.baseURL = serverConfig.auth_api_url);
    }

    //metodos asincronos ya que llaman microservicios asincronos
    async createUser(user){ //recibe una estructura de datos usuario
        user = new Object(JSON.parse(JSON.stringify(user)));//convierte el usuario a JSON y luego a objeto
        return await this.post("/user/", user);//invoca el servicio web para crear el usuario
    }

    async getUser(userId){//necesita la llave primaria o id del usuario
        return await this.get(`/user/${userId}/`);
    }

    async updateUser(){
        user = new Object(user);
        let userId = user.id;//obtiene el id del objeto usuario como una variable
        return await this.put(`/user/update/${userId}/`, user);
    }

    async deleteUser(userId){//elimina el usuario por el id
        return await this.delete(`/user/delete/${userId}`);
    }

    async authRequest(credentials){//recibe las credenciales para hacer la autenticacion
        credentials = new Object(credentials);
        return await this.post("/login/", credentials);
    }

    async refreshToken(token){
        token = new Object(token);
        return await this.post("/refresh/", token);
    }
}
module.exports = AuthAPI;