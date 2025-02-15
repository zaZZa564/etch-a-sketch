const container = document.querySelector('#container');

function createGrid(size = 16) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for(let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let size = prompt('Choose size');
  console.log(`Size is: ${size}`);
  createGrid(size);
});

createGrid();