const getBoard = (height, width=height) =>
    "0".repeat(
            height*width
        )
       .split("")
       .map(val => +val);
