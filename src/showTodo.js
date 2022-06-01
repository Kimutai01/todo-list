import todos from './todos.js';
import displayTask from './displayTask.js';
const showTodo = () => {
  todos.forEach((todo) => {
    displayTask(todo);
  });
};

export default showTodo;
