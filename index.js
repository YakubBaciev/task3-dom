const title = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Работа с DOM';
  document.body.prepend(h1);
}
const links = () => {
  const a = document.createElement('a');
  a.textContent = 'DOM'
  a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model';
  const div = document.querySelector('#main');
  div.append(a);
}
const changesColor = (color) => {
  document.body.style.backgroundColor = color;
}
const changesText = (text) => {
  const ul = document.querySelector('#list');
  const li = document.createElement('li');
  li.textContent = text;
  ul.append(li)
}
const remove = () => {
const div = document.querySelector('#copypight');
div.remove();
}
