// variables
const $columns = $(".column");

const player1 = "x";
const player2 = "y";
let currentPlayer = player1;

const board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

// function to switch players
function switchPlayer() {
    if (currentPlayer == player2) {
        currentPlayer = player1;
    } else if (currentPlayer == player1) {
        currentPlayer = player2;
    }
}

//function to check for the empty slot in board and add a coin for the respective player
function addTileToBoard(column) {
    for (let row = board[column].length - 1; row >= 0; row--) {
        if (board[column][row] == 0) {
            board[column][row] = currentPlayer;
            renderTile(column, row);
            checkForWinnerRow();
            checkForWinnerCol();
            switchPlayer();
            console.log(board);
            break;
        }
    }
}

// event listner to return which column thw user is clicking on, and to call add to board function
$columns.click(function () {
    // we need to know which column we clicked
    addTileToBoard($columns.index(this));
});

// funciton to render the coin
function renderTile(col, row) {
    if (currentPlayer == player1) {
        $columns.eq(col).children().eq(row).addClass("player1");
        console.log(col + "+" + row);
        console.log("test");
    } else if (currentPlayer == player2) {
        $columns.eq(col).children().eq(row).addClass("player2");
    }
}

//function to check for winners in rows
function checkForWinnerRow() {
    let rowCounter = 0;
    for (let row = board[0].length - 1; row >= 0; row--) {
        for (let col = 0; col < board.length; col++) {
            if (board[col][row] == currentPlayer) {
                rowCounter++;
            } else if (board[col][row] == 0) {
                rowCounter = 0;
            }
            console.log(rowCounter);
            if (rowCounter == 4) {
                console.log(currentPlayer + " is WINNER!");
            }
        }
    }
}

//function to check for winners in col
function checkForWinnerCol() {
    let colCounter = 0;
    for (let col = 0; col < board.length; col++) {
        for (let row = board[0].length - 1; row >= 0; row--) {
            if (board[col][row] == currentPlayer) {
                colCounter++;
            } else if (board[col][row] == 0) {
                colCounter = 0;
            }
            console.log(colCounter);
            if (colCounter == 4) {
                console.log(currentPlayer + " is WINNER!");
            }
        }
    }
}
