const container = document.querySelector("#container");
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.background = "white";
    div.style.width = "50px";
    div.style.height = "50px";
    div.addEventListener('mouseover', () => {div.style.background = "black";})
    container.appendChild(div);
}