const container = document.querySelector(".container");
const grid = 16*16;
const inputBtn = document.querySelector("#button");
inputBtn.addEventListener("click", () => {
    let answer = prompt("Enter the grid size you want to display: ");
    if (!(answer > 0 && answer < 100)) {
        alert("Please enter a number between 1 and 100.");
    }else if (answer > 0 && answer < 100) {
        let gridSize = answer**2;
        const slots =Math.sqrt(gridSize);
        const columnSize = 720/slots;
        const rowSize = 720/slots;
        createDiv(gridSize);
        container.style.setProperty("grid-template-columns", `repeat(${slots}, ${columnSize}px)`);
        container.style.setProperty("grid-template-rows", `repeat(${slots}, ${rowSize}px)`);
    }

    });


//Creating multiple divs
function createDiv(gridSize){
    for(let i = 0; i < gridSize; i++) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        container.appendChild(slot);
        slot.style.backgroundColor = "white";
        slot.style.margin = "0.5px";
        slot.style.borderRadius = "2px";
        slot.addEventListener("mouseover", function(){
            slot.style.backgroundColor = "grey";
        });
    }
}
createDiv(grid);