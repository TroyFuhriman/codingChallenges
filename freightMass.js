function calculateMass(arr) {
  let totalMass = 0;
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    totalMass += string.length;
  }
  return totalMass;
}
