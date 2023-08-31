import axios from "axios";
import { HTTP_METHOD } from "../shared/enums/http-methods";

const baseURL = "http://localhost:8090/AssignmentHub";

/**
 * 
 * @param {0} HttpMethod HTTP Methods
 * @param {1} Data POST or PUT Data
 * @param {2} Endpoint Data Endpoint
 * @returns 
 */
export default async function APIServices({HttpMethod, Data, Endpoint}) {
try{
    // validate

    var sessionValue = JSON.parse(sessionStorage.getItem("Token"))
    var token = sessionValue.token;

    // if (
    //   (HttpMethod == null) & (HttpMethod.length > 0) ||
    //   !HTTP_METHOD[HttpMethod.toUpperCase()]
    // ) {
    //   throw new Error("Invalid or missing HttpMethod.");
    // }

    // if (!HTTP_ENTITY[Endpoint.toUpperCase()]) {
    //   throw new Error("Invalid or missing Table Entity name.");
    // }

    // if (token === "" || token === null) {
    //   throw new Error("Token is not existed.");
    // }

    var url = `${baseURL}${Endpoint}`;
    console.log(token);
    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.slice(1,-1)}`,
      },
    };

    var result;
    switch (HttpMethod) {
      case HTTP_METHOD.HTTP_GET:
        var responseGet = await axios.get(`${url}`, config);
        result = responseGet.data;
        // console.log(responseGet.data);
        // return responseGet.data;
      case HTTP_METHOD.HTTP_POST:
        var responsePost = await axios.post(`${url}`, Data, config);
        result = responsePost.data;
        // return responsePost.data;
        break;
      case HTTP_METHOD.HTTP_PUT:
        if (Data == null || Data) {
          var responsePut = await axios.put(`${url}`, Data, config);
          return responsePut.data;
        }
        break;

      case HTTP_METHOD.HTTP_DELETE:
        var responseDelete = await axios.put(`${url}`, Data, config);
        return responseDelete.data;
      default:
        break;
    }
    console.log(result);
    // return result;
  }catch(error){
    console.log("Error :::" + error.message);
  }
}