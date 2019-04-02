import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Header  from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos   from './components/Todos';
import About   from './components/pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount(){
    //axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    axios.get('http://localhost:4000/ocsa_todos')
      .then(res => this.setState({todos: res.data}));
  }

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo._id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    //alert("id = " + id);
    //this.setState({
    //  todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //});

    axios.post(`http://localhost:4000/ocsa_todos/remove/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo._id !== id)]}));

  }

  addTodo = (userId, description) => {
    //const newTodo = {
    //  id: 4,
    //  title:title,
    //  completed:false
    //}

    //this.setState({
    //  todos: [...this.state.todos, newTodo]
    //});
    //alert("description = " + description);

    axios.post('http://localhost:4000/ocsa_todos/add',{userId:"tpartcal@cox.net",description:description,completed:false})
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
  
  
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} 
                  toggleComplete={this.toggleComplete}
                  delTodo={this.delTodo} 
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
