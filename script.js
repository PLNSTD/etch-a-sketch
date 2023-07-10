const gridContainer = document.querySelector('#grid-container');
const resizeValue = document.querySelector('#resize-value');
const resizeButton = document.querySelector('#resize-button');
let createGrid = (sizeM) => {
    const fillPercentage = Math.floor(100 / sizeM);
    console.log(fillPercentage);
    for(let row = 0; row < sizeM; row++) {
        for(let col = 0; col < sizeM; col++) {
            let newDiv = document.createElement('div');
            newDiv.style.cssText = `background-color: #fffcfb; flex-basis: ${fillPercentage}%`;
            newDiv.classList.add('cell');
            newDiv.addEventListener('mouseover', function() {
                newDiv.classList.add('hovered-cell');

                setTimeout(function() {
                    newDiv.classList.remove('hovered-cell');
                }, 1200);
            });
            gridContainer.appendChild(newDiv);
        }
    }
}

resizeButton.addEventListener('click', function() {
    let sizeM = resizeValue.value;
    if(sizeM > 0 && sizeM <= 100) {
        gridContainer.textContent = '';
        createGrid(sizeM);
    }
    else
        alert('Insert a value (1-100)');
});

createGrid(16);