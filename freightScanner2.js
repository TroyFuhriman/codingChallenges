function scan(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    if (string == "contraband") {
      output.push(i);
    }
  }
  return output;
}
