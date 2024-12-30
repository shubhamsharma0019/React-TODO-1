
import { useState } from 'react'
import './App.css'

function App() {
 const [todos,setTodos] = useState([
  {
    title:"todo 1",
    description:"todoooo 1",
    completed:false
  },
  {
    title:"todo 3",
    description:"todoooo 3",
    completed:false
  },
  {
    title:"todo 4",
    description:"todoooo 4",
    completed:false
  }
 ]);
 function onClickHandler(){
  setTodos([...todos,{
    title:"erfgfdfgvf",
    description:"rgredfsef"
  }])
 }
  return (
    <>
    <button onClick={onClickHandler}>Add todo</button>
    {todos.map(function(todo){
       return <Todo title={todo.title} description={todo.description}/>
    })}
    </>
  )
}
function Todo(todos){
  return <div>
    <h1>{todos.title}</h1>
    <h4>{todos.description}</h4>
  </div>
}


export default App
