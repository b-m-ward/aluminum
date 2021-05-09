//ALL other ts files should import to here
//The build script will pull them in to output the main.js file

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
        `http://openinsider.com/search?q=${ticker}`,
        `https://www.sec.gov/edgar/search/#/entityName=${ticker}`,
        `https://stockcharts.com/h-sc/ui?s=${ticker}`,
        `https://robinhood.com/stocks/${ticker}`,
        `https://www.moodys.com/search?keyword=${ticker}`
    ];
    return urls;
}

function setup() : void {
    button_ref.addEventListener("click", search);
}

setup();