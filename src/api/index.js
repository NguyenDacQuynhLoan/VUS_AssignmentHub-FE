import axios from "axios";
import { HTTP_METHOD } from "../shared/enums/http-methods";

const baseURL = "http://localhost:8090/AssignmentHub";



export default async function APIServices({HttpMethod, Data, Endpoint}) {
  try {
    var token = localStorage.getItem("Token");

    // validate
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


    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.slice(1,-1)}`,
      },
    };

    switch (HttpMethod) {

      case HTTP_METHOD.HTTP_GET:
        var responseGet = await axios.get(`${url}`, config);
        // console.log(responseGet.data);
        return responseGet.data;

      case HTTP_METHOD.HTTP_POST:
        if (Data == null || Data) {
          var responsePost = await axios.post(`${url}`, Data, config);
          return responsePost.data;
        }
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
        // if (Data != null && paramUrl != null && paramUrl !== "") {
        // } else {
        //   throw new Error("Missing input value or param");
        // }
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
}