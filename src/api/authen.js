import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
export const AuthenticationService = async (loginData) => {
    try {
        
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


        await axios.post(url, data, config).then(e =>{
            // Add token to Session Storage
            var expiredDate = new Date().setHours(new Date().getHours() + 15);;
            var sessionValue = {
                token: e.data.result,
                expiredAt: expiredDate
            }
            sessionStorage.setItem("Token", JSON.stringify(sessionValue));
        });
    } catch (error) {
        throw error.response.data;
    }
}

