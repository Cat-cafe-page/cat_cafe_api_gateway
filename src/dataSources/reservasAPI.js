//funciones que van a consumir los recursos del backend
const { RESTDataSource } = require("apollo-datasource-rest");//lee fuente de datos REST
const serverConfig = require("../server");//tiene las uri para conectarse a las APIs

class ReservaAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.reservas_api_url;
    }

    async getAllReservas() {
        return await this.get("/reservas/");
    }

    async getAllReservasByUserDocument(user) {
        return await this.get(`/reservas_usuario/${user}/`);
    }

    async getReservaById(idReserva) {
        return await this.get(`/reserva_usuario/${idReserva}/`);
    }

    async createReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        return await this.post("/reserva_usuario/", reserva);
    }

    async updateReserva(idReserva,Reserva) {
        const reserva = new Object(Reserva);
        return await this.put(`/reserva_usuario/update/${idReserva}`, reserva);
    } 

    async deleteReserva(idReserva) {
        return await this.delete(`/reserva/remove/${idReserva}/`);
    }

    async getAllPlans() {
        return await this.get("/plans/");
    }

    async getAllPlansByDaytime(jornada) {
        return await this.get(`/plans_for_time/${jornada}/`);
    }

    async getAllPlansByDuration(duracion) {
        return await this.get(`/plans_for_duration/${duracion}/`);
    }

    async getAllPlansByPrice(precio) {
        return await this.get(`/plans_for_price/${precio}/`);
    }

    async getPlanById(planId) {
        return await this.get(`/plan_usuario/${planId}/`);
    }

    async createPlan(plan) {
        plan = new Object(JSON.parse(JSON.stringify(plan)));
        return await this.post("/plan_usuario/", plan);
    }

    async updatePlan(planId, plan) {
        const Plan = new Object(plan);
        return await this.put(`/plan_usuario/update/${planId}/`, Plan);
    }

    async deletePlan(planId) {
        return await this.delete(`/plan_usuario/remove/${planId}/`);
    }
}
module.exports = ReservaAPI;