import { storageInfo } from './addandremove.js';

export default function cleartasksDone(e) {
  const store = [];
  let tempStore = storageInfo();
  tempStore.forEach((data) => {
    if (data.completed === false) {
      store.push(data);
    }
  });
  localStorage.setItem('TasksInfo', JSON.stringify(store));
  tempStore = storageInfo();
  let Q = 1;
  for (let i = 0; i < tempStore.length; i += 1) {
    tempStore[i].id = Q;
    Q += 1;
  }

  const listHolder = e.target.parentElement.children[3].children;

  for (let i = 0; i < listHolder.length; i += 1) {
    const innerlistHolder = e.target.parentElement.children[3].children[i].children[0].children[0];
    if (innerlistHolder.checked === true) {
      innerlistHolder.parentElement.parentElement.remove();
    }
  }

  localStorage.setItem('TasksInfo', JSON.stringify(tempStore));
  tempStore = storageInfo();

  for (let i = 0; i < tempStore.length; i += 1) {
    listHolder[i].id = tempStore[i].id;
    listHolder[i].children[0].children[0].id = tempStore[i].id;
    listHolder[i].children[0].children[1].id = tempStore[i].id;
  }
}