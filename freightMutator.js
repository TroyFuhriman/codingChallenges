function mutate(arr) {
  let mutatedItems = [];
  mutatedItems = arr.map(function (str) {
    return str.toUpperCase();
  });

  return mutatedItems;
}
