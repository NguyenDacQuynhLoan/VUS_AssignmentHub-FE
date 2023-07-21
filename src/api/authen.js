import axios from "axios"

const baseURL = "http://localhost:8090/AssignmentHub"
export const AuthenticationService = async () => {
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
        var result =  await axios.post(url,data,config);
        return result.data;
    } catch (error) {
        console.error('Error:', error);
    }
}


const  HTTP_METHOD_ENUM ={
    HTTP_POST   : "post",
    HTTP_GET    : "get" ,
    HTTP_PUT    : "put",
    HTTP_DELETE : "delete"
}
const ENTITY_ENUM = {
    SUBJECT:"/subjects",
    ASSIGNMENT :"/assignments",
    ROLE:"/roles",
    USER:"/users"
}
export default async function APIServices  ({method,data,url,entityURL}) {
    try {
        // validate
        if((method == null & method.length > 0) || ! HTTP_METHOD_ENUM[method.toUpperCase()]){
            throw new Error("Invalid or missing HttpMethod.")
        }

        if(!ENTITY_ENUM[entityURL.toUpperCase()]){
            throw new Error("Invalid or missing Table Entity name.")
        }

        var config = {
            headers:{
                "Content-Type":"application/json"
            }
        };

        var result;
        switch (method) {
            case HTTP_METHOD_ENUM.HTTP_GET:
                {
                    result =  await axios.get(`${url}${entityURL}`,config);
                }
                break;
            case HTTP_METHOD_ENUM.HTTP_POST:
                {
                    if(data == null || data){

                    }
                    result =  await axios.post(`${url}${entityURL}`,data,config);
                }   
                break;
            case HTTP_METHOD_ENUM.HTTP_PUT:
                {
    
                }
                break;
            case HTTP_METHOD_ENUM.HTTP_DELETE:
                {
                    if(data != null){
                        
                    }else{
                        throw new Error("Missing input value or param")
                    }
                }
                break;
            default:
                {

                }
                break;
        }
        return result.data;
    } catch (error) {
        console.log("Error : " + error)
    }
    
}