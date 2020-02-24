// Project 3 - (Individual: Denis Poirier) - Tic Tac Toe
//  ***INCOMPLETE***

// Story - Requirements - 8 requirements 

//---------------------------
//Start Game---
//Given an empty board
//When the user clicks 'Start Game'
//Then the 'Start Game' button is disabled ("grayed out")
//And the status area contains "Player X's turn"
//--------------------------

//No Rules---
//Given an empty board, and the current player is X
//When the user selects a cell
//Then the board redraws
//And an X appears in that cell, and the turn ends
//And the current player changes from X to O
//   ------------
//Given the player is O
//When the user selects a cell
//Then an O appears in that cell
//And the turn ends, and the current player changes from O to X
//-------------------------------

//Rules-----
//When the user selects a cell that is not empty
//Then the game says "Please select an empty cell." and does not put an X or O in the cell
//And the current player does not change

//------------------------------
//Win Condition-----
//Given the turn has just ended
//When if there are three Xs in a row, column, or diagonal
//Then the system draws a line through the winning three cells
//And the app says "Congratulations! Player X wins!"
//And the game ends
//(and likewise for Player O)

//----------------------------
//Names-----
//Given a new game
//When starting a game
//Then allow the user(s) to choose the names of the players (not just X and O).

//---------------------------------
//Game Time----
//Given a new game
//When the game is started
//Then the timer should show the time in the format: - Time Elapsed XX seconds
//And every second during game play, until a player has won, the clock should proceed by one second.
//Example: - 32 seconds - 33 seconds - 34 seconds

//    Tic Tac Toe
//       | X | O
//    --- --- ---
//       | O |  
//    --- --- ---
//       | X |  

//Player O's turn
//Time Elapsed 32 seconds
//--------------------------------

//New Game UI----------
//Given a new game
//When the game first loads
//Then give the user the options "Player vs Player" or "Player vs Computer"
//---------------------------------------

//Artificial Stupidity
//Given a new game with the options "Player vs Player" or "Player vs Computer"
//When "Player vs Computer" is chosen
//Then do not ask for a name - The computer player always picks an 
//empty cell at random - The human is always X and the computer is always O
