import request from "../lib/request.ts";

export class LiveService {
    static living() {
        return request(`/v1/live`, {
            method: "GET",
        });
    }
}