import axios from "axios";
import {API_ROUTE} from "./constants"

const ROUTE_GET_BARCODE = '/getUserBarcode';

export const getBarCode = async (userId?: String) => {
    try {
        const barCodeUser = await axios.get(`${API_ROUTE}${ROUTE_GET_BARCODE}`,
            {
                params: {idUser: '5f19b2819d62ce92803906d0'},
                responseType: 'arraybuffer'
            });

        return 'data:image/png;base64,' + Buffer.from(barCodeUser.data, 'binary').toString('base64');
    } catch (e) {
        return e;
    }
};
