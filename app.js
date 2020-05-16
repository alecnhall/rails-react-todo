var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo(props) {
    _classCallCheck(this, Todo);

    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        input: event.target.value
      });
      console.log(_this.state.input);
    };

    _this.handleCheck = function (event) {
      _this.setState({
        done: event.target.done
      });
      console.log(_this.state.done);
    };

    _this.state = {
      done: _this.props.done,
      input: _this.props.input
    };
    return _this;
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "todo" },
        React.createElement("input", {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          done: this.state.done,
          onChange: this.handleCheck
        }),
        React.createElement("input", {
          type: "text",
          name: "input",
          id: "input",
          value: this.state.input,
          onChange: this.handleChange
        })
      );
    }
  }]);

  return Todo;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this2 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this2.state = {
      todos: [{ _id: 1, input: "Item 1", done: false }, { _id: 2, input: "Item 2", done: false }, { _id: 3, input: "Item 3", done: false }, { _id: 4, input: "Item 4", done: false }]
    };
    return _this2;
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "todo-list" },
        React.createElement(
          "h1",
          null,
          "todoList"
        ),
        this.state.todos.map(function (todo) {
          React.createElement(Todo, {
            key: todo._id.toString(),
            id: todo.id,
            input: todo.input,
            done: todo.done
          });
          console.log(_this3.state.todos);
        })
      );
    }
  }]);

  return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), document.getElementById("root"));