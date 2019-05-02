function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
  }
  return array;
}
