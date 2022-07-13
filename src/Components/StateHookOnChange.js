import { Fragment, useState } from "react";

let StateHookOnChange = () =>{
    let chan = "Enter Text To Change";

    const[otext , setotext] = useState(chan);
    function onChange(event){
        // let varone = event.target.value;
        // console.log(varone);
        setotext(event.target.value);
//console.log();
    }
    function clearVal() {
        setotext("");
    }
return(
    <Fragment>
        <center><h2 className="text-primary">USE STATE HOOK USED WITH ONCHANGE </h2>
    <tr className="table">
        <td><input type="text" onChange={onChange} className="form-control" /></td>
        <td><button className="btn btn-success" onClick={clearVal}>Clear Value</button></td>
    </tr>
    
    <p>{otext}</p></center>
    </Fragment>
);


}

export default StateHookOnChange;