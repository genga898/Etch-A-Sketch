const container = document.querySelector(".container");
const gridSlots = (16*16);

//Creating multiple divs
for (let i = 0; i < gridSlots; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    container.appendChild(slot);
    slot.style.backgroundColor = "white";
    slot.style.margin = "0.5px";
    slot.style.borderRadius = "2px";
    document.addEventListener("mouseover", function() {
        slot.style.backgroundColor = "blue";
    })
    document.addEventListener("mouseout", function() {
        slot.style.backgroundColor = "white"; 
        })
}
