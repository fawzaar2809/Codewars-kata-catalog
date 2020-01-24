function points(games) {
  // your code here
  var x;
  var y;
  var totalPoints = 0;

  for (var i = 0; i < games.length; i++) {
    x = games[i].charAt(0);
    y = games[i].charAt(2);

    if (x > y) {
      totalPoints += 3;
    } else if (x < y) {
      totalPoints += 0;
    } else if (x == y) {
      totalPoints += 1;
    }
  }

  return totalPoints;
}
