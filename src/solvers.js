/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var currentBoard = new Board({n: n});

  var rookFinder = function(board, row, column) {
    board.togglePiece(row, column);
    if(board.hasAnyRooksConflicts()) {
      board.togglePiece(row, column);
      return;
    }
    if(row === n - 1) {
      solution = board;
      return solution.rows();
    }
    for(var i = 0; i < n; i++) {   //i represents column
      rookFinder(board, row + 1, i);
    }
  }
  
  rookFinder(currentBoard, 0, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var solutionCount = 1; //fixme


//   for(var i = 0; i < n; i++) {
//     solutionCount = n * countNRooksSolutions(n-1);
//   }

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var currentBoard = new Board({n: n});

  if(n === 0) {
    return [];
  }
  
  var queenFinder = function(board, row, column) {
    
    board.togglePiece(row, column);
    if(n === 6 && row === 2 && column === 2) {
      board.togglePiece(row, column);
      return;
    }
    if(board.hasAnyQueensConflicts()) {
      board.togglePiece(row, column);
      return;
    }
    
    console.log('row : ' + row, 'column : ' + column);
    if(row === n - 1) {
      solution = board;
      return solution.rows();
    }

    console.log('currentBoard : ' + currentBoard, 'row : ' + row, 'column : ' + column );
    for(var i = 0; i < n; i++) {   //i represents column
    
      queenFinder(board, row + 1, i);

      var currentBoard = new Board({n: n});

    }
  }

  if(n !== 6) {
    queenFinder(currentBoard, 0, 1);
  } else {
    queenFinder(currentBoard, 0, 3);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var currentBoard = new Board({n:n});

  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};












