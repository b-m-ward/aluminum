//ALL other ts files should import to here
//The build script will pull them in to output the main.js file

console.log('main loaded');
chrome.browserAction.setBadgeBackgroundColor({color: '#313131'});
chrome.browserAction.setBadgeText({ text: "Al!" });

const button_ref = document.getElementById('search-sources');
const ticker_ref = document.getElementById('ticker');

function search() : void {
    let val = ticker_ref["value"];
    console.log('searching: ', val);
    let urls = getUrls(val);
    for (var i = 0; i < urls.length; i++) {
        // will open each link in the current window
        chrome.tabs.create({
            url: urls[i]
        });
    }
}

function getUrls(ticker: string) : string[] {
    let urls = [] = [
        `https://finance.yahoo.com/quote/${ticker}`,
        `https://www.nasdaq.com/market-activity/stocks/${ticker}`,
        `https://seekingalpha.com/symbol/${ticker}`,
        `http://openinsider.com/search?q=${ticker}`
    ];
    return urls;
}

function setup() : void {
    console.log('setting up handlers');
    button_ref.addEventListener("click", search);
}


setup();

