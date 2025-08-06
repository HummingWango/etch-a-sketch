const container = document.querySelector(".container");

function addGrid(x, y) {
    for (let i = 0; i < x; i++){
        const col = document.createElement("div");
        col.setAttribute("class", "column");

        for (let j = 0; j < y; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "grid");

            col.appendChild(div);
        }

        container.appendChild(col);
    }
    
}

addGrid(20,14);