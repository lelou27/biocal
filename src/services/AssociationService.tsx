import axios from "axios";
import {API_ROUTE} from "./constants";

const ROUTE_GET_ASSOCIATIONS = '/associations';

export const getAssociation = async () => {
    try {
        const associations = await axios.get(`${API_ROUTE}${ROUTE_GET_ASSOCIATIONS}`);

        return associations.data.data;
    } catch (e) {
        return e;
    }
};


