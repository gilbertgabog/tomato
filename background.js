chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 200,
            'height': 200
        },
        'resizable': false
    });
});
