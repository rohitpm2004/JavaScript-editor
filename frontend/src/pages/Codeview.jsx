import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCodeById } from "../services/api";
import Home from "./Home";
const CodeView = () => {

   const { id } = useParams();
    const [codeData, setCodeData] = useState(null); 
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      const fetchCode = async ()=>{
        try{
          const data = await getCodeById(id);
          setCodeData(data)
        }catch(err){
          alert("Failed to fetch code")
        }finally{
          setLoading(false) 

        }
      }
      fetchCode();
    },[id]);

    if (loading) {
    return <p>Loading...</p>;
  }

  // ❌ No data found
  if (!codeData) {
    return <p>No code found</p>;
  }
  
  return  (
    <>
    <Home 
     initialCode={codeData.code}
      readOnly={true}
    />
    </>
  );
};

export default CodeView;  