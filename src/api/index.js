import axios from "axios";

export const baseURL = "http://localhost:8090/AssignmentHub/api";

export const HTTP_METHOD_ENUM = {
  HTTP_POST: "post",
  HTTP_GET: "get",
  HTTP_PUT: "put",
  HTTP_DELETE: "delete",
};

export const ENTITY_ENUM = {
  SUBJECT: "/subjects",
  ASSIGNMENT: "/assignments",
  ROLE: "/roles",
  USER: "/users",
};

export default async function APIServices({
  method,
  data,
  entityUrl,
  paramUrl,
}) {
  try {
    // validate
    if (
      (method == null) & (method.length > 0) ||
      !HTTP_METHOD_ENUM[method.toUpperCase()]
    ) {
      throw new Error("Invalid or missing HttpMethod.");
    }

    if (!ENTITY_ENUM[entityUrl.toUpperCase()]) {
      throw new Error("Invalid or missing Table Entity name.");
    }

    var token = localStorage.getItem("Token");
    if (token === "" || token === null) {
      throw new Error("Token is not existed.");
    }

    var url = `${baseURL}${entityUrl}`;
    if (paramUrl === "" || paramUrl === null) {
      url = `${url}/${paramUrl}`;
    }

    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    switch (method) {
      case HTTP_METHOD_ENUM.HTTP_GET:
        var responseGet = await axios.get(`${url}`, config);
        return responseGet.data;
      case HTTP_METHOD_ENUM.HTTP_POST:
        if (data == null || data) {
          var responsePost = await axios.post(`${url}`, data, config);
          return responsePost.data;
        }
        break;
      case HTTP_METHOD_ENUM.HTTP_PUT:
        if (data == null || data) {
          var responsePut = await axios.put(`${url}`, data, config);
          return responsePut.data;
        }
        break;
      case HTTP_METHOD_ENUM.HTTP_DELETE:
        if (data != null && paramUrl != null && paramUrl !== "") {
            var responseDelete = await axios.put(`${url}`, data, config);
            return responseDelete.data;
        } else {
          throw new Error("Missing input value or param");
        }
      default:
        break;
    }
  } catch (error) {
    console.log("Error : " + error);
  }
}