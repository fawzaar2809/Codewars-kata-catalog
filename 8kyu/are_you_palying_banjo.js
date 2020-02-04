function areYouPlayingBanjo(name) {
  // Implement me

  return name.charAt(0) == "r" || name.charAt(0) == "R"
    ? name + " " + "plays banjo"
    : name + " " + "does not play banjo";
}
