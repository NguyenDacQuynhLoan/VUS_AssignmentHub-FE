import axios from "axios";
import { HTTP_ENTITY } from "../shared/enums/http-entity";

const baseURL = "http://localhost:8090/AssignmentHub";

/**
 *  Import CSV File
 * @param {*} file Detect Import
 */
export const APIImportFile = async(file) => {
  try{
    var sessionValue = JSON.parse(sessionStorage.getItem("Token"));
    var token = sessionValue.token;
  
    let formData = new FormData();
    formData.append("file", file);
  
    var response = await axios.post(`${baseURL}${HTTP_ENTITY.USER}/import`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }catch(error){
    throw error.response.data;
  }
};

/**
 * Export CSV File
 */
export const APIExportFile = async () => {
  try {
      var sessionValue = JSON.parse(sessionStorage.getItem("Token"));
      var token = sessionValue.token;
    
      var response = await axios.get(`${baseURL}${HTTP_ENTITY.USER}/export`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
  } catch (error) {
    throw error.response.data;
  }
};