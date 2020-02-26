function calculateSpeed(distance, time) {
  console.log(distance);

  let dis = 0;
  let t = 0;

  if (distance.slice(-2) === "km") {
    console.log(distance.slice(0, -2) * 1000);
    dis = distance.slice(0, -2) * 1000;
  } else {
    console.log(distance.slice(0, -1));
    dis = distance.slice(0, -1);
  }

  if (time.slice(-3) === "min") {
    console.log(time.slice(0, -3) * 60);
    t = time.slice(0, -3) * 60;
  } else {
    console.log(time.slice(0, -1));
    t = time.slice(0, -1);
  }

  return ((dis * 2.23694) / t).toFixed(0) + "mph";
}
