function nbYear(p0, percent, aug, p) {
  let years = 0;

  let perChange = percent / 100;

  for (let i = p0; i < p; i += aug + perChange * i) {
    years++;
  }

  return years;
}
