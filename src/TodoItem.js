
import React from 'react'


// change this || this.state for props
//If i need something more than the event (for example the index) leave the event because we have the fat arrow funtion???
const TodoItem = (props) =>{
  const {todo, index} = props
  return ( 
//we will define the key in the parent
<li>                                                              {/* we dont put props in here because we declared it before the return*/}                
  <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} className="inputCheckBox"/>
  {/* <span style={{
    textDecoration: todo.done ? 'line-through' : 'inherit'
    }}> {todo.title}</span> */}
  {/* //explanation of double curly braces: outer says that whatever is inside is an expresion
  inner: whatever is inside is an object */}

  <span className={todo.done ? 'done' : ''}> {todo.title} </span> {/* This is a better way to put a dynamic class
  instead of an inline style we git it a class and if the task is done the class will be "done " and if not then 
  there will not be any class at all */}
  <button onClick={() => props.removeTodo(index)}>Remove Todo</button>
</li> 
  )
}

export default TodoItem










