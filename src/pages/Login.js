import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React from "react";

export default function LoginPage() {
    const [loginFormData, setLoginFormData] = React.useState({email:"",password:""});

    const onSubmitClicked = (e) => {
      e.preventDefault();      

      var url = "http://localhost:8080/EduSystem/api/auth/login";
      var login = {
        email:loginFormData.email,
        password:loginFormData.password
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };

      axios.post(url,login,config).then((res) => console.log(res));
    }  

    const handleChange = (e) => {
      setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };

  return (
    <>
    <form onSubmit={onSubmitClicked}>
      <FormControl >
          <FormLabel>Email or account name</FormLabel>
          <TextField name="email" onChange={handleChange} value={loginFormData.email}/>
          <FormLabel>Password</FormLabel>
          <TextField name="password"  onChange={handleChange}  value={loginFormData.password} type="password" />
          <Button type="submit">Submit</Button>
        </FormControl>
    </form>
    </>
  );
}
