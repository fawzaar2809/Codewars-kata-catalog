function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var present = 0;

  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      present += arrayOfSheep[i];
    }
  }

  return present;
}
