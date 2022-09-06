import data from "../data.json"

const getDoctor = async(doctorId)=>{

    //fetch based Id
    // const data = await fetch("../data.json") ; 
    console.log(data);
    // const response = await data.json();
    // console.log(response);
    return data;
}


export {getDoctor}