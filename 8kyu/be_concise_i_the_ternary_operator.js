function describeAge(age) {
  /*   if (age <= 12) {
        return txt +  'kid';
      } else if (age >= 13 && age <= 17) {
        return txt + 'teenager';
      } else if (age >= 18 && age <= 64) {
        return txt + 'adult';
      } else {
        return txt + 'elderly';
      } */

  /*   const txt = "You're a(n)";

  return age <= 12
    ? txt + " kid"
    : age <= 17
    ? txt + " teenager"
    : age <= 64
    ? txt + " adult"
    : txt + " elderly"; */

  return `You're a(n) ${
    a <= 12 ? "kid" : a <= 17 ? "teenager" : a <= 64 ? "adult" : "elderly"
  }`;
}
