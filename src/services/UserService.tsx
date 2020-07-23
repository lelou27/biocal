import axios from "axios";
import {API_ROUTE} from "./constants";

const ROUTE_GET_USER = '/user/';
const ROUTE_GET_XP = '/getActuelsXp/';

export const getUser = async (idUser: String) => {
    try {
        const user = await axios.get(`${API_ROUTE}${ROUTE_GET_USER}${idUser}`);

        return user.data.data;
    } catch (e) {
        return e;
    }
};

export const getActuelsXp = async (idUser: String) => {
    try {
        const xpActuels = await axios.get(`${API_ROUTE}${ROUTE_GET_XP}${idUser}`);

        return xpActuels.data.data;
    } catch (e) {
        return e;
    }
};


