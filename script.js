let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let newGame = document.querySelector(".newgame");
let drawCounter = 0;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let turnX = true;
let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner.innerText = `The Winner is ${pos1}`;
                document.querySelector("div").classList.remove("hide");
                gameover();
            }
        }
    }
};
newGame.addEventListener("click", () => {
    document.querySelector("div").classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        drawCounter = 0;
    }
})
const gameover = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
        drawCounter++;
        if (drawCounter === 9) {
            winner.innerText = `The Game is Draw`;
            document.querySelector("div").classList.remove("hide");
        }
    })
}

reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        drawCounter = 0;
    }
});

