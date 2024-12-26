document.addEventListener('DOMContentLoaded', () => {
    generateHeader();
    generateContainer();
})

function generateContainer() {
    let container = document.createElement('div');
    container.style.display = "flex";
    container.style.width = "100vw";
    container.style.height = "90vh";
    document.body.appendChild(container);
    generatediv1(container);
    generatediv2(container);
}

function generatediv1(container) {
    let div1 = document.createElement('div');
    div1.style.backgroundColor = "black";
    div1.style.width = "30%";
    div1.style.height = "100%";
    container.appendChild(div1);
}

function generatediv2(container) {
    let div2 = document.createElement('div');
    div2.style.backgroundColor = "red";
    div2.style.width = "70%";
    div2.style.height = "100%";
    container.appendChild(div2);
}
function generateHeader() {
    let header = document.createElement('header');
    header.textContent = "Welcome !";
    header.style.fontSize = "30px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.height = "10vh";
    document.body.appendChild(header);
}