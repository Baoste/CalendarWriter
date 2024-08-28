function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            if(callback) callback(response);
        });
    });
}

document.querySelector("#export").addEventListener("click", (e) => {
    sendMessageToContentScript({cmd:'test', value:'Click to Download'});
});

