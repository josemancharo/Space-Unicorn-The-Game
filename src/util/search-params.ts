function getSearchParams(search: string): Map<string, string>{
    const params = new URLSearchParams(search);
    const map = new Map<string, string>()
    for (const [key,value] of params.entries()){
        map.set(key, value);
    }
    return map;
}

export default getSearchParams(window.location.search);