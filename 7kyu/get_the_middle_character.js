function getMiddle(s) {
  //Code goes here!
  const result =
    s.length % 2 != 0
      ? s.charAt((s.length / 2).toFixed() - 1)
      : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);

  return result;
}
