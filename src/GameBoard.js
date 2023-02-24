import React from "react";

function GameBoard({b}) {

    function changeColor(e) {
        e.target.style.backgroundColor = 'black'
        console.log(e.target)
        console.log(b)
    }

    return(
        <div id="square" onClick={changeColor} className="gameboard">
            
        </div>
    )
}

export default GameBoard