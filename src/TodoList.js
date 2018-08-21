import React from 'react'
import TodoItem from './TodoItem'



// change this || this.state for props
//If i need something more than the event (for example the index) leave the event because we have the fat arrow funtion???
const TodoList = (props) =>{
  return (
    <ul>

{/* //the index is to know which checkbox is being checked */}

{props.todos.map((todo, index) => { //map the array from array of object to array of jsx
  return (
    < TodoItem 
    key = {index}  //here is where we actually define the key for the item
    index = {index}
    toggleTodoDone = {props.toggleTodoDone}
    removeTodo = {props.removeTodo} //here is not this.state because we already did that in app.js?
    todo = {todo}  //Why not  this.state.todo?
    /> 
  )//READ keys in lis react
})}
</ul>  
  )
}

export default TodoList



