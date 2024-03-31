const container = document.querySelector(".container");
const restartBtn = document.querySelector('#restart')

const GRID_SIZE = 16 * 16

const setGrid = (size) => {
    container.innerHTML = '';
    const gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.height = `${800 / size}px`;
        newDiv.style.width = `${800 / size}px`;
        console.log(newDiv.style.height)
        newDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        container.append(newDiv);
    }
};

restartBtn.addEventListener('click', () => {
    let size = getSize()
    if (!size) {
        size = 16
    }
    setGrid(size);
});

function getSize() {
    const size = prompt('What dimensions would you like?');

    if (size > 100) {
        getSize();
    }

    return size;
};

setGrid(16);