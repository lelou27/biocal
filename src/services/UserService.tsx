import axios from "axios";
import {API_ROUTE} from "./constants";

import { Plugins } from '@capacitor/core';
import {returnDownBack} from "ionicons/icons";
const { Storage } = Plugins;

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

export const isLogged = async () => {
    const user = await Storage.get({key: 'user'});

    return !user.value || user.value === null ? false : true;
};

export const loggout = async () => {
    await Storage.clear();
};


