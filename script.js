let gridSize = 25;

const container = document.querySelector('.board-grid');


/* CREATE GRID*/
function createGrid() {
    let squareSize = 100 / gridSize;
    for(let i=0; i<(gridSize ** 2); i+=1){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
        cell.style.width = squareSize + "%";
        cell.style.height = squareSize + "%";
    }    
}


createGrid();

function deleteGrid(){
    /*container.innerHTML = '';*/
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(gridSize);
    let box = document.querySelectorAll('.grid-cell');
    box.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            if(penColor=='rainbow') {
                e.target.style.backgroundColor = rainbow();
            }else{
            e.target.style.backgroundColor = penColor;
            }
        })
    })
};

/*COLORING add only works while mouse is clicked(not just hovered)*/
const square = document.querySelectorAll('.grid-cell');
  square.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        if(penColor == 'rainbow'){
            e.target.style.backgroundColor = rainbow();
        }else {
        e.target.style.backgroundColor = penColor;
        }
    })
    });

/* CHANGE GRID SIZE*/
const gridPick = document.querySelector('#grid');
gridPick.addEventListener('change', () => {
    gridSize = gridPick.value;
    deleteGrid();
    /*createGrid(gridSize);
    square.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            e.target.style.backgroundColor = penColor;
        })
    })*/
});

/* PEN COLOR SELECT*/
let penColor = '#000000';
const colorPicker = document.querySelector('#color-select');
colorPicker.addEventListener('input', (e) => {
    penColor = e.target.value;
});

/*const rainbow = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);*/
function rainbow() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
  }

const randomColor= document.querySelector('#bow');
randomColor.addEventListener('click', () => {
    penColor = 'rainbow';
});



/* BG COLOR SELECTOR*/
    const bgColor = document.querySelector('#bg-select');
    bgColor.addEventListener('input', (e) => {
        container.classList.remove('crazy');
        container.style.backgroundColor = e.target.value;
    });



/*add active css - so button changes style when clicked*/
    const erase = document.querySelector('.eraser');
    erase.addEventListener('click', (e) => {
        penColor = 'transparent';
    });

    function restart(){
        gridSize = 25;
        deleteGrid();
        container.style.backgroundColor = '#C53030';
        penColor = 'black';
        container.classList.remove('crazy');
        square.forEach((item) => {
            item.addEventListener('mouseover', (e) => {
                if(penColor == 'rainbow'){
                    e.target.style.backgroundColor = rainbow();
                }else {
                e.target.style.backgroundColor = penColor;
                }
            })
            });
    }


    /*Rainbow mode*/
const psych = document.querySelector('#crazy');
psych.addEventListener('click', () => {
    document.querySelector(".board-grid").style.backgroundColor = 'transparent';
    container.classList.add('crazy');
});
    
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', restart);