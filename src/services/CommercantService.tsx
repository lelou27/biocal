import axios from "axios"
import {API_ROUTE} from "./constants"

const ROUTE_GET_COMMERCANTS = '/commercants';

export const getCommercants = async () => {
    try {
        const commercants = await axios.get(`${API_ROUTE}${ROUTE_GET_COMMERCANTS}`);

        return commercants.data.data;
    } catch (e) {
        return e;
    }
};
