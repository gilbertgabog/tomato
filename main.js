chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  chrome.app.window.create('build.html', {
    'bounds': {
      'width': 300,
      'height': 200
    },
    'resizable': false,
    'frame': 'none'
  });
});

document.addEventListener('readystatechange', function(e) {
  console.log('Ready state fired.');
}, false);
