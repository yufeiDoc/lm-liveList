import axios from "axios";
import { AxiosRequestConfig } from "axios";

export default async function request(url: string, req: AxiosRequestConfig) {
    const r = await axios({
        url,
        ...req,

    });
    return r.data;
}
