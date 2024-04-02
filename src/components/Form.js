
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Form(props){
    const[binput,setbinput]=useState('');
    const[iscolor,setiscolor]=useState(false);
    const navi=useNavigate()
    function inputvalue(e){
     setbinput(e.target.value)
     setiscolor(false)
    }
    function add(e){ 
     if(binput.length===0){
      setiscolor(true)
      return
     }

     let obj={ 
      id:Math.floor(Math.random()*100), 
    name:binput}
    props.obj1(obj)
    setbinput('') 
    }
  
    function up(id ,name){
      localStorage.setItem("id",id)
      localStorage.setItem("name",name)
      navi("/edit")
       }
   
                                                                                                              
    return(
      <div>
      {/* <div> */}
        <h3>Todo Form</h3>
        
        <input  type='text' value={binput} onChange={inputvalue} style={{borderColor: iscolor? 'red':'green'}}></input>
        <button type='button' onClick={add}>Add</button>
      {/* </div> */}
{/* <div> */}
       {props.data.length===0?(<p>Not Found</p>):props.data.map((o)=><p key={o.id}>{o.name} 
       <button onClick={()=>up(o.id,o.name)}>Update</button>
        <button  id='but2' onClick={()=>props.delete(o.id)}>delete</button>
        </p>
        )}
        </div>
        // </div>
 )
}
export default Form;
