export const createEmptyGrid = (rowCount, colCount) => {
    const rows = []
    for (let i = 0; i < rowCount; i++) {
        const cols = []
        for (let j = 0; j < colCount; j++) {
            cols.push(0);
        }
        rows.push(cols);
    }
    return rows
}

export const createRandomGrid = (rowCount, colCount) => {
    const rows = []
    for (let i = 0; i < rowCount; i++) {
        const cols = []
        for (let j = 0; j < colCount; j++) {
            cols.push(Math.random() > 0.2 ? 0 : 1);
        }
        rows.push(cols);
    }
    return rows
}

export const createPulsarGrid = (rowCount, colCount) => {
    const middleY = Math.floor(rowCount / 2);
    const middleX = Math.floor(colCount / 2);
    const rows = []
    for (let i = 0; i < rowCount; i++) {
        const cols = []
        for (let j = 0; j < colCount; j++) {
            cols.push(0);
        }
        rows.push(cols);
    }
    rows[middleY + 1][middleX + 2] = 1;
    rows[middleY + 1][middleX + 3] = 1;
    rows[middleY + 1][middleX + 4] = 1;
    rows[middleY + 1][middleX - 2] = 1;
    rows[middleY + 1][middleX - 3] = 1;
    rows[middleY + 1][middleX - 4] = 1;

    rows[middleY - 1][middleX + 2] = 1;
    rows[middleY - 1][middleX + 3] = 1;
    rows[middleY - 1][middleX + 4] = 1;
    rows[middleY - 1][middleX - 2] = 1;
    rows[middleY - 1][middleX - 3] = 1;
    rows[middleY - 1][middleX - 4] = 1;

    rows[middleY + 2][middleX + 1] = 1;
    rows[middleY + 3][middleX + 1] = 1;
    rows[middleY + 4][middleX + 1] = 1;
    rows[middleY - 2][middleX + 1] = 1;
    rows[middleY - 3][middleX + 1] = 1;
    rows[middleY - 4][middleX + 1] = 1;

    rows[middleY + 2][middleX - 1] = 1;
    rows[middleY + 3][middleX - 1] = 1;
    rows[middleY + 4][middleX - 1] = 1;
    rows[middleY - 2][middleX - 1] = 1;
    rows[middleY - 3][middleX - 1] = 1;
    rows[middleY - 4][middleX - 1] = 1;

    rows[middleY + 6][middleX + 2] = 1;
    rows[middleY + 6][middleX + 3] = 1;
    rows[middleY + 6][middleX + 4] = 1;
    rows[middleY - 6][middleX + 2] = 1;
    rows[middleY - 6][middleX + 3] = 1;
    rows[middleY - 6][middleX + 4] = 1;

    rows[middleY + 6][middleX - 2] = 1;
    rows[middleY + 6][middleX - 3] = 1;
    rows[middleY + 6][middleX - 4] = 1;
    rows[middleY - 6][middleX - 2] = 1;
    rows[middleY - 6][middleX - 3] = 1;
    rows[middleY - 6][middleX - 4] = 1;

    rows[middleY + 2][middleX + 6] = 1;
    rows[middleY + 3][middleX + 6] = 1;
    rows[middleY + 4][middleX + 6] = 1;
    rows[middleY + 2][middleX - 6] = 1;
    rows[middleY + 3][middleX - 6] = 1;
    rows[middleY + 4][middleX - 6] = 1;

    rows[middleY - 2][middleX + 6] = 1;
    rows[middleY - 3][middleX + 6] = 1;
    rows[middleY - 4][middleX + 6] = 1;
    rows[middleY - 2][middleX - 6] = 1;
    rows[middleY - 3][middleX - 6] = 1;
    rows[middleY - 4][middleX - 6] = 1;
    return rows
}

