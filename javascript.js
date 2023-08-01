const board = document.querySelector(".board");
const labelUserSize = document.querySelector("#user-size-label");
const userSize = document.querySelector("#user-size");
const btnSubmit = document.querySelector("#submit-size");
const userColor = document.querySelector("#user-color");

function setSize() {
    const size = userSize.value;
    const squareSize = size * size;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < squareSize; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = ("white");
        div.style.border = ("1px solid gray");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = userColor.value;
        })
        board.insertAdjacentElement("beforeend", div);
    }
}

function deleteChild() {
    var child = board.lastElementChild;
    while (child) {
        board.removeChild(child);
        child = board.lastElementChild;
    }
}

setSize();

btnSubmit.addEventListener("click", () => {
    deleteChild();
    setSize();
});

userSize.addEventListener("change", () => {
    labelUserSize.textContent = `${userSize.value} X ${userSize.value}`;
})