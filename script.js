const container = document.querySelector('#container');

let gridCreator = () => {
    container.style.padding = "10px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.flexDirection = "row";
    for(let row = 0; row < 16; row++) {
        for(let col = 0; col < 16; col++) {
            let newDiv = document.createElement('div');
            // newDiv.style.cssText = "width: 5vw; height: 6vh; border: solid 1px #000";
            newDiv.style.cssText = "border: solid 1px #000; height: 60px; flex-basis: 6%";
            newDiv.classList.add('cell');
            newDiv.addEventListener('mouseover', function() {
                newDiv.classList.add('hovered-cell');

                setTimeout(function() {
                    newDiv.classList.remove('hovered-cell');
                }, 1200);
            });
            container.appendChild(newDiv);
        }
    }

   
}

gridCreator();