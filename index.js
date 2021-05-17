const tables = [
    {
        id: 'loBk97GJ7HJgJG',
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
var initialXResize;
var initialYResize;

const onMouseDown = (event) =>{
    event.target.addEventListener('mousemove', onMouseMove);
    initialX = event.clientX - event.target.offsetLeft;
    initialY = event.clientY - event.target.offsetTop;
}

const onMouseMove = (event) => {
    let xOffset = event.clientX - initialX;
    let yOffset = event.clientY - initialY;
    event.target.style.left = `${xOffset}px`;
    event.target.style.top = `${yOffset}px`;
}

const onMouseUp = (event) =>{
    event.target.removeEventListener('mousemove', onMouseMove);
}

const onMouseDownResize = (event) => {
    event.currentTarget.addEventListener('mousemove', onMouseMoveResize);
    initialXResize = event.clientX - event.currentTarget.offsetLeft;
    initialYResize = event.clientY - event.currentTarget.offsetTop;
}

const onMouseMoveResize = (event) => {
    let xOffset = event.pageX - event.currentTarget.getBoundingClientRect().left;
    let yOffset = event.pageY - event.currentTarget.getBoundingClientRect().top;
    event.currentTarget.parentElement.style.width = `${event.currentTarget.parentElement.offsetWidth + xOffset}px`;
    event.currentTarget.parentElement.style.height = `${event.currentTarget.parentElement.offsetHeight + yOffset}px`;
}

const onMouseUpResize = (event) => {
    event.currentTarget.removeEventListener('mousemove', onMouseMoveResize);
}

const changeForm = (event) => {
    event.currentTarget
}

const renderTable = () => {
    return `<div class="table">
            <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button>
        </div>`;
}

{/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
            </div> */}

var grid = document.getElementById('grid');

for (const table of tables) {
    console.log(renderTable());
    grid.innerHTML += renderTable();
}

document.querySelectorAll('.table').forEach((tableElement) => {
    tableElement.addEventListener('dblclick', changeForm);
    tableElement.addEventListener('mousedown', onMouseDown);
    tableElement.addEventListener('mouseup', onMouseUp);
    tableElement.addEventListener('mouseout', () => tableElement.removeEventListener('mousemove', onMouseMove));
    tableElement.lastElementChild.addEventListener('mousedown', onMouseDownResize);
    tableElement.lastElementChild.addEventListener('mouseup', onMouseUpResize);
    // tableElement.lastElementChild.addEventListener('mouseout', () => tableElement.lastElementChild.removeEventListener('mousemove', onMouseMoveResize));
});

