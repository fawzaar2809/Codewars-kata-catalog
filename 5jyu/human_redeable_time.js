function humanReadable(seconds) {
  var hrs = Math.floor(seconds / 3600);
  var min = Math.floor((seconds - hrs * 3600) / 60);
  var seconds = seconds - hrs * 3600 - min * 60;

  seconds = Math.round(seconds * 100) / 100;

  var result = hrs < 10 ? "0" + hrs : hrs;
  result += ":" + (min < 10 ? "0" + min : min);
  result += ":" + (seconds < 10 ? "0" + seconds : seconds);

  console.log(result);
  return result;
}
