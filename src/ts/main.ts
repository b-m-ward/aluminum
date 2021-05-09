chrome.browserAction.setBadgeBackgroundColor({color: '#313131'});
chrome.browserAction.setBadgeText({ text: "Al!" });

const button_ref = document.getElementById('search-sources');
const ticker_ref = document.getElementById('ticker');

var urls: SearchSource[] = [
    { url: `https://finance.yahoo.com/quote/`, isSearchable: true, prettyName: 'yahoo finance' },
    { url: `https://www.nasdaq.com/market-activity/stocks/`, isSearchable: true, prettyName: 'nasdaq'},
    { url: `https://seekingalpha.com/symbol/`, isSearchable: true, prettyName: 'seeking alpha'},
    { url: `http://openinsider.com/search?q=`, isSearchable: true, prettyName: 'open insider'},
    { url: `https://www.sec.gov/edgar/search/#/entityName=`, isSearchable: true, prettyName: 'sec EDGAR'},
    { url: `https://stockcharts.com/h-sc/ui?s=`, isSearchable: true, prettyName: 'stockcharts'},
    { url: `https://robinhood.com/stocks/`, isSearchable: true, prettyName: 'robinhood'},
    { url: `https://www.moodys.com/search?keyword=`, isSearchable: true, prettyName: 'moodys' }
];

function search() : void {
    let val = ticker_ref["value"];
    let searchables = urls.filter(r => { return r.isSearchable === true });
    for (var i = 0; i < searchables.length; i++) {
        // will open each link in the current window
        chrome.tabs.create({
            url: urls[i].url + val
        });
    }
}

function getUrls(ticker: string) : SearchSource[] {
    let urls: SearchSource[] = [
        { url: `https://finance.yahoo.com/quote/${ticker}`, isSearchable: true, prettyName: 'yahoo finance' },
        { url: `https://www.nasdaq.com/market-activity/stocks/${ticker}`, isSearchable: true, prettyName: 'nasdaq'},
        { url: `https://seekingalpha.com/symbol/${ticker}`, isSearchable: true, prettyName: 'seeking alpha'},
        { url: `http://openinsider.com/search?q=${ticker}`, isSearchable: true, prettyName: 'open insider'},
        { url: `https://www.sec.gov/edgar/search/#/entityName=${ticker}`, isSearchable: true, prettyName: 'sec EDGAR'},
        { url: `https://stockcharts.com/h-sc/ui?s=${ticker}`, isSearchable: true, prettyName: 'stockcharts'},
        { url: `https://robinhood.com/stocks/${ticker}`, isSearchable: true, prettyName: 'robinhood'},
        { url: `https://www.moodys.com/search?keyword=${ticker}`, isSearchable: true, prettyName: 'moodys' }
    ];
    return urls;
}

function setup() : void {
    button_ref.addEventListener("click", search);
}

setup();

class SearchSource {
    url: string;
    isSearchable: boolean;
    prettyName: string;
}