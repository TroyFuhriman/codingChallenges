function scan(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    if (string == "contraband") {
      count++;
    }
  }
  return count;
}
