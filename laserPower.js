function calculatePower(arr) {
  let finalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    finalNum += num * 2;
  }
  return finalNum;
}
