import axios from "axios"

export const AuthenticationService = async (loginData) => {
    const token_storage = localStorage.getItem('token');
    console.log(token_storage);
    if(token_storage !== "" && token_storage !== null && token_storage !== undefined)
    {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token_storage}`;
        return token_storage;
    }
    else{
        if(loginData == null || Object.values(loginData) === ""){
            return null;
        }
        
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
                "email":loginData.email,
                "password":loginData.password
            };
            
            
            var result =  await axios.post(url,data,config);


            axios.defaults.headers.common["Authorization"] = `Bearer ${result.data}`;
            localStorage.setItem("Token", JSON.stringify(result.data));
            return result.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
