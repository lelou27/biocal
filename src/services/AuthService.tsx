import axios from "axios";
import {API_ROUTE} from "./constants";

const ROUTE_LOGIN = '/login'

export const login = async (userEmail: String, password: String) => {
    try {
        const user = await axios.post(`${API_ROUTE}${ROUTE_LOGIN}`, {email: userEmail, password: password});

        return user.data.data;
    } catch (e) {
        return e;
    }
};


