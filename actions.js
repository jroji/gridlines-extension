document.getElementById("grid").addEventListener("click", function(event){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {size: document.getElementById('line-size').value});
  });
});

document.getElementById("toggle").addEventListener("click", function(event){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {toggle: true});
  });
});
