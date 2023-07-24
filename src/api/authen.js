import axios from "axios"

export const AuthenticationService = async ({loginData}) => {
    try {
        var url = "http://localhost:8090/AssignmentHub/auth/login";
        var config = 
        {
            headers:{
                "Content-Type":"application/json"
            }
        };

        var data = 
        {
            "email":"admin@gmail",
            "password":"admin123"
        };
        // const bearer_token = `Bearer ${localStorage.getItem('token')}`;

        var result =  await axios.post(url,data,config);
        return result.data;
    } catch (error) {
        console.error('Error:', error);
    }
}
