/* function peopleWithAgeDrink(old) {
  if (old > 20) return "drink whisky";
  else if (old > 17) return "drink beer";
  else if (old > 13) return "drink coke";
  else return "drink toddy";
}
 */

function peopleWithAgeDrink(old) {
  var result = "";

  switch (true) {
    case old < 14:
      result = "drink toddy";
      break;
    case old < 18:
      result = "drink coke";
      break;
    case old < 21:
      result = "drink beer";
      break;
    default:
      result = "drink whisky";
      break;
  }

  return result;
}
