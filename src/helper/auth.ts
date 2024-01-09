import axios from "axios";
import {API_URL, path} from "@/utils/index"
const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}${path.login}`, {
            identifier: email,
            password,
        });
        return {data: response.data, success: true};
    } catch (error) {
        return {data: error, success: false};
    }
}

export {login}