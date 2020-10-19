import Axios from "../libs/https";
import { JUHE_APPKEY } from "../configs/keys";
const getData = (data, success, fail) => {
    Axios({
        url: "/api/calendar/day",
        method: "get",
        params: {
            ...data,
            key: JUHE_APPKEY
        },
        success,
        fail
    })
};

export {
    getData
}