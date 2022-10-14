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

// funciton to render the coin
function renderTile(col, row) {
    if (currentPlayer == player1) {
        $columns.eq(col).children().eq(row).addClass("player1");
    } else {
        $columns.eq(col).children().eq(row).addClass("player2");
    }
}

// event listner to return which column thw user is clicking on, and to call add to board function
$columns.click(function () {
    // we need to know which column we clicked
    let clickedColumn = $columns.index(this);
    addTileToBoard(clickedColumn);
});

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
            switchPlayer();
            console.log(board);
            break;
        }
    }
}

// function addTileToBoard(column) {
//     for (let row = board.length - 1; row >= 0; row--) {
//         if (board[row][column] == 0) {
//             board[row][column] = currentPlayer;
//             renderTile(column, row);
//             switchPlayer();
//             checkForWinnerRow();
//             console.log(board);
//             break;
//         }
//     }
// }

//function to check for winners
function checkForWinnerRow() {
    let rowCounter = 0;
    for (let col = 0; col < board.length; col++) {
        for (let row = board[0].length - 1; row >= 0; row--) {
            if (board[col][row] == currentPlayer) {
                rowCounter++;
                if (rowCounter == 4) {
                    console.log(currentPlayer + " is WINNER!");
                }
            }
        }
    }
}
