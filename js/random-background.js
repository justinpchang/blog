"use strict";

function randomHSL() {
  return "hsl(" + 360 * Math.random() + ',' +
             (20 + 20 * Math.random()) + '%,' + 
             (90 + 5 * Math.random()) + '%)'
}

window.onload = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = randomHSL();
};