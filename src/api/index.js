import axios from "axios";

const baseURL = "http://localhost:8090/AssignmentHub";

export const ENTITY_ENUM = {
  SUBJECT: "/api/subjects",
  ASSIGNMENT: "/api/assignments",
  ROLE: "/api/roles",
  USER: "/api/users",
};
export const HTTP_METHOD_ENUM = {
  HTTP_POST: "post",
  HTTP_GET: "get",
  HTTP_PUT: "put",
  HTTP_DELETE: "delete",
};
export default async function APIServices({HttpMethod, Data, Endpoint}) {
  try {
    var token = localStorage.getItem("Token");

    // validate
    // if (
    //   (HttpMethod == null) & (HttpMethod.length > 0) ||
    //   !HTTP_METHOD_ENUM[HttpMethod.toUpperCase()]
    // ) {
    //   throw new Error("Invalid or missing HttpMethod.");
    // }

    // if (!ENTITY_ENUM[Endpoint.toUpperCase()]) {
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
      case HTTP_METHOD_ENUM.HTTP_GET:
        var responseGet = await axios.get(`${url}`, config);
        return responseGet.data;
      case HTTP_METHOD_ENUM.HTTP_POST:
        if (Data == null || Data) {
          var responsePost = await axios.post(`${url}`, Data, config);
          return responsePost.Data;
        }
        break;
      case HTTP_METHOD_ENUM.HTTP_PUT:
        if (Data == null || Data) {
          var responsePut = await axios.put(`${url}`, Data, config);
          return responsePut.Data;
        }
        break;
      case HTTP_METHOD_ENUM.HTTP_DELETE:
        var responseDelete = await axios.put(`${url}`, Data, config);
        return responseDelete.Data;
        // if (Data != null && paramUrl != null && paramUrl !== "") {
        // } else {
        //   throw new Error("Missing input value or param");
        // }
      default:
        break;
    }
  } catch (error) {
    console.log("Error : " + error);
  }
}