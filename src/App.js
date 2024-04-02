import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Form from './components/Form';
import Edit from './components/Edit';


function App(){
  const[show,setshow]=useState([ ])

  function obj1(obj){
  setshow((gg)=>{return[...gg,obj]})  
  }

  
  function  objj(ob){
  setshow((gg)=>{return[...gg,ob]})  
  // setshow((ddd)=>{return ddd.filter((dda)=>dda.id === ob)})
    // setshow(e.target.valure)
  }


  function delete1(dd){
  setshow((ddd)=>{return ddd.filter((dda)=>dda.id !== dd)})
  } 
 
 
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Form obj1={obj1} data={show} delete={delete1}></Form>}></Route>
        <Route path='/edit' element={<Edit objj={objj}></Edit>}></Route>
      </Routes>
      </BrowserRouter>
  

    </div>
  )
}
export default App;