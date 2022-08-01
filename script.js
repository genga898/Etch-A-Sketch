const container = document.querySelector(".container");
const gridSlots = 16*16;

//Creating multiple divs
for (let i = 0; i < gridSlots; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    container.appendChild(slot);
}
