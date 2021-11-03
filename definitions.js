const Types = {
  VOID: 0,
  SAND: 1,
  WATER: 2,
  FIRE: 3,
  SMOKE: 4
}

const colors = {
  [Types.VOID]:   [0, 0, 0],
  [Types.SAND]:   [255, 255, 0],
  [Types.WATER]:  [0, 0, 255],
  [Types.FIRE]:  [255, 0, 0],
  [Types.SMOKE]:  [190, 190, 190],
}

const smokeLife = 5;

const types = {
  [Types.VOID]: {
    patterns: [],
    collisions: {}
  },
  [Types.SAND]: {
    patterns: [
      [0, 1],  // below
      [-1, 1], // below left
      [1, 1]   // below right
    ],
    collisions: {
        [Types.VOID]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            arr[targetX][targetY][1] = Types.SAND;
            arr[currentX][currentY][1] = Types.VOID;

            return true;
        },
        [Types.SAND]: function(currentX, currentY, targetX, targetY) {
            // nothing or bounce of
            return false;
        },
        [Types.WATER]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            arr[targetX][targetY][1] = Types.SAND;
            arr[currentX][currentY][1] = Types.WATER;

            return true;
        },
        [Types.FIRE]: function(currentX, currentY, targetX, targetY) {
            arr[currentX][currentY][1] = Types.FIRE;  

            return true;
        },
        [Types.SMOKE]: function(currentX, currentY, targetX, targetY) {
        
          return false;
        }
    }
  },
  [Types.WATER]: {
    patterns: [
      [0, 1],  // below
      [-3, 1], // below left
      [3, 1],   // below right
      [3, 0],
      [-3, 0],
    ],
    collisions: {
        [Types.VOID]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            arr[targetX][targetY][1] = Types.WATER;
            arr[currentX][currentY][1] = Types.VOID;

            return true;
        },
        [Types.SAND]: function(currentX, currentY, targetX, targetY) {
            // nothing or bounce of
            return false;
        },
        [Types.WATER]: function(currentX, currentY, targetX, targetY) {
            // replace water pixel with current
            return false;
        },
        [Types.FIRE]: function(currentX, currentY, targetX, targetY) {
          arr[targetX][targetY][1] = Types.VOID;
          arr[currentX][currentY][1] = Types.SMOKE;

            return false;
        },
        [Types.SMOKE]: function(currentX, currentY, targetX, targetY) {
        
          return false;
        }
    }
  },
  [Types.FIRE]: {
    patterns: [
      [0, 1],
      [1, 1],
      [1, 0],
      [-1, -1],
      [-1, 0],
      [1, 1],
      [-1, 1],
      [1, -1],
    ],
    collisions: {
        [Types.VOID]: function(currentX, currentY, targetX, targetY) {
            // just die
            arr[currentX][currentY][1] = Types.VOID;

            return true;
        },
        [Types.SAND]: function(currentX, currentY, targetX, targetY) {
            // light up
            arr[targetX][targetY][1] = Types.FIRE;
          
            return true;
        },
        [Types.WATER]: function(currentX, currentY, targetX, targetY) {
            // extinguish
            arr[currentX][currentY][1] = Types.SMOKE;

            return true;
        },
        [Types.FIRE]: function(currentX, currentY, targetX, targetY) {
        
          return false;
        },
        [Types.SMOKE]: function(currentX, currentY, targetX, targetY) {
        
          return false;
        }
    }
  },
  [Types.SMOKE]: {
    patterns: [
      [0, -1]
    ],
    collisions: {
        [Types.VOID]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            if (arr[targetX][targetY][2] === 0) {
              arr[currentX][currentY][1] = Types.VOID;
            } else if (arr[targetX][targetY][2] === undefined){
              arr[targetX][targetY][1] = Types.SMOKE;
              arr[targetX][targetY][2] = smokeLife;
              arr[currentX][currentY][1] = Types.VOID;
            } else {
              arr[targetX][targetY][2] -= 1;
            }

            return true;
        },
        [Types.SAND]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            arr[targetX][targetY][1] = Types.SMOKE;
            arr[currentX][currentY][1] = Types.VOID;

            return true;
        },
        [Types.WATER]: function(currentX, currentY, targetX, targetY) {
            // replace empty pixel with current
            arr[targetX][targetY][1] = Types.SMOKE;
            arr[currentX][currentY][1] = Types.VOID;

            return true;
        },
        [Types.FIRE]: function(currentX, currentY, targetX, targetY) {
          // replace empty pixel with current
          arr[targetX][targetY][1] = Types.SMOKE;
          arr[currentX][currentY][1] = Types.VOID;

          return true;
        },
        [Types.SMOKE]: function(currentX, currentY, targetX, targetY) {
        
          return false;
        }
    }
  },
}

