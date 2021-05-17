const tables = [
    {
        id: 'loBk97GJ7HJgJG',
        number: '23',
        shape: 'circle',
        width: 20,
        height: 20,
        top: 50,
        left: 50
    },
    // {
    //     id: 'loBk97GJ7HJgJG',
    //     shape: 'circle',
    //     width: 20,
    //     height: 20,
    //     top: 50,
    //     left: 50
    // },
    // {
    //     id: 'loBk97GJ7HJgJG',
    //     shape: 'circle',
    //     width: 20,
    //     height: 20,
    //     top: 50,
    //     left: 50
    // }
];

var initialX;
var initialY;
var initialWidth;
var initialHeigth;
var initialXResize;
var initialYResize;

function onMouseDown(event) {
    event.target.addEventListener('mousemove', onMouseMove);
    initialX = event.clientX - event.target.offsetLeft;
    initialY = event.clientY - event.target.offsetTop;
}

function onMouseMove(event) {
    let xOffset = event.clientX - initialX;
    let yOffset = event.clientY - initialY;
    event.target.style.left = `${xOffset}px`;
    event.target.style.top = `${yOffset}px`;
}

function onMouseUp(event) {
    event.target.removeEventListener('mousemove', onMouseMove);
}

function onMouseDownResize(event) {
    initialXResize = event.clientX;
    initialYResize = event.clientY;
    initialWidth = event.currentTarget.parentElement.offsetWidth; //event.clientX - event.currentTarget.offsetLeft;
    initialHeigth = event.currentTarget.parentElement.offsetHeight; //event.clientY - event.currentTarget.offsetTop;
    event.currentTarget.addEventListener('mousemove', onMouseMoveResize);
}

function onMouseMoveResize (event) {    
    let xOffset = initialWidth + event.clientX - initialXResize;
    let yOffset = initialHeigth + event.clientY - initialYResize;
    event.currentTarget.parentElement.style.width = `${xOffset}px`;
    event.currentTarget.parentElement.style.height = `${yOffset}px`;
}

function onMouseUpResize (event) {
    event.currentTarget.removeEventListener('mousemove', onMouseMoveResize);
}

function changeForm(event) {
    let br = event.currentTarget.style.borderRadius; 
    if (br.length < 5) {
        event.currentTarget.style.borderRadius = `10000000px`;
    } else {
        event.currentTarget.style.borderRadius = `5px`;
    }
}

const renderTable = () => {
    let tableElement = document.createElement('div');
    tableElement.innerHTML = `<div class="table">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </button>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
        </div>
        </div>`;
    tableElement = tableElement.firstChild;
    tableElement.addEventListener('dblclick', changeForm);
    tableElement.addEventListener('mousedown', onMouseDown);
    tableElement.addEventListener('mouseup', onMouseUp);
    tableElement.addEventListener('mouseout', () => tableElement.removeEventListener('mousemove', onMouseMove));
    tableElement.lastElementChild.addEventListener('mousedown', onMouseDownResize);
    tableElement.lastElementChild.addEventListener('mouseup', onMouseUpResize);
    // tableElement.lastElementChild.addEventListener('mouseout', () => tableElement.lastElementChild.removeEventListener('mousemove', onMouseMoveResize));
    return tableElement;
}

var grid = document.getElementById('grid');

for (const table of tables) {
    let tableElement = renderTable();    
    grid.appendChild(tableElement);
}

