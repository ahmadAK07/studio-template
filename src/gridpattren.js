
document.addEventListener('DOMContentLoaded', function () {
const staticBlocks = [
[1, 1],
[2, 2],
[4, 3],
[6, 2],
[7, 4],
[5, 5],
];

const yOffset = 0;
const interactive = true;
let currentBlock = null;
let counter = 0;
let hoveredBlocks = [];

const svg = document.getElementById('gridPattern');
const blocksContainer = document.getElementById('blocksContainer');

function createBlock(x, y, key = '') {
const ns = 'http://www.w3.org/2000/svg';
const path = document.createElementNS(ns, 'path');
path.setAttribute('transform', `translate(${-32 * y + 96 * x} ${160 * y + 96})`);
path.setAttribute(
  'd',
  'M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
);
if (key) {
  path.setAttribute('data-key', key);
  path.setAttribute('style', 'opacity: 0; transition: opacity 1s;');
}
blocksContainer.appendChild(path);
return path;
}

staticBlocks.forEach((block) => createBlock(block[0], block[1]));

if (interactive) {
svg.addEventListener('mousemove', (event) => {
  const rect = svg.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

  x = x - rect.width / 2 - 32;
  y = y - yOffset;
  x += Math.tan(32 / 160) * y;
  x = Math.floor(x / 96);
  y = Math.floor(y / 160);

  if (currentBlock && currentBlock[0] === x && currentBlock[1] === y)
    return;

  currentBlock = [x, y];

  counter++;
  const key = counter;
  const block = createBlock(x, y, key);

  // setTimeout(() => {
  // }, 0);
  block.style.opacity = '1';

  setTimeout(() => {
    block.style.opacity = '0';
    setTimeout(() => {
      blocksContainer.removeChild(block);
    }, 500);
  }, 0);
});
}
});

