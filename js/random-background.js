"use strict";

function randomHSL() {
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

window.onload = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = randomHSL();
};