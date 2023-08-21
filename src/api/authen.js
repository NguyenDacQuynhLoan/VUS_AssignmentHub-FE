import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDefaultLayoutContext } from "../layout/provider/layout-provider";
export const AuthenticationService = async (loginData) => {
    const token_storage = localStorage.getItem('token');

    if (token_storage !== "" && token_storage !== null && token_storage !== undefined) {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token_storage}`;
        return token_storage;
    }
    else 
    {
        if (loginData == null || Object.values(loginData) === "") {
            return null;
        }

        try {
            var url = "http://localhost:8090/AssignmentHub/auth/login";
            var config =
            {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            
            var data =
            {
                "email": loginData.email,
                "password": loginData.password
            };


            var result = await axios.post(url, data, config);
            // axios.defaults.headers.common["Authorization"] = `Bearer ${result.data}`;
            var decode = jwt_decode("\"" + result.data + "\"");
            // console.log("1 " + "\"" + result.data + "\"");
            // console.log("2 " + decode.code);

            localStorage.setItem("Token", JSON.stringify(result.data));
            
            return result.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

