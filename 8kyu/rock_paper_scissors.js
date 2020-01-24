const rps = (p1, p2) => {
  var msg;

  if (p1 == "scissors" && p2 == "paper") {
    msg = "Player 1 won!";
  } else if (p1 == "rock" && p2 == "scissors") {
    msg = "Player 1 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    msg = "Player 1 won!";
  } else if (p1 == "paper" && p2 == "scissors") {
    msg = "Player 2 won!";
  } else if (p1 == "scissors" && p2 == "rock") {
    msg = "Player 2 won!";
  } else if (p1 == "rock" && p2 == "paper") {
    msg = "Player 2 won!";
  } else if (p1 == "paper" && p2 == "paper") {
    msg = "Draw!";
  } else if (p1 == "scissors" && p2 == "scissors") {
    msg = "Draw!";
  } else if (p1 == "rock" && p2 == "rock") {
    msg = "Draw!";
  }

  return msg;
};
