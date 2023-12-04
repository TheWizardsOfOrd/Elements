let img;
let blockSize = 10;
let grid = [];
let similartyFactor = 20;
let canvasWidth, canvasHeight;

function preload() {
  img = loadImage(seedInscription);
}

function setup() {
  let imgRatio = img.width / img.height;

  if (img.width > img.height) {
    canvasWidth = 1024;
    canvasHeight = canvasWidth / imgRatio;
  } else {
    canvasHeight = 1024;
    canvasWidth = canvasHeight * imgRatio;
  }

  createCanvas(canvasWidth, canvasHeight);
  noLoop();
  img.resize(canvasWidth, canvasHeight);
}

function draw() {
  background(0);

  for (let y = 0; y < img.height; y += blockSize) {
    let gRow = [];
    for (let x = 0; x < img.width; x += blockSize) {
      let c = img.get(x, y);
      gRow.push({ x, y, w: blockSize, h: blockSize, c, merged: false });
    }
    grid.push(gRow);
  }

  let mergedBlocks = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (!grid[y][x].merged) {
        let block = getLargestSquare(x, y, grid);
        mergedBlocks.push(block);
        x += block.w / blockSize - 1;
      }
    }
  }

  for (let block of mergedBlocks) {
    noStroke();
    fill(block.c);
    rect(block.x, block.y, block.w, block.h);
    stroke(0);
    noFill();
    rect(block.x, block.y, block.w, block.h);
  }
}

function getLargestSquare(x, y, grid) {
  let maxSize = Math.min(grid.length - y, grid[0].length - x);
  let color = grid[y][x].c;

  for (let size = maxSize; size > 0; size--) { 
    let canMerge = true;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (grid[y + i][x + j].merged || colorDist(color, grid[y + i][x + j].c) > similartyFactor) {
          canMerge = false;
          break;
        }
      }
      if (!canMerge) {
        break;
      }
    }

    if (canMerge) {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          grid[y + i][x + j].merged = true;
        }
      }
      return { x: x * blockSize, y: y * blockSize, w: size * blockSize, h: size * blockSize, c: color };
    }
  }
}

function colorDist(c1, c2) {
  return abs(red(c1) - red(c2)) + abs(green(c1) - green(c2)) + abs(blue(c1) - blue(c2));
}
