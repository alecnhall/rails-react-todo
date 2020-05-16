class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.done,
      input: this.props.input,
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  handleCheck = (event) => {
    this.setState({
      done: event.target.done,
    });
    console.log(this.state.done);
  };

  render() {
    return (
      <div className="todo">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          done={this.state.done}
          onChange={this.handleCheck}
        />
        <input
          type="text"
          name="input"
          id="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { _id: 1, input: "Item 1", done: false },
        { _id: 2, input: "Item 2", done: false },
        { _id: 3, input: "Item 3", done: false },
        { _id: 4, input: "Item 4", done: false },
      ],
    };
  }

  render() {
    return (
      <div className="todo-list">
        <h1>todoList</h1>
        {this.state.todos.map((todo) => {
          <Todo
            key={todo._id.toString()}
            id={todo.id}
            input={todo.input}
            done={todo.done}
          />;
          console.log(this.state.todos)
        })}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
