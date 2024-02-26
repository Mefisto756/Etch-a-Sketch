function deleteGrid() {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function resetGrid() {
    const container = document.querySelector("#container");
    const children = container.querySelectorAll("#container div");
    children.forEach(element => {
        element.style.background = "white";
        });
    
}

function getRandomColor() {
    // #000000 - #fffff
        array16 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let result = '#';
        
        for(let i = 0; i < 6; i++) {
            result += array16[Math.round(Math.random()*100) % 16];
        }
        console.log(result);
        return result;
    }

function generateGrid() {
    deleteGrid();
    const size = document.querySelector("#grid").value;
    if (size > 100) {
        alert("Size 100 is maximum!!")
    } else {
        const container = document.querySelector("#container");
        let subDivSize = 800 / size;
        for(let i = 0; i < size **2; i++) {
            const div = document.createElement('div');
            div.style.background = "white";
            div.style.width = subDivSize + 'px';
            div.style.height = subDivSize + 'px';
            div.addEventListener('mouseover', () => {div.style.background = getRandomColor();})
            container.appendChild(div);
        }
    }
}

const apply = document.querySelector("#apply");
apply.addEventListener('click', () => generateGrid());
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => resetGrid());