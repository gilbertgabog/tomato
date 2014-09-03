chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var width = 400;
  var height = 300;

  chrome.app.window.create('build.html', {
    id: "tomato",
    bounds: {
      width: width,
      height: height
    },
    resizable: false
  });
});

document.addEventListener('readystatechange', function(e) {
  console.log('Ready state fired.');
}, false);
