
import react, { useEffect, useState } from 'react';
import axios from 'axios';

let EffectHook = () => {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
            console.log(response.data[0].url);
        });
    },[]);
    return(
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
            response.data[0];
        })
       
    );
}
export default EffectHook;
