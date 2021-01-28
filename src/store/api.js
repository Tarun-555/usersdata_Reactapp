const url = "https://panorbit.in/api/users.json"

export const fetchData = async() =>{
    try{
     const res = await fetch(url);
     const data = await res.json();
    return data;
    }
    catch(err){
        console.log(err)
    }
} 