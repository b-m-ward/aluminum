//ALL other ts files should import to here
//The build script will pull them in to output the main.js file
console.log('main loaded');
chrome.browserAction.setBadgeBackgroundColor({ color: '#313131' });
chrome.browserAction.setBadgeText({ text: "Al!" });
var button_ref = document.getElementById('search-sources');
var ticker_ref = document.getElementById('ticker');
function search() {
    var val = ticker_ref["value"];
    console.log('searching: ', val);
    var urls = getUrls(val);
    for (var i = 0; i < urls.length; i++) {
        // will open each link in the current window
        chrome.tabs.create({
            url: urls[i]
        });
    }
}
function getUrls(ticker) {
    var urls = [
        "https://finance.yahoo.com/quote/" + ticker,
        "https://www.nasdaq.com/market-activity/stocks/" + ticker,
        "https://seekingalpha.com/symbol/" + ticker,
        "http://openinsider.com/search?q=" + ticker
    ];
    return urls;
}
function setup() {
    console.log('setting up handlers');
    button_ref.addEventListener("click", search);
}
setup();
