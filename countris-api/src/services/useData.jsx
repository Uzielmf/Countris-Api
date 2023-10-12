import { useState, useEffect } from "react";


function useData(){
    const [data, setData] = useState(null)
  
    useEffect(() => {
      const getData = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const datos = await res.json();
        setData(datos)
      }
  
      getData()
    }, [])
  
    return data;
  }

  export default useData;