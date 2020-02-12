function past(h, m, s) {
  //#Happy Coding! ^_^
  let seconds = 0;

  if (h > 0) {
    seconds = seconds + h * 3600;
  }
  if (m > 0) {
    seconds = seconds + m * 60;
  }
  if (s > 0) {
    seconds = seconds + s;
  }

  return seconds * 1000;
}
