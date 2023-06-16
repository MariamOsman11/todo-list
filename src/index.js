import './style.css';

const listContainer = document.querySelector('.list-Container');

const tasklist = [
  {
    description: 'drink water',
    completed: 'true',
    index: 1,
  },
  {
    description: 'go to hospital',
    completed: 'false',
    index: 2,
  },
  {
    description: 'eat healthy',
    completed: 'true',
    index: 3,
  },
  {
    description: 'do you like strawberries',
    completed: 'false',
    index: 4,
  },
  {
    description: 'Dont forget to meditate ',
    completed: 'true',
    index: 5,
  },
  
];

const displayTaskPage = () => {
  tasklist.forEach((list) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="list">
        <input type="checkbox" name="" id="">
        <p>${list.description}</p>
        </div>

        <div class="trash"><i class="fa-solid fa-ellipsis"></i></div>
        
        `;
    listContainer.appendChild(listItem);
  });
};

displayTaskPage();