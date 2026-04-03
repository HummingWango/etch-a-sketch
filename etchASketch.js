const container = document.querySelector(".container");

function addGrid(x, y) {
    for (let i = 0; i < x; i++){
        const col = document.createElement("div");
        col.setAttribute("class", "column");

        for (let j = 0; j < y; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "grid");
            col.appendChild(div);

            div.addEventListener("mouseenter", (e) => {
                e.target.setAttribute("id", "mouseon");
            });

        }

        container.appendChild(col);
    }

    
}
addGrid(20,20);
const button = document.querySelector("button")
button.addEventListener("click", () => {
    let side = prompt("How many pixels wide is your canvas?");
    if (side <= 100 & side > 0) {
        container.replaceChildren();
        addGrid(side,side);
    } else {
        alert("Invalid Value")
    }
    
});

