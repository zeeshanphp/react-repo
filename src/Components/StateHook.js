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
<h4>{count}</h4>
<button onClick={addState}>ADD</button>
<button onClick={subState}>SUB</button>
</Fragment>
);


}
export default StateHook;