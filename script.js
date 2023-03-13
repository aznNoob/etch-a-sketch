const defaultSize = 16;
const body = document.querySelector('body');

let mouseDown = false;

document.body.addEventListener('mousedown', function () {
    mouseDown = true;
})

document.body.addEventListener('mouseup', function () {
    mouseDown = false;
})

const createGrid = (numberRowsColumns) => {
    const container = document.createElement('div');
    container.classList.toggle('container');
    container.style.gridTemplateColumns = `repeat(${numberRowsColumns}, 1fr)`;
    body.appendChild(container);

    for (let i = 0; i < (numberRowsColumns * numberRowsColumns); i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.toggle('square');
        div.addEventListener("mouseover", function (e) {
            if (mouseDown) {
                e.target.style.backgroundColor = '#ff5e6c';
            }
        });
        container.appendChild(div);
    }
};

function createButtons () {
    const div = document.createElement('div');
    div.setAttribute("class", "buttons-container");
    body.appendChild(div);
    
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    clearBtn.classList.toggle('clear-button');
    div.appendChild(clearBtn);
    clearBtn.addEventListener("click", clearGrid)
}

function clearGrid () {
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.style.backgroundColor = 'white');
}

createGrid(defaultSize);
createButtons();


