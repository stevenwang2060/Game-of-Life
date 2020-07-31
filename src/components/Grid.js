import React from 'react';
import { GridWrapper, Grid, Cell } from './styles';

export default ({ grid, colCount, handleCellClick }) => {
    return (
        <GridWrapper>
            <Grid colCount={colCount}>
                {grid.map((row, i) => row.map((col, j) => (
                    <Cell 
                        key={`${i}-${j}`} 
                        live={grid[i][j]}
                        onClick={() => handleCellClick(i, j)}
                    />
                )))}
            </Grid>
            <div className="info">
                <h3>Rules:</h3>
                <div className="rules">
                    <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                    <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                    <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                    <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
                </div>
            </div>
        </GridWrapper>
    );
}