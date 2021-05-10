class SearchSource {
    url: string;
    isSearchable: boolean;
    prettyName: string;
    constructor(srcUrl: string, allow: boolean, name: string)  {
        this.url = srcUrl;
        this.isSearchable = allow;
        this.prettyName = name;
    }
}

export { SearchSource }