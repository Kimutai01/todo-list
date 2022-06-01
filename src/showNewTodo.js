import todos from './todos.js';
import displayTask from './displayTask.js';
const showNewTodo = () => {
  todos.forEach((todo) => {
    if (todo.index >= todos.length) {
      displayTask(todo);
    }
  });
};

export default showNewTodo;
