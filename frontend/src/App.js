import { useState } from "react";
import axios from "axios";

function App(){
  const [data,setData] = useState({});
  function inputclick(e){
    setData({...data, [e.target.title]:e.target.value})
  }
console.log(data);
async  function createuser(){

    const res= await axios.post("https://verce-test-three.vercel.app/home",data);
    console.log(res.data)
  if(res.data){
  alert("noobda headshot laga gaya")
  }
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

