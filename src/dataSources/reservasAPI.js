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

    async getAllReservasByUserDocument(userDocument) {
        return await this.get(`/reservas_usuario/${userDocument}/`);
    }

    async getReservaById(reservaId) {
        return await this.get(`/reserva_usuario/${reservaId}/`);
    }

    async createReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        return await this.post("/reserva_usuario/", reserva);
    }

    async updateReserva(reserva, reservaId) {
        const reserva = new Object(reserva);
        return await this.put(`/reserva_usuario/update/${reservaId}`, reserva);
    } 

    async deleteReserva(reservaId) {
        return await this.delete(`/reserva/remove/${reservaId}/`);
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

    async updatePlan(plan, planId) {
        const plan = new Object(plan);
        return await this.put(`/plan_usuario/update/${planId}/`, plan);
    }

    async deletePlan(planId) {
        return await this.delete(`/plan_usuario/remove/${planId}/`);
    }
}
module.exports = ReservaAPI;