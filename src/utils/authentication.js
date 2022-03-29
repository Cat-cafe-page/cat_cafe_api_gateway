//validacion de las peticiones que llegan al API gateway con ayuda del microservicio auth
//todas las peticiones deben incluir el token para asi identificar que se esta realizando una peticion
const { ApolloError } = require('apollo-server');
const serverConfig    = require('../server');
const fetch           = require('node-fetch');

//resive un request como parametro y comprueba si la peticion posee un token
const authentication = async({req}) => {
    const token = req.headers.authorization || '';

    if(token == '') {
        return { userIdToken : null }
    }
    else { //realiza una petición al microservicio auth
        try {
            let requestOptions = {
                method   : 'POST',
                headers  : {"Content-Type": "application/json","Accept" : "application/json"}, //application determina quien lo va a procesar
                body     : JSON.stringify({token}),//convierte el token a JSON
                redirect : 'follow'
            };

            let response = await fetch(//await para respuestas asincronas
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions
            ) 

            if(response.status != 200) {//status guarda el codigo http - error del servicio web 
                console.log(response);
                throw new ApolloError(`Sesión fallida o inactiva - ${401}` + response.status, 401);//apollo error gestiona los errores
            }
            
            return { userIdToken: (await response.json()).UserId };
            
        }
        catch(error) {//retorna un error en tiempo de ejecucion - error del servidor de Apollo
            throw new ApolloError(`Error validando el token: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;//permite que se invoque la autenticacion en todo el proyecto