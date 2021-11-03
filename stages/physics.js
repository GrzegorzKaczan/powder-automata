function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function physics() {

  for (let i = 3; i < size - 3; i++) {
    for (let j = 3; j < size - 3; j++) {
      if (arr[i][j][0] === false) {
        const currentPixel = arr[i][j];
        const type = currentPixel[1];

        const patterns = shuffle(types[type].patterns);

        for (let l = 0; l < patterns.length; l++) {
          const pattern = patterns[l];
          const dx = i + pattern[0];
          const dy = j + pattern[1];

          const targetPixel = arr[dx][dy];

          const hit = types[type].collisions[targetPixel[1]](i, j, dx, dy);


          if (hit) {
            targetPixel[0] = true;
            currentPixel[0] = true;
            break;
          }
        }
      }
    }
  }
}