var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const size = 520;

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
        arr[i][j] = [];
        arr[i][j][0] = false;  // painted
        arr[i][j][1] = 0;      // type
    }   
}

const id = ctx.createImageData(canvasWidth, canvasHeight);