export const createStarGrid = (rowCount, colCount) => {
    const middleY = Math.floor(rowCount / 2);
    const middleX = Math.floor(colCount / 2);
    const rows = []
    for (let i = 0; i < rowCount; i++) {
        const cols = []
        for (let j = 0; j < colCount; j++) {
            cols.push(0);
        }
        rows.push(cols);
    }
    rows[middleY+1][middleX] = 1;

    rows[middleY][middleX-1] = 1;
    rows[middleY][middleX] = 1;
    rows[middleY][middleX+1] = 1;
    
    rows[middleY-1][middleX-1] = 1;
    rows[middleY-1][middleX-2] = 1;
    rows[middleY-1][middleX-3] = 1;
    rows[middleY-1][middleX+1] = 1;
    rows[middleY-1][middleX+2] = 1;
    rows[middleY-1][middleX+3] = 1;

    rows[middleY-2][middleX-3] = 1;
    rows[middleY-2][middleX+3] = 1;

    rows[middleY-3][middleX-3] = 1;
    rows[middleY-3][middleX-4] = 1;
    rows[middleY-3][middleX+3] = 1;
    rows[middleY-3][middleX+4] = 1;

    rows[middleY-4][middleX-4] = 1;
    rows[middleY-4][middleX-5] = 1;
    rows[middleY-4][middleX+4] = 1;
    rows[middleY-4][middleX+5] = 1;

    rows[middleY-5][middleX-3] = 1;
    rows[middleY-5][middleX-4] = 1;
    rows[middleY-5][middleX+3] = 1;
    rows[middleY-5][middleX+4] = 1;

    rows[middleY-6][middleX-3] = 1;
    rows[middleY-6][middleX+3] = 1;

    rows[middleY-7][middleX-1] = 1;
    rows[middleY-7][middleX-2] = 1;
    rows[middleY-7][middleX-3] = 1;
    rows[middleY-7][middleX+1] = 1;
    rows[middleY-7][middleX+2] = 1;
    rows[middleY-7][middleX+3] = 1;

    rows[middleY-8][middleX-1] = 1;
    rows[middleY-8][middleX] = 1;
    rows[middleY-8][middleX+1] = 1;

    rows[middleY-9][middleX] = 1;

    return rows
}

export const createCrossGrid = (rowCount, colCount) => {
    const middleY = Math.floor(rowCount / 2);
    const middleX = Math.floor(colCount / 2);
    const rows = []
    for (let i = 0; i < rowCount; i++) {
        const cols = []
        for (let j = 0; j < colCount; j++) {
            cols.push(0);
        }
        rows.push(cols);
    }
    rows[middleY][middleX-1] = 1;
    rows[middleY][middleX] = 1;
    rows[middleY][middleX+1] = 1;
    rows[middleY][middleX+2] = 1;
    
    rows[middleY-1][middleX-1] = 1;
    rows[middleY-1][middleX+2] = 1;

    rows[middleY-2][middleX-3] = 1;
    rows[middleY-2][middleX-2] = 1;
    rows[middleY-2][middleX-1] = 1;
    rows[middleY-2][middleX+2] = 1;
    rows[middleY-2][middleX+3] = 1;
    rows[middleY-2][middleX+4] = 1;

    rows[middleY-3][middleX-3] = 1;
    rows[middleY-3][middleX+4] = 1;

    rows[middleY-4][middleX-3] = 1;
    rows[middleY-4][middleX+4] = 1;

    rows[middleY-5][middleX-3] = 1;
    rows[middleY-5][middleX-2] = 1;
    rows[middleY-5][middleX-1] = 1;
    rows[middleY-5][middleX+2] = 1;
    rows[middleY-5][middleX+3] = 1;
    rows[middleY-5][middleX+4] = 1;

    rows[middleY-6][middleX-1] = 1;
    rows[middleY-6][middleX+2] = 1;

    rows[middleY-7][middleX-1] = 1;
    rows[middleY-7][middleX] = 1;
    rows[middleY-7][middleX+1] = 1;
    rows[middleY-7][middleX+2] = 1;

    return rows
}