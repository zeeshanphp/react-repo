import { Fragment } from "react";
import { useState } from "react";
let Ustate = ()=>{
    let myname = "zeeshan";
    const [uname, setUname] = useState(myname);
    function Chk (){
        let sname="umer"
        
        setUname(sname);;
        console.log(uname);
        
        // let mynames = "dojo";
        // console.log(mynames);
        // uname.myname = mynames;
        //console.log(uname);
        // 
        // setUname({myname});
       
        // myname = "dojo";

        // console.log(myname);
       
    }
    return(
        <Fragment>
        <h1 className="text-primary">USE STATE</h1>
        <h3 className="text-success">{uname}</h3>
        <button onClick={Chk}>Click</button>
        </Fragment>
    );
}
export default Ustate;