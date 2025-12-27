const BASE_URL = "http://localhost:5000/api/code"


export const saveCode = async (code)=> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify(code)
        body: JSON.stringify({ code })
    });
    if (!response.ok) {
        throw new Error("Failed to save code");

    }
    return response.json(); 
}
     
export const getCodeById = async (id)=>{
   const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok){
        throw new Error("Failed to get code");
    }
    return response.json() 
}

