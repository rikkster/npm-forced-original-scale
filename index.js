function originalScale( appContainerId ) {

  var App = document.getElementById( appContainerId );
  App.style.zoom = 1 / devicePixelRatio;

}

window.originalScale = originalScale;

module.exports = originalScale;