const container = document.querySelector('#container');

function createGrid(size = 16) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for(let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);

    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = 'var(--hover-color)';
      div.style.border = '1px solid var(--hover-color)';
    });
  }
}

const sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', () => {
  let size = prompt('Choose size');
  console.log(`Size is: ${size}`);
  createGrid(size);
});

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'white';
    item.style.border = 'solid 1px #ddd';
  });
});

createGrid();