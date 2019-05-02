function forLoop(array) {
  var length = array.length;
  for (let i = 0; i < 25; i++) {
    // console.log(i, array);
    if (i === 0) {
      array[length + i] = "I am 1 strange loop.";
      // console.log("I am 1 strange loop.");
    } else {
      array[length + i] = `"I am ${i + 1} strange loops."`;
      // console.log(`"I am ${i + 1} strange loops."`);
    }
  }
  console.log(array);
  return array;
}
