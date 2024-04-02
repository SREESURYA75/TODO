import { useState } from "react";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Edit(props){
    const[binput,setbinput]=useState()
    const[id,setid]=useState(0)
    const navi=useNavigate()
    // const {id}=useParams()

    function monk(e){
        setbinput(e.target.value)
    }
   
useEffect(()=>{
    setid(localStorage.getItem("id"))
    setbinput(localStorage.getItem("name"))
},[])

    function add(e){
        e.preventDefault()
        let objj={
            name:binput
        }
        props.objj(objj)
        navi("/")
    }


    return(
        <div>
            <form onSubmit={add}>
          <input  type='text' placeholder={binput}  onChange={monk}></input>
        <button type='submit' >Add</button>
        </form>
        </div>
    )
}
export default Edit;