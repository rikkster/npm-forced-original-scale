function originalScale( appContainerId ) {

  var App = document.getElementById( appContainerId );
  
  if ( window.innerWidth >= 1225 ) { 

    App.style.zoom = 1 / devicePixelRatio;

  } else {

    App.style.zoom = 1;

  }

  function refreshScale() { console.log(`refreshScale`); originalScale( appContainerId ) }

  var resizeTimeout;
  
  window.onresize = function() {

    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(refreshScale, 100);

  };

}

try {

  if ( window ) { document.window.originalScale = originalScale; }

} catch (err) { }

module.exports = originalScale;