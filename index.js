function originalScale( appContainerId ) {

  var App = document.getElementById( appContainerId );
  App.style.zoom = 1 / devicePixelRatio;

}

try {

  if ( window ) { document.window.originalScale = originalScale; }

} catch (err) { }

module.exports = originalScale;