import React, { useEffect } from "react";
import PieChart from "../components/admin/pie-chart";

// sample chart data
const Data = [
    {
      "id": "css",
      "label": "css",
      "value": 23,
      "color": "hsl(352, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 375,
      "color": "hsl(119, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 151,
      "color": "hsl(165, 70%, 50%)"
    },
    {
      "id": "stylus",
      "label": "stylus",
      "value": 66,
      "color": "hsl(153, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 31,
      "color": "hsl(353, 70%, 50%)"
    }
  ]

export default function Home () {
  const [temp, settemp] = React.useState([])

  useEffect(() => {
    // axios.get('http://localhost:8080/AssigmentSubmissionApp/users').then((res)=>{
    //   console.log(res.data);
    //   res.data.forEach(element => {
    //     settemp(element.assignedDate)
    //   });
    // })
    
  }, [])
  
    return ( 
        <>
            <h1>This is home page</h1>
            <PieChart data={Data}/>
        </>
    );
}
