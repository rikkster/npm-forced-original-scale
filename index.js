module.exports.fromUrl = function ( appContainerId ) {

  var App = document.getElementById( appContainerId );
  App.style.zoom = 1 / devicePixelRatio;
  App.style['-moz-transform'] = `scale(${1 / devicePixelRatio})`;

}