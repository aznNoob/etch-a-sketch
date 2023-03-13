


const createGrid = (numberRowsColumns) => {
    for (let i = 0; i < (numberRowsColumns * numberRowsColumns); i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.toggle('square');
        container.appendChild(div);
        // container.style.gridTemplateRows = `repeat(${numberRowsColumns}, 30px[col - start])`
        container.style.gridTemplateColumns = `repeat(${numberRowsColumns}, 1fr)`;
    }
};





const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.toggle('container');

body.appendChild(container);

createGrid(16);

const square = document.querySelectorAll('.square');
square.forEach(square => square.addEventListener("click", function (e) {
    e.target.style.backgroundColor = '#ff5e6c';
})
)