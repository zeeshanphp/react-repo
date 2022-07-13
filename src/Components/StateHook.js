import react, {Fragment, useState} from 'react';

let StateHook = () => {
let uname = 'zeeshan';

const [count , setCount] = useState(0);
// function changeState() {
//     let uname = "updated state";
//     console.log(uname);
//     setUser(uname);
//   }
  function addState(){
    setCount(count + 1);

  }
  function subState(){
    if (count>0) {
        setCount(count - 1);
    }
    
}
return(
    <Fragment>
<center><h2 className="text-success">COUNTER USING USESTATE </h2>

<h4>{count}</h4>
<button onClick={addState} className="btn btn-success">ADD</button>
<button onClick={subState} className="btn btn-danger">SUB</button></center>
</Fragment>
);


}
export default StateHook;