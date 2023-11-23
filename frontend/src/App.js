import { useState } from "react";
import axios from "axios";

function App(){
  const [data,setData] = useState({});
  function inputclick(e){
    setData({...data, [e.target.title]:e.target.value})
  }

async  function createuser(){
    const res= await axios.post("http://localhost:8000/home",data);
  console.log(res)
  }


  return(
    <div>
<input type="text" placeholder="email" title="email" onChange={inputclick}></input>
<input type="text" placeholder="passowrd" title="passowrd" onChange={inputclick}></input>
<button onClick={createuser}>send </button>
    </div>
  )
}
export default App;

