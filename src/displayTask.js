const displayTask = (todo) => {
  const divEl = document.querySelector('.task-ul');
  const div = document.createElement('div');
  div.classList.add('todo-div');
  div.innerHTML = `
    <div>
      <input onclick="updateStatus(this)" type="checkbox" id="${todo.index}" />
      </div>
      <div>
      <p contenteditable="true" class="todo-para">${todo.name}</p>
      </div>
      <div>
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      <ion-icon id="delete" name="trash-outline"></ion-icon>
      
      </div>
      `;
  divEl.appendChild(div);
};

export default displayTask;
