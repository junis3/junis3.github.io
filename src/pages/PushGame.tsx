import React from 'react';

let r = [255, 255, 255, 100,  55, 155, 255];
let g = [255, 155, 255, 255, 255, 155, 155];
let b = [255, 155,  99, 100, 255, 255, 255];

function PushGame() {
    let [board, setBoard] = React.useState<number[][]>([
        [1, 1, 1, 1, 6],
        [2, 2, 2, 2, 6], 
        [3, 3, 3, 3, 6],
        [4, 4, 4, 4, 6],
        [5, 5, 5, 5, 0],
    ]);
    let [x, setX] = React.useState<number>(0);

    const onClick = (y: number, x: number) => (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(y, x);
        [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([dy, dx]) => {
            const ny = y + dy, nx = x + dx;
            if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5 || board[ny][nx] > 0) return;

            let newBoard = board;
            let tmp = newBoard[y][x];
            newBoard[y][x] = newBoard[ny][nx];
            newBoard[ny][nx] = tmp;

            setBoard(newBoard);
            setX(Math.random());
        })
    }

    return (
        <div style={{margin: 'auto', left: x/10}}>
            { board && [0, 1, 2, 3, 4].map((y) => (
                <div>
                    { [0, 1, 2, 3, 4].map((x) => (
                        <button style={{width: '100px', height: '100px', fontSize: '36px', fontWeight: 'bold', backgroundColor: `rgb(${r[board[y][x]]}, ${g[board[y][x]]}, ${b[board[y][x]]})`}} onClick={onClick(y, x)}> {board[y][x]} </button>
                    ))}
                </div>
            )) }
        </div>
    )
}

export default PushGame;