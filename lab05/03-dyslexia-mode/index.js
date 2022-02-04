/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

let dyslexiaMode = window.localStorage.getItem("dyslexiaMode") == "true";
if (dyslexiaMode) {
  document.body.className = "dyslexia-mode";
}

const toggleDyslexiaMode = () => {
  if (document.body.className == "dyslexia-mode") {
    document.body.className = "";
    window.localStorage.setItem("dyslexiaMode", "false");
  } else {
    document.body.className = "dyslexia-mode";
    window.localStorage.setItem("dyslexiaMode", "true");
  }
}

document.querySelector('#dyslexia-toggle').addEventListener('click', toggleDyslexiaMode);
