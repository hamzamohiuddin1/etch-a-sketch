const container = document.querySelector('.container')
for (let i=0;i<100;i++){
    let row = document.createElement('div');
    row.classList.toggle('row');
    for (let j=0; j<100;j++){
        let cell = document.createElement('div');
        cell.classList.toggle('cell')
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hovered');
        });
        row.appendChild(cell)
    }
    container.appendChild(row);
}