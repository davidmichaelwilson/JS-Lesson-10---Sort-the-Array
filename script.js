let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎"]

let pawnShelf = document.getElementById("pawn-shelf")
let minorPiecesShelf = document.getElementById("minorpieces-shelf")
let rookShelf = document.getElementById("rook-shelf")
let royalShelf = document.getElementById("royal-shelf")



  
function sortPieces() {

  for(let i=0; i < chessPieces.length; i++) {
  console.log(chessPieces[i])
  
  if (chessPieces[i] === "♟︎"){
      pawnShelf.textContent += chessPieces[i]
  } else if (chessPieces[i] === "♘" || chessPieces[i] === "♝"){
      minorPiecesShelf.textContent += chessPieces[i]
  } else if (chessPieces[i] === "♜"){
      rookShelf.textContent += chessPieces[i]    
  } else {
      royalShelf.textContent += chessPieces[i]
  }
  
    
    }
}

sortPieces()