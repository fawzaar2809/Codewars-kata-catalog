function getNames(data) {
  let data_names = [];

  for (let i = 0; i < data.length; i += 1) {
    data_names.push(data[i].name);
  }

  return data_names;
}

/* function getNames(data) {
  return data.map(function(item) {
    return item.name;
  });
}
 */
