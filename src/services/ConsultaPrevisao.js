import axios from "axios";

export const ConsultaPrevisao = async (localidade) => {

    try {
        const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${localidade}`);
        
        return response.data;
    } catch (error) {
        return error.message;
    }
}