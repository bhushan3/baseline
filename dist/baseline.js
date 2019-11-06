"use strict";

var baseline = {
  removFocusOutline: function removFocusOutline() {
    // Removes CSS outlines in an accessible manner.
    var styleElement = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(styleElement); // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move

    document.addEventListener('mousedown', function () {
      styleElement.innerHTML = ':focus{outline:none!important}';
    });
    document.addEventListener('keydown', function (event) {
      if (9 === event.keyCode) {
        styleElement.innerHTML = '';
      }
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  baseline.removFocusOutline();
}); // window.addEventListener( 'load', function() {});