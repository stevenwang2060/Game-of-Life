import React, { useState, useCallback, useRef } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Gen from './components/Gen';
import Grid from './components/Grid';
import produce from 'immer';
import './index.css';

import { createEmptyGrid, createRandomGrid, createPulsarGrid, createStarGrid, createCrossGrid } from './utils/generateGrid';

const operations = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1 ,0],
  [1, -1],
  [-1, 1],
  [-1, -1],
  [1, 1]
]

function App() {
  const rowCount = 30;
  const colCount = 50;

  const [ speed, setSpeed ] = useState(100);
  const [ running, setRunning ] = useState(false);
  const [ generationCount, setGenerationCount ] = useState(0);
  const [ grid, setGrid ] = useState(() => createEmptyGrid(rowCount, colCount));

  // Returns a ref object to use running in callback.
  const runningRef = useRef(running);
  runningRef.current = running;

  // Returns a ref object to use speed in callback.
  const speedRef = useRef(speed);
  speedRef.current = speed;

  /*
   * handleSpeed - Handles the speed selection.
   * useCallback prevents re-renders in the Nav.
  */
  const handleSpeed = useCallback(selectedSpeed => {
    setSpeed(selectedSpeed)
  }, [setSpeed])
    
  const handleClear = useCallback(() => {
    setRunning(false);
    runningRef.current = false;
    setGrid(() => createEmptyGrid(rowCount, colCount));
    setGenerationCount(0);
  }, [setRunning, setGrid, setGenerationCount])

  /*
   * toggleRunning - Starts and stops the game.
   * useCallback prevents re-renders in the Nav.
  */
  const toggleRunning = useCallback(() => {
    setRunning(running => !running);
    runningRef.current = true;
    runSimulation();
  }, [setRunning])

  /*
   * handleCellClick - Toggles cells dead or alive.
   * 1 for alive, 0 for dead.
   * Increases the live cell count by 1.
  */
  const handleCellClick = (i, j) => {
      setGrid(grid => {
        return produce(grid, newGrid => {
          newGrid[i][j] = grid[i][j] ? 0 : 1;
        })
      })
  }

  /**
   * generatePreset - Loads the grid with the selected preset.
   * useCallback prevents re-renders in the Nav.
   */
  const generatePreset = useCallback(selectedPreset => {
    switch(selectedPreset){
      case 'RANDOM':
        setGrid(() => createRandomGrid(rowCount, colCount));
        break;
      case 'PULSAR':
          setGrid(() => createPulsarGrid(rowCount, colCount));
        break;
      case 'STAR':
          setGrid(() => createStarGrid(rowCount, colCount));
        break;
      case 'CROSS':
          setGrid(() => createCrossGrid(rowCount, colCount));
      break;
      default:
        setGrid(() => createEmptyGrid(rowCount, colCount));
    }
    setGenerationCount(0);
  }, [setGrid, setGenerationCount])

  /*
   * runSimulation - The main function for the behavior of the cells.
   * 1. Creates a new grid.
   * 2. Loop through each column in each row.
   * 3. Count number of live neighbors for each cell.
   * 4. Checks if cells are alive or dead.
   * 5. Sets the current state of the grid to the new grid. 
   */
  const runSimulation = useCallback(() => {
      if(!runningRef.current){
          return
      }
      setGrid(grid => {
        return produce(grid, newGrid => {
          for (let i=0; i<rowCount; i++){ 
            for (let j=0; j<colCount; j++){ 
              // Calculate number of neighbors for each cell.
              let neighborCount = 0;
              operations.forEach(([x, y]) => { 
                const tempI = i + x
                const tempJ = j + y
                if (tempI >= 0 && tempI < rowCount && tempJ >= 0 && tempJ < colCount){
                  neighborCount += grid[tempI][tempJ]
                }
              });
              // If neighbor number is not 2 or 3, cell dies.
              if (neighborCount < 2 || neighborCount > 3){
                newGrid[i][j] = 0;
              }
              // If the dead cell has 3 neighbors, it becomes a live cell.
              else if (grid[i][j] === 0 && neighborCount === 3){
                newGrid[i][j] = 1;
              }          
            }
          }
        })
      })
      setGenerationCount(count => count + 1);
      setTimeout(runSimulation, speedRef.current)
  }, [])

  return (
    <div>
      <Route exact path='/'>
        <Nav 
          handleClear={handleClear}
          handleSpeed={handleSpeed} 
          speed={speed} 
          running={running} 
          toggleRunning={toggleRunning}
          generatePreset={generatePreset}
        />
        <Gen
          generationCount={generationCount}
        />
        <Grid 
          running={running} 
          speed={speed}
          grid={grid}
          colCount={colCount}
          handleCellClick={handleCellClick}
        />
      </Route>
    </div>
  );
}

export default App;