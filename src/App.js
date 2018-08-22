import React, { Component } from 'react'; //When creating a component
//ALWAYS import react
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'


import './styles/App.css';

class App extends Component {
  constructor(){
    super() //this calls the constructor of the component
            //we are extending
            //extending means getting all the fuctionality in this class
            //state= properties in the component
    this.state ={
      message: 'Todo',
      newTodo: '', //here is where the information that the user is inputing will be hold
      
      todos: [{
        title: 'Learn React',
        done: false
      },
    {
      title: 'Learn Jsx',
      done: false
    }],
    


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
      <div className="wholeTodo">
      <div className="app"> 
      {/* This className refers to the class in html and has the NAme at the end
      to differ from the JS class in line 6 */}
      <p className="appTitle">{this.state.message}</p>
      
        <NewTodoForm 
          newTodo ={this.state.newTodo}
          formSubmitted ={this.formSubmitted.bind(this)} //this is so when we call  this function "this" refers to app.js this 
          //so setState actually exists
          newTodoChanged = {this.newTodoChanged.bind(this)}
          
          />
          <div className="buttonAndItems">
          { this.state.todos.length > 0 ? 
           <button className="allDoneButton textFont" onClick={() => this.allDone()} >All done</button> : 
           null }
      
      <TodoList 
      todos = {this.state.todos} 
      toggleTodoDone = {this.toggleTodoDone.bind(this)}
      removeTodo = {this.removeTodo.bind(this)}
      
      />
      </div>

            <strong className="textFont">{this.state.todos.length} {this.state.todos.length === 1 ? ' task left' : ' tasks left'}</strong>
       </div>
       </div>
    );
  }
}

export default App;






//CHECK minute 41 to commit to github
//summary hour 1