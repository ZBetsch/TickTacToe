function getWinningLines(gridsize){
    const lines=[];
    
    for(let row = 0 ; row < gridsize; row++){
        const rowLine = [];
        for (let col = 0; col < gridsize; col++){
            rowLine.push(row * gridsize + col)
        }
        lines.push(rowLine);
    }
    
    for(let col = 0 ; col < gridsize; col++){
        const colLine = [];
        for (let row = 0; row < gridsize; row++){
            colLine.push(row * gridsize + col)
        }
        lines.push(colLine);
    }

    const leftDiag = [];
    for (let i = 0; i < gridsize; i++){
        leftDiag.push(i * gridsize + i);
    }
    lines.push(leftDiag);

    const rightDiag = [];
    for (let i = 0; i < gridsize; i++){
        rightDiag.push(i * gridsize + (gridsize - 1 - i));
    }
    lines.push(rightDiag);
    // Debugging line
    // console.log(lines);
    return lines;
}

export function checkWinningLines(gridsize, squares){
    const lines = getWinningLines(gridsize);
    for (const line of lines) {
        const lineValues = line.map((index) => squares[index] );
        if (lineValues.every((val)=> val && val === lineValues[0])){
            return lineValues[0]
        }
    }
}