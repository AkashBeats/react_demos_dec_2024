import React, { useState } from "react";
export const useForm =(callBack,initialState)=>{

const [values,setValues] =useState(initialState);

const onChange=(event)=>{
    setValues({...values,[event.target.name]:event.target.value})
}

const onSubmit =(e) =>{

     e.preventDefault()
     console.log(values)
     callBack()
}
    return {
        onChange,
        onSubmit,
        values
    };
}




