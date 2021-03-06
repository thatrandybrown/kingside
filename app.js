const getBoard = (height, width=height) =>
    "0".repeat(
            height*width
        )
       .split("")
       .map(val => +val);

const getSquare = (height, width=height, board=getBoard(height, width)) =>
    (x, y) =>
        board[y * width + x];

const setSquare = (height, width=height, board=getBoard(height, width)) =>
    (x, y, item) =>
        board[y * width + x] = item;
