function getFirstAmountSorted(arr, num) {
  arr.sort();
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i <= num - 1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
