var lengthOfSequence = function(arr, n) {
  // TODO: Write some scripts here
  const instances = arr.filter(e => e === n).length;
  console.log("instances", instances);

  if (instances > 2) return 0;

  const firstIndex = arr.indexOf(n);
  console.log("firstIndex", firstIndex);

  const lastIndex = arr.lastIndexOf(n);
  console.log("lastIndex", lastIndex);

  const seqLength = arr.slice(firstIndex, lastIndex + 1).length;
  console.log("seqLength", seqLength);

  return seqLength === 1 ? 0 : seqLength;
};
