//ALL other ts files should import to here
//The build script will pull them in to output the main.js file
console.log('main loaded');
chrome.browserAction.setBadgeBackgroundColor({ color: '#313131' });
chrome.browserAction.setBadgeText({ text: "Al!" });
