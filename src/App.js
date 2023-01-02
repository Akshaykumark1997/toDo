import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setToDos] = useState([]);
  const [toDo,setTodo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            console.log(obj);
            if(obj.text ===''){
              return null;
            }else{
            return(
          <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id === obj.id){
                    obj.status = e.target.checked
                  }
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={()=>{
               return setToDos(toDos.filter(obj3=> obj3.id !== obj.id))
              }} className="fas fa-times"></i>
            </div>
          </div>
            )
            }
          })
      }
      </div>
      <div>
       <p>Active Tasks</p>
      </div>
    </div>
  );
}

export default App;
