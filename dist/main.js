chrome.browserAction.setBadgeBackgroundColor({ color: '#313131' });
chrome.browserAction.setBadgeText({ text: "Al!" });
var button_ref = document.getElementById('search-sources');
var ticker_ref = document.getElementById('ticker');
var urls = [
    { url: "https://finance.yahoo.com/quote/", isSearchable: true, prettyName: 'yahoo finance' },
    { url: "https://www.nasdaq.com/market-activity/stocks/", isSearchable: true, prettyName: 'nasdaq' },
    { url: "https://seekingalpha.com/symbol/", isSearchable: true, prettyName: 'seeking alpha' },
    { url: "http://openinsider.com/search?q=", isSearchable: true, prettyName: 'open insider' },
    { url: "https://www.sec.gov/edgar/search/#/entityName=", isSearchable: true, prettyName: 'sec EDGAR' },
    { url: "https://stockcharts.com/h-sc/ui?s=", isSearchable: true, prettyName: 'stockcharts' },
    { url: "https://robinhood.com/stocks/", isSearchable: true, prettyName: 'robinhood' },
    { url: "https://www.moodys.com/search?keyword=", isSearchable: true, prettyName: 'moodys' }
];
function search() {
    var val = ticker_ref["value"];
    var searchables = urls.filter(function (r) { return r.isSearchable === true; });
    for (var i = 0; i < searchables.length; i++) {
        // will open each link in the current window
        chrome.tabs.create({
            url: urls[i].url + val
        });
    }
}
function getUrls(ticker) {
    var urls = [
        { url: "https://finance.yahoo.com/quote/" + ticker, isSearchable: true, prettyName: 'yahoo finance' },
        { url: "https://www.nasdaq.com/market-activity/stocks/" + ticker, isSearchable: true, prettyName: 'nasdaq' },
        { url: "https://seekingalpha.com/symbol/" + ticker, isSearchable: true, prettyName: 'seeking alpha' },
        { url: "http://openinsider.com/search?q=" + ticker, isSearchable: true, prettyName: 'open insider' },
        { url: "https://www.sec.gov/edgar/search/#/entityName=" + ticker, isSearchable: true, prettyName: 'sec EDGAR' },
        { url: "https://stockcharts.com/h-sc/ui?s=" + ticker, isSearchable: true, prettyName: 'stockcharts' },
        { url: "https://robinhood.com/stocks/" + ticker, isSearchable: true, prettyName: 'robinhood' },
        { url: "https://www.moodys.com/search?keyword=" + ticker, isSearchable: true, prettyName: 'moodys' }
    ];
    return urls;
}
function setup() {
    button_ref.addEventListener("click", search);
}
setup();
var SearchSource = /** @class */ (function () {
    function SearchSource() {
    }
    return SearchSource;
}());
