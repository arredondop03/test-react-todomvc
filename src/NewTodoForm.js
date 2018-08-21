//stateless functional component
import React from 'react'; //When creating a component

//anywhere where we wanted to access something from "this"
//we will do it from props. So replace whatever says this with props
//since we need functions in here that were declared in app.js we will need
//some sort of access to it so in app js we do next to the NewTodoForm tag the name of the 
//function equal to "this" over there '.' the name of the function that we need here
//its kind of taking the grabbing the 'this' over there and the actual information overe there 
//and pass it here
///////////// Done use event - use prop and bind it in App.js
const NewTodoForm = (props) =>{
  return(
    <form onSubmit={props.formSubmitted}> {/*Here is where we call the fucntion when the form is submitted*/}
        <label htmlFor="newTodo">New Todo </label> 
        {/* we call is htmlFor so it know that is not a for loop */}
        <input onChange={props.newTodoChanged} id= "newTodo" name="newTodo" value={props.newTodo}/> 
        {/* all self closing tags have to have the "/" */}
        <button type="submit">Add Todo</button>
      </form>
  )
} //render function that gets props and returns the form

export default NewTodoForm