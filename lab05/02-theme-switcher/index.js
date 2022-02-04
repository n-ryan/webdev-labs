const defaultTheme = () => {
   document.body.className = "";
};

const oceanTheme = () => {
   document.body.className = "ocean";
};

const desertTheme = () => {
   document.body.className = "desert";
};

const highContrastTheme = () => {
   document.body.className = "high-contrast";
};

document.querySelector('#default').addEventListener('click', defaultTheme);
document.querySelector('#ocean').addEventListener('click', oceanTheme);
document.querySelector('#desert').addEventListener('click', desertTheme);
document.querySelector('#high-contrast').addEventListener('click', highContrastTheme);
