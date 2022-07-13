import { Fragment } from "react";
import MapFunc from "./MapFunc";
function Dynam(){
    let namef = 'zeeshan ashraf';
    let age =33;
    let skills  = {htmls:"expert" ,csss:"expert" ,jsxs:"inter" ,jqry:"expert" } ;
    let google = "https://www.google.com";
    return(
        <Fragment>
        <h1>Name : {namef}</h1>

        <p>Age : {age}</p>
        <a className="text-danger" href={google}>Google</a>
        <MapFunc />
        </Fragment>
    );
}
export default Dynam;