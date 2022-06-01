import './styles/main.css';

const tasks = [
  {
    description: 'Creating a frontend project',
    completed: false,
    index: 1,
  },
  {
    description: 'Baking cakes',
    completed: false,
    index: 2,
  },
  {
    description: 'Reading about local storage',
    completed: false,
    index: 3,
  },
  {
    description: 'Cleaning the house',
    completed: false,
    index: 4,
  },
];

tasks.forEach((task) => {
  const divEl = document.querySelector('.task-ul');
  const div = document.createElement('div');
  div.classList.add('todo-div');
  div.innerHTML = `
    <div>
      <input type="checkbox" id="${task.index}" />
      </div>
      <div>
      <p contenteditable="true">${task.description}</p>
      </div>
      <div>
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </div>
      `;
  divEl.appendChild(div);
});
