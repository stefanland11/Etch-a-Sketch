function createGrid(gridSize) {
    const container = document.querySelector('.grid-container');
    
    for(let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 0; j < gridSize; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach((s) => {
        s.addEventListener('mouseover', () => {
            s.style.backgroundColor = 'black';
        })
    })
}

function changeGridSize() {
    gridSize = prompt("Enter a number that doesn't exceed 100");
    while (gridSize > 100 || isNaN(gridSize)){
        gridSize = prompt("Please enter a number 100 or less.");
    }
    clearGrid();
    createGrid(gridSize);
    
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((s) => {
        s.remove();
    })

    const rows = document.querySelectorAll('.row');
    rows.forEach((r) => {
        r.remove();
    })
}

createGrid(16);

const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', () => {
    changeGridSize();
})





