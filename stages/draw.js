function draw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  
  var imagePixels = id.data;
  
  for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
          var offset = (y * id.width + x) * 4;
          const color = colors[arr[x][y][1]];
          imagePixels[offset] =     color[0];    // R
          imagePixels[offset + 1] = color[1];      // G
          imagePixels[offset + 2] = color[2];      // B
          imagePixels[offset + 3] = 255;           // A
      }   
  }

  ctx.putImageData(id, 0, 0);
}