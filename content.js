var s = document.createElement('script');
s.type="text/javascript";
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};

(document.head || document.documentElement).appendChild(s);


	document.addEventListener('movie_name', function(e) {
    chrome.storage.local.set({name: e.detail});
});