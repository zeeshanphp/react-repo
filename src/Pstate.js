import { Fragment, useState } from "react";

let Pstate = ()=>{
    let varone = "old value";
    const [newVal , setVal] = useState("old value");
    function CheckState(){
        setVal('umer');
        console.log(varone);
    }
    return(
        <Fragment>
        <h3>{newVal}</h3>
        <button onClick={CheckState}>Click me for change state</button>
        </Fragment>
    );
}

export default Pstate;