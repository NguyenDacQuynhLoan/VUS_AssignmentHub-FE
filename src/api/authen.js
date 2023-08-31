import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
export const AuthenticationService = async (loginData) => {
    try {
        console.log(loginData);
        if (loginData == null || Object.values(loginData) === "") {
            return null;
        }
    
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

        // Add token to Session Storage
        var expiredDate = new Date().setHours(new Date().getHours() + 15);;
        var sessionValue = {
            token: result.data,
            expiredAt: expiredDate
        }
        console.log(sessionValue);
        sessionStorage.setItem("Token", JSON.stringify(sessionValue));

        return result.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

