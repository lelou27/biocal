import axios from "axios";
import {API_ROUTE} from "./constants";

const ROUTE_POST_DON = '/don/';

export const setDon = async (user:String, association:String, montantDon:number) => {
    try {
        console.log(user, association, montantDon);
        const don = await axios.post(`${API_ROUTE}${ROUTE_POST_DON}`, {
            user: user,
            association: association,
            montantDon: montantDon
        });
    } catch (e) {
        return e;
    }
};
