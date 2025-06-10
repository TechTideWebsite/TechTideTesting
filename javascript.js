  window.onload = function() {
    let screenWidth = window.innerWidth / window.devicePixelRatio;

    let zoomLevel = screenWidth >= 2500 ? 1 : (screenWidth / 2560) * 0.848;

    zoomLevel = Math.min(zoomLevel, 1);

    document.body.style.zoom = (zoomLevel * 100) + "%";

    console.log("Detected Width: " + screenWidth + "px, Applied Zoom: " + document.body.style.zoom);
  };