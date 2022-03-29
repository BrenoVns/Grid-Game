const squares = document.querySelectorAll('.square');
const btn = document.querySelector('button');

let squaresSelected = 0;
let firstSelection;
let secondSelection;
let firstSelectionId;
let secondSelectionId;

function changeSquares() {
    if (!firstSelection || !secondSelection) {
        return;
    }
    firstSelection.className = 'square';
    firstSelection.className = `square square--${secondSelectionId}`;
    firstSelection.id = secondSelectionId;
    secondSelection.className = 'square';
    secondSelection.className = `square square--${firstSelectionId}`;
    secondSelection.id = firstSelectionId;
    squaresSelected = 0;
    firstSelection = null;
    firstSelectionId = null;
    secondSelection = null;
    secondSelectionId = null;
    btn.classList.toggle('btn-disabled');
}

function selectSquare(square) {
    if (squaresSelected === 2) {
        if (square.classList.contains('selected')) {
            if (square.id == firstSelectionId) {
                firstSelection = null;
                firstSelectionId = null;
            }
            if (square.id == secondSelectionId) {
                secondSelection = null;
                secondSelectionId = null;
            }
            square.classList.toggle('selected');
            btn.classList.toggle('btn-disabled');
            squaresSelected--;
            return;
        }
        return;
    }

    if (square.classList.contains('selected')) {
        if (squaresSelected === 1) {
            firstSelection = null;
            firstSelectionId = null;
            square.classList.toggle('selected');
            squaresSelected--;
            return;
        }
        secondSelection = null;
        secondSelectionId = null;
        square.classList.toggle('selected');
        squaresSelected--;
        return;
    }

    if (!firstSelection) {
        firstSelection = square;
        firstSelectionId = square.id;
    } else {
        secondSelection = square;
        secondSelectionId = square.id;
        btn.classList.toggle('btn-disabled');
    }

    square.classList.toggle('selected');
    squaresSelected++;
}

squares.forEach((square) => {
    square.addEventListener('click', () => {
        selectSquare(square);
    });
});

btn.addEventListener('click', () => {
    if (!firstSelection && !secondSelection) {
        return;
    }
    changeSquares();
});
