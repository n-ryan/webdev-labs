const makeBigger = () => {
   const header = document.querySelector('header h1');
   const paragraph = document.querySelector('.content');

   currentHeaderSize = parseFloat(window.getComputedStyle(header).fontSize);
   currentParagraphSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

   header.style.fontSize = currentHeaderSize + 5 + 'px';
   paragraph.style.fontSize = currentParagraphSize + 5 + 'px';
};

const makeSmaller = () => {
   const header = document.querySelector('header h1');
   const paragraph = document.querySelector('.content');

   currentHeaderSize = parseFloat(window.getComputedStyle(header).fontSize);
   currentParagraphSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

   header.style.fontSize = currentHeaderSize - 5 + 'px';
   paragraph.style.fontSize = currentParagraphSize - 5 + 'px';
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
