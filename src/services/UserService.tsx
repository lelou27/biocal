import axios from "axios";
import {API_ROUTE} from "./constants";

const ROUTE_GET_USER = '/user/';

export const getUser = async (idUser: String) => {
    try {
        const user = await axios.get(`${API_ROUTE}${ROUTE_GET_USER}${idUser}`);

        return user.data.data;
    } catch (e) {
        return e;
    }
};


