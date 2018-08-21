import React, { Component } from 'react'; //When creating a component
//ALWAYS import react

import './App.css';

class App extends Component {
  constructor(){
    super() //this calls the constructor of the component
            //we are extending
            //extending means getting all the fuctionality in this class
            //state= properties in the component
    this.state ={
      message: 'Hello Coding Garden!!',
      newTodo: '', //here is where the information that the user is inputing will be hold
      todos: [{
        title: 'Learn React',
        done: false
      },
    {
      title: 'Learn Jsx',
      done: false
    }]

    } //here is where all the data of our application is going to go
  }

  //creating the form submitted form
  formSubmitted(event){
    //since the form is trying to send the information somewhere
    //we will prevent this by taking out the default
    event.preventDefault()
    // console.log(this.state.newTodo)
    this.setState({ //READ more on this because I didnt quite understand. Why do we want a copy and then
      //define the new todo?
      //DONOT modify the setState
      newTodo: '', //this is the value we are going to give to the input every time it renders
      //to make the input clear out every time we submit the form
      //check input value
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }] //... is to make a copy of what we are submiting

    })

  }

  //method to update the user's input live 
  newTodoChanged(event){
    // console.log(event.target.value)
    //here we pass in the objects that will be updated
    this.setState({ //this "this" is not the this of our component
    //so we have to use a fat arrow function inline
    //the fat arrow funtion does not bind the value of 'this'
    // READ "React Binding Patterns: 5 Approaches for Handling `this`"
      //wont work if we do up to here |
       newTodo: event.target.value
    })
  }

  toggleTodoDone(event, index){ //READ more about this
    // console.log(event.target.checked) 
    const todos = [...this.state.todos]; //copy of the whole array

    todos[index] = {...todos[index], //this can also be Object.assign
    done: event.target.checked} //todo at that index will be this copy inside of the array
     //update value at that index
    //  console.log(todos)
     this.setState({
       todos //it should see the latest value 
      })

  }

  removeTodo(index){  //when updating state we need to make copies of things,
                      //we cannot just update them
    const todos = [...this.state.todos] //copy of the whole array
    todos.splice(index, 1)

     this.setState({
       todos //it should see the latest value 
      })
  }

  allDone(){
    const todos = this.state.todos.map(todo => {
      return{
        title: todo.title, //can also do ...todo
        done:true
      }
    })

    this.setState({
      todos
    })

  }


  render() {
    return (
      <div className="App"> 
      {/* This className refers to the class in html and has the NAme at the end
      to differ from the JS class in line 6 */}
      <h3>{this.state.message}</h3>
      <form onSubmit={(event) => this.formSubmitted(event)}> {/*Here is where we call the fucntion when the form is submitted*/}
        <label htmlFor="newTodo">New Todo </label> 
        {/* we call is htmlFor so it know that is not a for loop */}
        <input onChange={(event) => this.newTodoChanged(event)} id= "newTodo" name="newTodo" value={this.state.newTodo}/> 
        {/* all self closing tags have to have the "/" */}
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={() => this.allDone()} >All done</button>
      <ul>

        {/* //the index is to know which checkbox is being checked */}
    
        {this.state.todos.map((todo, index) => { //map the array from array of object to array of jsx
          return <li key={todo.title}>
          <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} className="inputCheckBox"/>
          {/* <span style={{
            textDecoration: todo.done ? 'line-through' : 'inherit'
            }}> {todo.title}</span> */}
          {/* //explanation of double curly braces: outer says that whatever is inside is an expresion
          inner: whatever is inside is an object */}

          <span className={todo.done ? 'done' : ''}> {todo.title} </span> {/* This is a better way to put a dynamic class
          instead of an inline style we git it a class and if the task is done the class will be "done " and if not then 
          there will not be any class at all */}
          <button onClick={() => this.removeTodo(index)}>Remove Todo</button>
          </li> //READ keys in lis react
        })}
      </ul>
       </div>
    );
  }
}

export default App;






//CHECK minute 41 to commit to github
//summary hour 1