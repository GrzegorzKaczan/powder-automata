function getCursorPosition(canvas, event, pressed) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  if (pressed) {
    for (let i = x; i < x + 21; i++) {
        for (let j = y; j < y + 11; j++) {
            arr[i + 3*(i%2)][j+ 3*(j%2)][1] = Types.SAND;
        }
    }

      //arr[x][y][1] = Types.SAND;
  }
}


let pressed = false;
document.body.addEventListener('mousedown', function(e) {
  //pressed = true;

  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const buttons = {
    1: Types.SAND,
    2: Types.WATER,
    4: Types.FIRE
  }

  if (e.buttons === 4) {
    arr[x][y][1] = Types.FIRE;
  } else {
    for (let i = x; i < x + 32; i++) {
      for (let j = y; j < y + 32; j++) {
        arr[i + 
          Math.floor(Math.random()*33)][j+ 
            Math.floor(Math.random()*33)][1] = buttons[e.buttons];
      }
  }
  }

});
window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);
canvas.addEventListener('mouseup', function(e) {
  pressed = false;
});
canvas.addEventListener('dblclick', function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  arr[x][y][1] = Types.FIRE;
});


canvas.addEventListener('mousemove', function(e) {
  getCursorPosition(canvas, e, pressed)
});